"use client";

import { headerData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const HeaderMenu = () => {
  const pathname = usePathname();
  return (
    <div className="max-w-7xl mx-auto px-4 py-1 flex justify-center gap-6 text-sm font-medium uppercase">
      {headerData.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={`hover:text-darkColor hoverEffect relative group ${
            pathname === "/" && "text-darkColor"
          }`}
        >
          {item.title}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:left-0 ${
              pathname === "/" && "w-1/2"
            }`}
          />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:right-0 ${
              pathname === "/" && "w-1/2"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};
