import { NextResponse } from 'next/server';
import connectDB from '@/lib/config/mongodb';

export async function GET(request) {
  await connectDB();
  return NextResponse.json({ ok: true });
}

export async function POST(request) {
  await connectDB(); 
  return NextResponse.json({ ok: "post method" });
}
