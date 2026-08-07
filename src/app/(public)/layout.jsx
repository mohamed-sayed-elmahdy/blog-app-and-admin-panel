"use client";
import React from "react";
import PublicNavbar from "@/components/shared/PublicNavbar";
import PublicFooter from "@/components/shared/PublicFooter";
import BackgroundEffects from "@/components/shared/BackgroundEffects";
import { useTheme } from 'next-themes';
import { Analytics } from "@vercel/analytics/next"
export default function PublicLayout({ children }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="min-h-screen relative ">
      <BackgroundEffects />
      <PublicNavbar />
      <main className="pt-12 relative z-10">{children}</main>
      <PublicFooter />
      <Analytics />
    </div>
  );
}
