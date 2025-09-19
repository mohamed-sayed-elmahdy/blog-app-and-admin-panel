
import connectDB from "@/lib/config/mongodb";
export const runtime = "nodejs";

export async function GET(req) {
  try {
    await connectDB();
    return Response.json({ ok: true,
       message: "Connected to MongoDB Atlas successfully!" }, 
       { status: 200 }, 
       { headers: { "Content-Type": "application/json" } });
  } catch (error) {
    return Response.json({ ok: false, 
      error: error.message || "Database connection failed0000" },
      { status: 500 });
  }
}

