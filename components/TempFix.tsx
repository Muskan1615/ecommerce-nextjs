"use client";

import { featuredCollections, sidebarLinks } from "@/constants";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideBar: FC<SideBarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [categoryOpen, setCategoryOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-lg pointer-events-auto"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ cursor: "none" }}
          />
          <motion.div
            className="fixed top-0 left-0 z-50 h-screen w-[360px] bg-white shadow-xl flex flex-col pointer-events-auto"
            style={{ cursor: "default" }}
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="px-6 py-4 border-b border-neutral-200 flex justify-between items-center">
              <SignedIn>
                <Link href="/account" onClick={onClose}>
                  <User className="w-5 h-5 text-neutral-700 cursor-pointer" />
                </Link>
              </SignedIn>
              <SignedOut>
                <SignInButton forceRedirectUrl="/account">
                  <User className="w-5 h-5 text-neutral-700 cursor-pointer" />
                </SignInButton>
              </SignedOut>
              <X
                className="cursor-pointer w-5 h-5 text-neutral-700"
                onClick={onClose}
              />
            </div>
            <div className="flex-1 overflow-y-auto">
              {sidebarLinks.map((item) => {
                if (item.title === "Shop by category") {
                  return (
                    <div key={item.title}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between px-6 py-3 text-sm border-b border-neutral-200 uppercase font-medium hover:underline text-left cursor-pointer"
                        onClick={() => setCategoryOpen((prev) => !prev)}
                      >
                        {item.title}
                        {categoryOpen ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                      <AnimatePresence>
                        {categoryOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-neutral-50"
                          >
                            {featuredCollections.map((collection) => (
                              <Link
                                key={collection.title}
                                href={collection.href}
                                onClick={onClose}
                                className={`block px-6 py-3 text-sm border-b border-neutral-200 hover:underline cursor-pointer transition duration-150 ease-in-out uppercase font-medium ${
                                  pathname === collection.href
                                    ? "text-black font-semibold"
                                    : "text-neutral-600"
                                }`}
                              >
                                {collection.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    onClick={onClose}
                    key={item.title}
                    href={item.href}
                    className={`block px-6 py-3 text-sm border-b border-neutral-200 hover:underline cursor-pointer transition duration-150 ease-in-out uppercase font-medium ${
                      pathname === item.href
                        ? "text-black font-semibold"
                        : "text-neutral-600"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
