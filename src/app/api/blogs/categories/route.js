import { NextResponse } from "next/server";
import connectDB from "@/lib/config/mongodb";             
import Blog from "@/lib/models/BlogModel";       

export async function GET() {
  try {
    await connectDB();

    // Aggregate: group by category.en + category.ar ثم project النتيجة
    const categories = await Blog.aggregate([
      {
        $group: {
          _id: {
            en: "$category.en",
            ar: "$category.ar",
          },
        },
      },
      {
        $project: {
          _id: 0,
          en: "$_id.en",
          ar: "$_id.ar",
        },
      },
      {
        $sort: { en: 1 } 
      }
    ]);

    return NextResponse.json({ success: true, categories });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
