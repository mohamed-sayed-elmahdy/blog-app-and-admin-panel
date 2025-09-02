import { Outfit } from "next/font/google";
import "./globals.css";
import AppProviders  from "@/providers/app-providers";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
export const metadata = {
  title: "StoryCraft",
  description:
    "Effortlessly create, customize, and manage your blogs with our advanced Blog App and Admin Panel. Designed for speed, flexibility, and user-friendly control to help you grow your online presence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body className={`${outfit.className} antialiased suppressHydrationWarning`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
