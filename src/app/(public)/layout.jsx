import React from "react";
import PublicNavbar from "@/components/shared/PublicNavbar";
import PublicFooter from "@/components/shared/PublicFooter";

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen ">
      <div
        className="border-none overflow-hidden fixed top-0 left-0"
        style={{
          width: "51%",
          height: "51vh",
          backgroundImage:
            "linear-gradient(to top left, #000000, #000000, #000000,  #000000,  #000000,  #000000,  #000000, #000000, #000000, #000000, #000000, #060606, #0c0b0b, #111010, #191818, #211f1f, #2a2626, #322e2e)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>
      <div
        className="border-none overflow-hidden fixed top-1/2 left-0"
        style={{
          width: "51%",
          height: "50vh",
          backgroundImage:
            "linear-gradient(to left bottom, #000000, #000000, #000000,  #000000,  #000000,  #000000,  #000000, #000000, #000000, #000000, #000000, #060606, #0c0b0b, #111010, #191818, #211f1f, #2a2626, #322e2e)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>
      <div
        className="border-none overflow-hidden fixed top-0 left-1/2"
        style={{
          width: "51%",
          height: "51vh",
          backgroundImage:
            "linear-gradient(to right top, #000000, #000000, #000000,  #000000,  #000000,  #000000,  #000000, #000000, #000000, #000000, #000000, #060606, #0c0b0b, #111010, #191818, #211f1f, #2a2626, #322e2e)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>
      <div
        className="border-none overflow-hidden fixed top-1/2 left-1/2"
        style={{
          width: "50%",
          height: "50vh",
          backgroundImage:
            "linear-gradient(to right bottom, #000000, #000000, #000000,  #000000,  #000000,  #000000,  #000000, #000000, #000000, #000000, #000000, #060606, #0c0b0b, #111010, #191818, #211f1f, #2a2626, #322e2e)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>
      {/* Decorative dots */}
      <div className="fixed inset-8 ">
        {/* Top section stars */}
        <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-white/60 rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
        <div className="absolute top-[25%] left-[75%] w-1 h-1 bg-white/50 rounded-full animate-[pulse_3s_ease-in-out_infinite]" />
        <div className="absolute top-[40%] left-[35%] w-1 h-1 bg-white/70 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]" />
        <div className="absolute top-[15%] left-[85%] w-1 h-1 bg-white/50 rounded-full animate-[pulse_2.5s_ease-in-out_infinite]" />
        <div className="absolute top-[30%] left-[45%] w-1 h-1 bg-white/40 rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute top-[45%] left-[90%] w-1 h-1 bg-white/40 rounded-full animate-[pulse_1.8s_ease-in-out_infinite]" />
        <div className="absolute top-[20%] left-[60%] w-1 h-1 bg-white/60 rounded-full animate-[pulse_3.2s_ease-in-out_infinite]" />

        {/* Middle section stars */}
        <div className="absolute top-[55%] left-[20%] w-1 h-1 bg-white/50 rounded-full animate-[pulse_2.2s_ease-in-out_infinite]" />
        <div className="absolute top-[70%] left-[80%] w-1 h-1 bg-white/40 rounded-full animate-[pulse_3.5s_ease-in-out_infinite]" />
        <div className="absolute top-[65%] left-[40%] w-1 h-1 bg-white/70 rounded-full animate-[pulse_1.7s_ease-in-out_infinite]" />
        <div className="absolute top-[60%] left-[95%] w-1 h-1 bg-white/50 rounded-full animate-[pulse_2.8s_ease-in-out_infinite]" />
        <div className="absolute top-[75%] left-[50%] w-1 h-1 bg-white/60 rounded-full animate-[pulse_3.8s_ease-in-out_infinite]" />

        {/* Bottom section stars */}
        <div className="absolute bottom-[25%] left-[25%] w-1 h-1 bg-white/50 rounded-full animate-[pulse_2.5s_ease-in-out_infinite]" />
        <div className="absolute bottom-[40%] left-[85%] w-1 h-1 bg-white/60 rounded-full animate-[pulse_1.9s_ease-in-out_infinite]" />
        <div className="absolute bottom-[15%] left-[65%] w-1 h-1 bg-white/40 rounded-full animate-[pulse_3.3s_ease-in-out_infinite]" />
        <div className="absolute bottom-[30%] left-[10%] w-1 h-1 bg-white/50 rounded-full animate-[pulse_2.1s_ease-in-out_infinite]" />
        <div className="absolute bottom-[45%] left-[70%] w-1 h-1 bg-white/60 rounded-full animate-[pulse_3.6s_ease-in-out_infinite]" />
        <div className="absolute bottom-[20%] left-[35%] w-1 h-1 bg-white/70 rounded-full animate-[pulse_2.3s_ease-in-out_infinite]" />

        {/* Additional scattered stars */}
        <div className="absolute top-[5%] left-[30%] w-1 h-1 bg-white/45 rounded-full animate-[pulse_2.7s_ease-in-out_infinite]" />
        <div className="absolute top-[85%] left-[5%] w-1 h-1 bg-white/55 rounded-full animate-[pulse_3.1s_ease-in-out_infinite]" />
        <div className="absolute top-[95%] left-[55%] w-1 h-1 bg-white/65 rounded-full animate-[pulse_2.4s_ease-in-out_infinite]" />
        <div className="absolute bottom-[5%] left-[90%] w-1 h-1 bg-white/50 rounded-full animate-[pulse_3.4s_ease-in-out_infinite]" />
        <div className="absolute bottom-[85%] left-[30%] w-1 h-1 bg-white/45 rounded-full animate-[pulse_2.6s_ease-in-out_infinite]" />
        <div className="absolute bottom-[95%] left-[75%] w-1 h-1 bg-white/55 rounded-full animate-[pulse_3.7s_ease-in-out_infinite]" />
      </div>
      <PublicNavbar />
      <main className="pt-12 relative z-10">{children}</main>
      <PublicFooter />
    </div>
  );
}
