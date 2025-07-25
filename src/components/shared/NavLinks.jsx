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


  return links.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      className={`font-semibold transition-all duration-300 text-[var(--text)] ${
        pathname === link.href
          ? "text-[var(--text-active)] hover:text-[var(--text-active)]"
          : "hover:text-[var(--text-hover)]"
      }`}
      aria-current={pathname === link.href ? "page" : undefined}
      onClick={onClick}
    >
      {link.name}
    </Link>
  ));
}

export default NavLinks;