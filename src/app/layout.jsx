import { Outfit } from "next/font/google";
import "./globals.css";
import AppProviders  from "@/providers/AppProviders";
import { NextIntlClientProvider } from 'next-intl';
import getMessagesOnce from "@/i18n/i18n-helper";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export async function generateMetadata() {
  const { locale, messages } = await getMessagesOnce();

  return {
    title: messages['metadata'].title,
    description: messages['metadata'].description,
    keywords: ['blog', 'admin panel', 'next.js', 'react', 'tailwindcss', 'dashboard', 'content management', 'seo', 'responsive design'],
    authors: [{ name: 'Mohamed Sayed ELmahdy', url: 'https://blog-app-and-admin-panel-ie8pxky94.vercel.app' }],
    openGraph: {

    },
    twitter: {
 
    },
    icons: {

    },
  };
}

export default async function RootLayout({ children }) {
  const { locale, messages } = await getMessagesOnce();

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
