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


---------------------------------------------------
<!-- من أحلى المميزات اللي هتقابلها في المنصة هي فكرة الـ Gamification 🎮
من خلال نظام النقاط والعملات اللي بتكسبها بعد كل فيديو أو امتحان، بتقدر تتنافس مع زمايلك وتطلع على لوحة الأبطال (Leaderboard) 🔥

كل جولة مدتها أسبوعين، والفايز فيها بياخد عملات ذهبية أو فضية بتتحفظ في حسابه ويقدر بيها يشتري منتجات أو كورسات تانية ويكمل رحلته في التعلم ❤️ -->



------------------------------------------------------------------
<!-- 🥇 1. أفضل حل احترافي: استخدم TanStack React Query

(ده الحل اللي بيستخدم في كل المشاريع الكبيرة تقريبًا)

✅ المميزات

بيعمل caching تلقائي للبيانات.

بيمنع refetching الزائد.

بيديك state جاهزة: isLoading, isError, data, refetch.

بيسمحلك تتحكم في وقت إعادة الجلب (revalidate).

تقدر تستخدمه لأي data (blogs, users, dashboard stats...).

⚙️ الخطوات
1. ثبّت المكتبة:
npm install @tanstack/react-query

2. أضف الـ Provider في layout.js أو providers.jsx:

📄 app/providers.jsx

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Providers({ children }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}


📄 app/layout.jsx

import Providers from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

3. استبدل الـ useEffect بالـ React Query:

📄 components/blogs/CategoriesFilter.jsx

"use client";
import { useQuery } from "@tanstack/react-query";

export default function CategoriesFilter({ activeCategory, onSelect }) {
  const { data: categories = [], isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("/api/blogs/categories");
      if (!res.ok) throw new Error("Failed to fetch categories");
      return res.json();
    },
    staleTime: 1000 * 60 * 5, // 5 دقايق - الكاش يفضل صالح بدون refetch
    cacheTime: 1000 * 60 * 30, // 30 دقيقة في الميموري
  });

  if (isLoading) return <p>Loading categories...</p>;
  if (error) return <p className="text-red-500">Error loading categories</p>;

  return (
    <div className="flex gap-3 mb-6 flex-wrap">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(cat.en)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            activeCategory === cat.en
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {cat.ar}
        </button>
      ))}
    </div>
  );
}

✅ النتيجة:

أول مرة يفتح المستخدم الصفحة → يعمل fetch.

بعد كده (حتى لو عمل re-render أو راح لصفحة تانية ورجع) → يستخدم البيانات من الكاش.

بعد 5 دقايق (staleTime) يقدر يعمل refetch خفيف في الخلفية بدون لودينج جديد. -->


---------------------------------------------------------------------------

<!-- ممتاز يا محمد 🌙💡
اللي ظاهر في الصورة هو بالضبط **Theme switcher panel** زي اللي في ClickUp،
وفي مشروعك بـ **Next.js App Router** تقدر تعمل نفس الفيتشر (Light / Dark + ألوان رئيسية) باستخدام مكتبة **next-themes** مع **Tailwind CSS variables**.
خلينا أشرحلك خطوة بخطوة التركيبة دي 👇

---

### 🧩 الخطوة 1: إعداد `next-themes`

ثبّت المكتبة:

```bash
npm install next-themes
```

ثم في ملف `layout.tsx` (أو `providers.tsx` لو عندك ملف Providers):

```tsx
'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
```

وبعدين استدعي الـ `<Providers>` جوه `layout.tsx` الرئيسي:

```tsx
import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

---

### 🌗 الخطوة 2: إعداد الـ Light / Dark في Tailwind

في ملف `tailwind.config.ts`:

```ts
module.exports = {
  darkMode: 'class', // مهم
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
      },
    },
  },
};
```

---

### 🎨 الخطوة 3: إعداد الألوان المتغيرة (CSS variables)

في `globals.css`:

```css
:root {
  --color-primary: #06b6d4; /* Mint */
}

[data-theme='blue'] {
  --color-primary: #3b82f6;
}
[data-theme='purple'] {
  --color-primary: #8b5cf6;
}
[data-theme='orange'] {
  --color-primary: #f97316;
}
[data-theme='mint'] {
  --color-primary: #06b6d4;
}

.dark {
  background-color: #0f172a;
  color: #f1f5f9;
}
```

---

### ⚙️ الخطوة 4: إنشاء Component لتبديل الثيم والألوان

```tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const themes = ['light', 'dark'];
const colors = ['blue', 'purple', 'orange', 'mint'];

export default function ThemeCustomizer() {
  const { theme, setTheme } = useTheme();
  const [color, setColor] = useState('mint');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', color);
  }, [color]);

  return (
    <div className="p-4 bg-neutral-800 text-white rounded-2xl">
      <h3 className="mb-2 font-semibold">Appearance</h3>
      <div className="flex gap-3 mb-4">
        {themes.map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={`px-3 py-1 rounded-lg border ${
              theme === t ? 'border-primary text-primary' : 'border-gray-500'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <h3 className="mb-2 font-semibold">Theme color</h3>
      <div className="flex gap-3">
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            className={`w-8 h-8 rounded-full border-2 ${
              color === c ? 'border-primary' : 'border-transparent'
            }`}
            style={{ backgroundColor: `var(--color-${c}, ${c})` }}
          />
        ))}
      </div>
    </div>
  );
}
```

---

### ✅ النتيجة:

* عندك **Dark / Light switch** شغال بـ `next-themes`.
* وعندك **زرار لتغيير اللون الأساسي** (Mint, Blue, Orange... إلخ).
* اللون بيتغير في كل المشروع لأنك استخدمت `--color-primary`.
* تقدر تستخدمه في أي مكان في Tailwind كده:

```tsx
<button className="bg-primary text-white px-4 py-2 rounded-lg">
  Click me
</button>
```

---

تحب أعملك نسخة محسّنة من الـ UI (زي ClickUp بالظبط في التصميم والمودال بتاع الثيم)؟
لو قلت أيوه، أعملهولك بكود كامل بـ Tailwind + Framer Motion. -->
