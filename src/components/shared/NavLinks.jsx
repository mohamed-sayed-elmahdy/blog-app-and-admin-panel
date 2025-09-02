"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blogs" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function NavLinks({ onClick }) {
  const pathname = usePathname();

  return links.map((link) => {
    const isActive =
      pathname === link.href || pathname.startsWith(`${link.href}/`);

    return (
      <Link
        key={link.name}
        href={link.href}
        className={`font-semibold transition-all duration-300 text-[var(--text)] 
          ${isActive ? "text-[var(--text-active)] hover:text-[var(--text-active)]"
            : "hover:text-[var(--text-hover)]"
          }`}
        aria-current={isActive ? "page" : undefined}
        onClick={onClick}
      >
        {link.name}
      </Link>
    );
  });
}

export default NavLinks;
