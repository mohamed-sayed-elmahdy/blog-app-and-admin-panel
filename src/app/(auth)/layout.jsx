"use client";
import BackgroundEffects from "@/components/shared/BackgroundEffects";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen relative">
      <BackgroundEffects className={"bg-black"} ShowLightRays={false} showCornerGradients={false} />
      <main className="relative z-10">{children}</main>
    </div>
  );
}