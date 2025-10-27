import Blog from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    const blog = await Blog.findById(id);
    return NextResponse.json(blog);
}
