import React from "react";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import { CiLocationArrow1 } from "react-icons/ci";
import Link from "next/link";

function Navbar() {
  return (
    <div className="py-3 px-5 md:px-12 lg:px-20 flex justify-between items-center border-b border-b-[var(--text)]">
      <Link href="/">
        <Image
          src="/logo.png"
          alt=""
          width={110}
          height={110}
          className="w-[110px] sm:w-auto"
          priority
        />
      </Link>
      <div className="flex justify-center items-center gap-2 sm:gap-4">
        <button className="bg-[var(--secondary)] hover:bg-[var(--accent)] flex justify-center items-center  gap-1 sm:gap-2 py-1 px-3 sm:py-2 sm:px-6 rounded-md">
          Get Start
          <CiLocationArrow1 className="font-extrabold sm:text-2xl text-xl" />
        </button>
        <ThemeSwitch />
      </div>
    </div>
  );
}

export default Navbar;
