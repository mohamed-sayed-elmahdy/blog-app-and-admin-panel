"use client";
import React from "react";
import PublicNavbar from "@/components/shared/PublicNavbar";
import PublicFooter from "@/components/shared/PublicFooter";
import LightRays from "@/components/ui/LightRays";
import { useTheme } from 'next-themes';
export default function PublicLayout({ children }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="min-h-screen relative ">
      {/* 🌌 Background Grids */}
      <div className="hidden dark:block bg-gradient-top-left fixed top-0 left-0 w-[51.5%] h-[51vh] z-[-1] outline-0 border-none " />
      <div className="hidden dark:block bg-gradient-bottom-left fixed top-1/2 left-0 w-[51.5%] h-[50vh] z-[-1] outline-0 border-none" />
      <div className="hidden dark:block bg-gradient-top-right fixed top-0 left-1/2 w-[51.5%] h-[51vh] z-[-1] outline-0 border-none" />
      <div className="hidden dark:block bg-gradient-bottom-right fixed top-1/2 left-1/2 w-[51.5%] h-[50vh] z-[-1] outline-0 border-none" />

      {/* ✨ Decorative Stars */}
      <div className="fixed inset-8">
        <div className="star top-[10%] left-[15%]" />
        <div className="star top-[25%] left-[75%]" />
        <div className="star top-[40%] left-[35%]" />
        <div className="star top-[15%] left-[85%]" />
        <div className="star top-[30%] left-[45%]" />
        <div className="star top-[45%] left-[90%]" />
        <div className="star top-[20%] left-[60%]" />

        <div className="star top-[55%] left-[20%]" />
        <div className="star top-[70%] left-[80%]" />
        <div className="star top-[65%] left-[40%]" />
        <div className="star top-[60%] left-[95%]" />
        <div className="star top-[75%] left-[50%]" />

        <div className="star bottom-[25%] left-[25%]" />
        <div className="star bottom-[40%] left-[85%]" />
        <div className="star bottom-[15%] left-[65%]" />
        <div className="star bottom-[30%] left-[10%]" />
        <div className="star bottom-[45%] left-[70%]" />
        <div className="star bottom-[20%] left-[35%]" />

        <div className="star top-[5%] left-[30%]" />
        <div className="star top-[85%] left-[5%]" />
        <div className="star top-[95%] left-[55%]" />
        <div className="star bottom-[5%] left-[90%]" />
        <div className="star bottom-[85%] left-[30%]" />
        <div className="star bottom-[95%] left-[75%]" />
      </div>
      <div className="w-full h-[100vh] fixed" >
        <LightRays
          raysOrigin="top-center"
          raysColor={resolvedTheme === 'dark' ? '#fff' : '#00ffff'}
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className=" hidden dark:block  "
        />
      </div>

      <PublicNavbar />
      <main className="pt-12 relative z-10">{children}</main>
      <PublicFooter />
    </div>
  );
}
