import { NextResponse } from "next/server";
import User from "@/lib/models/UserModel";
import connectDB from "@/lib/config/mongodb";

export async function POST(request) {
    try {
        await connectDB();
        const { email, password } = await request.json();

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        return NextResponse.json({
            success: true,
            token
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message
            },
            {
                status: 500
            }
        );
    }
}

// User Login
// ↓
// Email + Password
// ↓
// Server checks DB
// ↓
// jwt.sign(...)
// ↓
// Token generated
// ↓
// Token returned
// ↓
// Frontend stores token
// ↓
// Frontend sends token
// ↓
// verifyToken()
// ↓
// decoded.id
// ↓
// User.findById()
// ↓
// Check Role
// ↓
// Execute Action