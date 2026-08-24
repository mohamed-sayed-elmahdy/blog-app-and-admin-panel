import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SALT_ROUNDS = 12;

export async function hashPassword(password) {
  return await bcrypt.hash(password, SALT_ROUNDS);
}


export async function comparePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}


export function generateToken(payload) {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
}

export function verifyToken(token) {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  return jwt.verify(token, process.env.JWT_SECRET);
}