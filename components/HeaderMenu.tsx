"use client";

import Loading from "@/components/Loading";
import { featuredCollections } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export const HeaderMenu = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClick = (href: string) => {
    if (pathname === href) return;
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <>
      {isPending && <Loading />}
      <div className="max-w-7xl mx-auto px-4 py-1 flex justify-center gap-6 text-base font-semibold uppercase">
        {featuredCollections.map((item) => (
          <button
            key={item.title}
            onClick={() => handleClick(item.href)}
            className={`hover:text-darkColor hoverEffect relative group ${
              pathname === item.href && "text-darkColor"
            }`}
          >
            {item.title}
            <span
              className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:left-0 ${
                pathname === item.href && "w-1/2"
              }`}
            />
            <span
              className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:right-0 ${
                pathname === item.href && "w-1/2"
              }`}
            />
          </button>
        ))}
      </div>
    </>
  );
};
