import { NextResponse } from "next/server";
import connectDB from "@/lib/config/mongodb";
import User from "@/lib/models/UserModel";
import { hashPassword, generateToken } from "@/lib/auth/utils";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, password } = body;

    // 1) Validation أساسي
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "Name, email and password are required" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, message: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    // 2) هل الإيميل موجود قبل كده؟
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email already exists" },
        { status: 409 }
      );
    }

    // 3) Hash للباسورد
    const hashedPassword = await hashPassword(password);

    // 4) إنشاء اليوزر
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // 5) إنشاء JWT
    const token = generateToken({
      userId: user._id.toString(),
      role: user.role,
    });

    // 6) الرد + وضع التذكرة في HTTP-only Cookie
    const response = NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
        },
      },
      { status: 201 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 أيام
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Registration failed" },
      { status: 500 }
    );
  }
}