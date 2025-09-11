import { Outfit } from "next/font/google";
import "./globals.css";
import AppProviders  from "@/providers/app-providers";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from "next-intl/server";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export async function generateMetadata() {
  const locale = await getLocale();
  const messages = await getMessages(locale);

  return {
    title: messages['metadata'].title,
    description: messages['metadata'].description,
    keywords: ['blog', 'admin panel', 'next.js', 'react', 'tailwindcss', 'dashboard', 'content management', 'seo', 'responsive design'],
    authors: [{ name: 'Mohamed Sayed ELmahdy', url: 'https://.com' }],
    openGraph: {

    },
    twitter: {
 
    },
    icons: {

    },
  };
}

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${outfit.className} antialiased suppressHydrationWarning`}>
        <NextIntlClientProvider messages={messages}>
          <AppProviders>{children}</AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
