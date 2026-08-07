import Blog from "@/lib/models/BlogModel";
import connectDB from "@/lib/config/mongodb";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
// import { verifyToken } from "@/lib/auth/verifyToken";
// import User from "@/lib/models/UserModel";

export async function GET(request, { params }) {
    try {
        await connectDB();
        const { id } =  params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json(
                { success: false, message: "Invalid blog ID" },
                { status: 400 }
            );
        }
        const blog = await Blog.findById(id);
        if (!blog) {
            return NextResponse.json(
                { success: false, message: "Blog not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, blog });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

export async function PUT(request, { params }) {
    try {
        await connectDB();
        const { id } =  params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json(
                { success: false, message: "Invalid blog ID" },
                { status: 400 }
            );
        }
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

        const blog = await Blog.findById(id);
        if (!blog) {
            return NextResponse.json(
                { success: false, message: "Blog not found" },
                { status: 404 }
            );
        }
        // Validate New Data
       
        // Update blog logic here
        return NextResponse.json({
            success: true, message: "Blog updated successfully", blog: {
                _id: blog._id,
                slug: blog.slug
            }
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params }) {
        try {
        await connectDB();
        const { id } = params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json(
                { success: false, message: "Invalid blog ID" },
                { status: 400 }
            );
        }
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

        const blog = await Blog.findById(id);
        if (!blog) {
            return NextResponse.json(
                { success: false, message: "Blog not found" },
                { status: 404 }
            );
        }
        // Delete blog logic here
        await Blog.deleteOne({ _id: id });
        // keep Delete Image From Cloudinary will be deleted manually, beacuse maybe the image is used in other blog, so we will keep it in cloudinary and just delete the blog from database, and if we want to delete the image from cloudinary we can do it manually from cloudinary dashboard
        return NextResponse.json({
            success: true, message: "Blog deleted successfully", blog: {
                _id: blog._id,
                slug: blog.slug
            }
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

// Collection Endpoint
// Single Item Endpoint
/*
Steps
1.Validate ID
2.Check existence (Find blog by ID)
3. Authorization (Admin only) before updating or deleting
4. GET doesn't require authorization and doesn't upate or delete
5.
/*


/*
chatGPT steps
1. Connect DB

2. Get Params

3. Validate Params

4. Authenticate User

5. Authorize User

6. Check Resource Exists

7. Validate Input Data

8. Execute Action

9. Return Response
*/


// GET single blog
// UPDATE blog
// DELETE blog
// Change image
// Keep old image
// Regenerate slug
// Authorization
// GET by id
// PUT update
// DELETE
// image replacement
// slug update
// authorization