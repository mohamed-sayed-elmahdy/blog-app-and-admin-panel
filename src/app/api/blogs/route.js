import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/mongodb';
import Blog from '@/lib/models/BlogModel';
import { uploadImageToCloudinary } from '@/utils/uploadImage';
import { generateUniqueSlug } from '@/utils/generateSlug';
// import { verifyToken } from "@/lib/auth/verifyToken";

export async function GET(request) {
    await connectDB();
    const blogs = await Blog.find();

    return NextResponse.json({ blogs: blogs, ok: true, message: "Blogs fetched successfully" });
}

export async function POST(request) {
    try {
        await connectDB();
        // verify user token(temporary object)
        const data = await request.formData();
        // const decoded = await verifyToken(req);
        const userJson = data.get("user") ? JSON.parse(data.get("user")) : null;
        // const user = await User.findById(decoded.id);
        const user = userJson || { id: "", username: "", role: "", profileImage: "" };
        // check if user is admin
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 403 });
        }
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

        const missingFields = requiredFields.filter(field => !data.get(field));
        if (missingFields.length > 0) {
            return NextResponse.json({ error: `Missing required fields: ${missingFields.join(", ")}` }, { status: 400 });
        }

        // Get blog image
        const blogImage = data.get("blogImage");
        let imageUrl = blogImage ? await uploadImageToCloudinary(blogImage, "blogs") : null;

        const authorImage =
            user.profileImage ||
            "https://res.cloudinary.com/diw11kbbx/image/upload/v1760466884/myImg_cdouwg.png";

        // Generate unique slug
        const uniqueSlug = await generateUniqueSlug(data.get("titleEn"));

        // Get tags
        const tagsEn = data.get("tagsEn")?.split(",").map(tag => tag.trim()) || [];
        const tagsAr = data.get("tagsAr")?.split(",").map(tag => tag.trim()) || [];
        const tags = tagsEn.map((enTag, i) => ({
            en: enTag,
            ar: tagsAr[i] || enTag, // fallback 
        }));

        // Create blog data
        const blogData = {
            title: { en: data.get("titleEn").trim(), ar: data.get("titleAr").trim() },
            category: { en: data.get("categoryEn").trim(), ar: data.get("categoryAr").trim() },
            content: { en: data.get("contentEn").trim(), ar: data.get("contentAr").trim() },
            author: user.id,
            authorName: { en: data.get("authorNameEn").trim(), ar: data.get("authorNameAr").trim() },
            image: imageUrl || null,
            authorImage: authorImage,
            tags: tags,
            status: data.get("status") || "draft",
            publishedAt: data.get("status") === "published" ? new Date() : undefined,
            slug: uniqueSlug,
        };
        const blog = await Blog.create(blogData);
        // return response
        return NextResponse.json({ blog, success: true, message: "Blog created successfully" });
    }

    catch (error) {
        return NextResponse.json({ success: false, message: error.message || "Failed to create blog" }, { status: 500 });
    }
}

        // const path = `public/${Date.now()}-${blogImage.name}`;
        // const arrayBuffer = await file.arrayBuffer();
        // const buffer = Buffer.from(arrayBuffer);
        // const imageBuffer = Buffer.from(imageByteData);
        // const title = data.get("title");
        // const content = data.get("content");
        // const status = data.get("status") || "draft"; 
        // const publishedAt = status === "published" ? new Date() : undefined;

