import mongoose from "mongoose";

// 1) نقرأ الـ URI من البيئة  
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error("Please define MONGODB_URI in .env.local");

// 2) نسترجع كاش سابق أو ننشئ واحد جديد
const cached = { conn: null, promise: null };

export default async function connectDB() {
  // 3) لو فيه اتصال جاهز، استخدمه
  if (cached.conn) return cached.conn;

  // 4) لو مفيش عملية اتصال جارية، ابدأ واحدة
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI) // نبدأ محاولة الاتصال
      .then((conn) => {
        cached.conn = conn; // ✅ نخزن الاتصال الناجح
        return conn;
      })
      .catch((err) => {
        cached.promise = null; // ✅ لو فشل نصفر البromise علشان نجرب تاني
        throw err; // ✅ نرمي الغلط للـ caller
      });
  }

  // 5) استنى الـ promise وارجع الاتصال
  return cached.promise;
}

