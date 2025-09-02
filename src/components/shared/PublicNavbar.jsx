"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import ButtonLink from "@/components/ui/ButtonLink";
import NavLinks from "@/components/shared/NavLinks";
import ThemeSwitch from "@/components/shared/ThemeSwitch";

function PublicNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="px-2 md:px-4 w-full fixed z-20 transform -translate-x-1/2 left-1/2  top-3 ">
      <nav
        className=" w-full min-h-12 max-w-[var(--max-width)]  mx-auto flex justify-between items-center  py-[0.4rem] px-6  
      bg-[var(--bg-blur)] backdrop-blur-[15px] border border-[var(--border-blur)] rounded-full overflow-hidden  
       "
        role="navigation"
      >
        <Link href="/" className="flex items-center" aria-label="Site Logo">
          <span className="text-[var(--text)] text-lg md:text-3xl font-extrabold">
            My Blog
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-4 md:gap-6 lg:gap-12 text-[var(--text)]">
          <NavLinks onClick={toggleMenu} />
        </div>

        <div className="flex items-center gap-4 sm:gap-4">
          {/* Sign Up Button */}
          <ButtonLink
            href="/signIp"
            className="hidden md:flex justify-center items-center 
           gap-2 bg-transparent border-[var(--border-blur)]
           hover:bg-[var(--btn-bg-hover)] hover:border-[var(--btn-border-hover)] 
           backdrop-blur-3xl rounded-3xl border 
           text-[var(--text)] font-semibold py-2 px-6 transition-all duration-300"
          >
            Sign In <CiLocationArrow1 className="text-xl" />
          </ButtonLink>
          {/* Menu Button */}
          <button
            type="button"
            className="flex md:hidden justify-center items-center rounded-md
            transition-all text-xl sm:text-2xl
            text-[var(--text)] border-none"
            aria-label="Menu Toggle"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
            ref={toggleButtonRef}
            aria-controls="mobile-menu"
            aria-haspopup="true"
          >
            <HiOutlineMenu className="text-xl" />
          </button>
          {/* Search Button */}
          <button
            type="button"
            className="flex justify-center items-center rounded-md 
           transition-colors text-xl sm:text-2xl 
           text-[var(--text)] border-none"
            aria-label="Search"
          >
            <IoSearch className="text-xl" />
          </button>
        <ThemeSwitch />
        </div>
      </nav>
      <div
        className={`relative flex flex-col gap-6 md:hidden bg-[var(--bg-blur)] backdrop-blur-[15px] text-[var(--text)] border border-[var(--border-blur)] rounded-2xl p-4 items-center justify-center overflow-hidden transition-all duration-500 ease-in-out  ${menuOpen
            ? "max-h-[500px] opacity-100 mt-4"
            : "max-h-0 p-0 opacity-0 border-0 mt-0"
          }`}
        ref={menuRef}
        role="menu"
        id="mobile-menu"
      >
        <button
          type="button"
          className="absolute top-3 right-3 text-[var(--text)] text-2xl"
          aria-label="Close Menu"
          onClick={toggleMenu}
        >
          <IoIosCloseCircle className="text-2xl" />
        </button>
        <NavLinks onClick={toggleMenu} />
        <ButtonLink
          href="/signup"
          className="flex md:hidden justify-center items-center 
           gap-2 bg-transparent border-[var(--btn-border)] 
           hover:bg-[var(--btn-bg-hover)] hover:border-[var(--btn-border-hover)] 
           backdrop-blur-3xl rounded-3xl border 
           text-[var(--text)] font-semibold   py-2 px-6 transition-all duration-300"
        >
          Sign Up <CiLocationArrow1 className="text-xl" />
        </ButtonLink>
      </div>
    </div>
  );
}

export default PublicNavbar;
