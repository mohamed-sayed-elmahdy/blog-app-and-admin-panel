"use client";
import BackgroundEffects from "@/components/shared/BackgroundEffects";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen relative bg-black ">
      <BackgroundEffects className={"bg-black"} showLightRays={false} showCornerGradients={false} />
      <main className="relative z-10">{children}</main>
    </div>
  );
}