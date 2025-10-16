
 


<!-- تمام جدًا يا محمد 👌
الطريقة اللي بتتكلم عنها اسمها:

🔒 JWT Authentication Middleware
أو بتتفهم كـ Token-Based Authentication using JWT. -->
<!-- 
📘 الفكرة العامة:

الـ frontend (المستخدم) بيسجّل دخول → السيرفر يبعتله JWT token.

بعد كده، في أي طلب (زي POST أو PUT أو DELETE)،
الـ frontend بيبعت الـ token في الهيدر بالشكل ده:

Authorization: Bearer <your_token_here>


الـ backend فيه middleware (زي authMiddleware.js)
وظيفته:

يقرأ التوكن من الهيدر.

يتحقق منه (verify) باستخدام secret key.

يستخرج منه بيانات المستخدم (زي الـ id).

يحطها في req.user علشان أي route بعد كده يقدر يستخدمها.

🧩 مثال بسيط:
🧱 middleware/auth.js
import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Access denied, no token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // هنا ممكن يكون فيها userId أو email
    next(); // كمل التنفيذ
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
}

🧠 استخدامه في Route
import { verifyToken } from "@/middleware/auth";

app.post("/api/blogs", verifyToken, async (req, res) => {
  const userId = req.user.id; // جاي من التوكن
  // كمل بإنشاء البوست...
});

✅ مميزات الطريقة دي:

أكثر أمانًا لأنك مش بتبعت userId في body (التوكن مش سهل يتلاعب بيه).

قابلة لإعادة الاستخدام في أي route (مجرد تضيف middleware).

بتشتغل stateless — السيرفر مش بيخزن session لكل مستخدم. -->

-----------------------------------------------------------------------------------------------

<!-- في Next.js فيه ٣ مستويات ممكن نحط عندها الـ middleware:

📁 middleware.js (في الجذر)
→ بيتنفّذ على كل الريكوستات، زي حماية صفحات أو APIs عامة.

داخل الـ API route handler
→ نحط التحقق داخل نفس ملف POST أو GET function.

في ملف util أو helper
→ دالة عامة (زي verifyToken(request)) نستخدمها في أي Route نحتاجه. -->



--------------------------------------------------------------------------------------------
<!-- 🧩 خطوات إنشاء صفحة لعرض كل التاجز أو الكاتيجوريز

إنشاء Route جديد في الـ backend (API) خاص بالتاجز أو الكاتيجوريز

الاتصال بقاعدة البيانات MongoDB داخل الـ route

استخدام Aggregation Pipeline لاستخراج القيم الفريدة (unique)

تطبيق $unwind على المصفوفات (زي tags)

استخدام $group مع $addToSet لمنع التكرار

تحديد الحقول المطلوبة فقط باستخدام $project

إرجاع النتيجة في JSON Response

في الـ frontend: استدعاء الـ API باستخدام fetch أو axios

عرض القيم (tags أو categories) في صفحة مخصصة مثل /tags أو /categories

تحسين الأداء باستخدام الـ Indexes الموجودة مسبقًا -->