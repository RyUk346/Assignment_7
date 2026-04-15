"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={` ${pathname === href ? "bg-[#244D3F] rounded-sm text-white" : "font-medium text-[#64748B]"}`}
    >
      {children}
    </Link>
  );
};

export default MyLink;
