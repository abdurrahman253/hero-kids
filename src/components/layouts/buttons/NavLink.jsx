"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`font-medium transition-colors duration-200 ${
        isActive
          ? "text-primary"
          : "text-gray-600 hover:text-primary"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
