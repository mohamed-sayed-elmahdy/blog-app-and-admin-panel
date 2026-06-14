import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/mongodb';
import Blog from '@/lib/models/BlogModel';
import { uploadImageToCloudinary } from '@/utils/uploadImage';
import { generateUniqueSlug } from '@/utils/generateSlug';
// import { verifyToken } from "@/lib/auth/verifyToken";
// import User from "@/lib/models/UserModel";

export async function GET(request) {
    try {
        await connectDB();
        const blogs = await Blog.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, message: "Blogs Fetched successfully", blogs });
    }
    catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        await connectDB();
        const data = await request.formData();
        const userJson = data.get("user") ? JSON.parse(data.get("user")) : null; // will be deleted after craete auth middleware
        if (!userJson) {
            return NextResponse.json({ error: "User not found" }, { status: 403 });
        } // will be deleted after craete auth middleware
        const user = userJson; // will be deleted after craete auth middleware
        // const decoded = await verifyToken(request); // will be uncommented after craete auth middleware
        // if (!decoded) {
        //     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        // } // will be uncommented after craete auth middleware 
        // const user = await User.findById(decoded.id); // will be uncommented after craete auth middleware
        // if (!user) {
        //     return NextResponse.json({ error: "User not found" }, { status: 404 });
        // } // will be uncommented after craete auth middleware

        // check if user is admin
        if (user.role !== "admin") {
            return NextResponse.json({ error: "Unauthorized - Admin only" }, { status: 403 });
        }

        const requiredFields = [
            "titleEn",
            "titleAr",
            "categoryEn",
            "categoryAr",
            "contentEn",
            "contentAr",
            "authorNameEn",
            "authorNameAr",
            "tagsEn",
            "tagsAr",
        ];

        const missingFields = requiredFields.filter(field => !data.get(field)?.trim());
        if (missingFields.length > 0) {
            return NextResponse.json({ error: `Missing required fields: ${missingFields.join(", ")}` }, { status: 400 });
        }

        const blogImage = data.get("blogImage");
        let imageUrl = null;

        if (blogImage) {

            // لو File
            if (blogImage instanceof File && blogImage.size > 0) {
                imageUrl = await uploadImageToCloudinary(blogImage, "blogs");
            }
            // لو String URL
            else if (typeof blogImage === "string") {
                imageUrl = blogImage;
            }
        }
        const authorImage =
            user.profileImage ||
            "https://res.cloudinary.com/diw11kbbx/image/upload/v1760466884/myImg_cdouwg.png";

        // Generate unique slug
        const titleEn = data.get("titleEn").trim();
        const titleAr = data.get("titleAr").trim();
        const uniqueSlug = await generateUniqueSlug(titleEn);

        // Get tags
        const tagsEn = data.get("tagsEn")?.split(",").map(tag => tag.trim()).filter(Boolean) || [];
        const tagsAr = data.get("tagsAr")?.split(",").map(tag => tag.trim()).filter(Boolean) || [];
        const tags = tagsEn.map((enTag, i) => ({
            en: enTag,
            ar: tagsAr[i] || enTag, // fallback 
        }));
        const allowedStatus = ["draft", "published"];
        const status = allowedStatus.includes(data.get("status"))
            ? data.get("status")
            : "draft";
        // Create blog data
        const blogData = {
            title: { en: titleEn, ar: titleAr },
            category: { en: data.get("categoryEn").trim(), ar: data.get("categoryAr").trim() },
            content: { en: data.get("contentEn").trim(), ar: data.get("contentAr").trim() },
            author: user.id, // user._id,
            authorName: { en: data.get("authorNameEn").trim(), ar: data.get("authorNameAr").trim() },
            // {en: user.nameEn, ar: user.nameAr}
            image: imageUrl || null,
            authorImage: authorImage,
            tags: tags,
            status: status,
            publishedAt: status === "published" ? new Date() : undefined,
            slug: uniqueSlug,
        };
        const blog = await Blog.create(blogData);
        // return response
        return NextResponse.json({
            success: true, message: "Blog created successfully",
            blog: {
                _id: blog._id,
                slug: blog.slug
            }
        });
    }

    catch (error) {
        return NextResponse.json({ success: false, message: error.message || "Failed to create blog" }, { status: 500 });
    }
}

