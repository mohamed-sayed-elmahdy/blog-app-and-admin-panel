// import mongoose from "mongoose";

// 1) نقرأ الـ URI من البيئة
// const MONGODB_URI = process.env.MONGODB_URI;
// if (!MONGODB_URI) throw new Error("Please define MONGODB_URI in .env.local");

// 2) نسترجع كاش سابق أو ننشئ واحد جديد
// let cached = global.mongoose;
// if (!cached) cached = global.mongoose = { conn: null, promise: null };

// export default async function connectDB() {
  // 3) لو فيه اتصال جاهز، استخدمه
  // if (cached.conn) return cached.conn;

  // 4) لو مفيش عملية اتصال جارية، ابدأ واحدة وشارك الـ promise
  // if (!cached.promise) {
    // cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false })
      // .then((m) => m);
  // }

  // 5) استنى نفس الـ promise وحط النتيجة في conn لإعادة الاستخدام
  // cached.conn = await cached.promise;
  // return cached.conn;
// }



// const connectDB = async () => {
//   await mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   console.log("Connected to MongoDB Atlas ✅✅");
// };

// export {  connectDB };                              

1- console.log(isNaN(123));
2- console.log(isNaN(true));
3- console.log(isNaN(undefined));
4- console.log(isNaN(null)); 
5- console.log(isNaN(" "));
6- console.log(isNaN("123"));
7- console.log(isNaN("Hello"));
8- console.log(isNaN([]));
9- console.log(isNaN([123]));
10- console.log(isNaN([1,2]));
11- console.log(isNaN({}));
12- console.log(NaN == NaN);
13- console.log(NaN === NaN);




