"use client";

import React, { FC, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import InstagramIcon from "../public/instagram.svg";
import WhatsAppIcon from "../public/whatsapp.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { sidebarLinks } from "@/constants";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

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
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="fixed top-0 left-0 z-50 h-screen w-[300px] bg-white shadow-md flex flex-col justify-between"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="p-4 border-b border-neutral-600 flex justify-between items-center">
              <h2 className="uppercase font-semibold text-sm cursor-pointer ">
                Menu
              </h2>
              <X className="cursor-pointer w-5 h-5" onClick={onClose} />
            </div>

            <div className="flex-1 overflow-y-auto">
              {sidebarLinks.map((item) => (
                <Link
                  onClick={onClose}
                  key={item.title}
                  href={item.href}
                  className={`block p-4 text-xs border-b border-neutral-600 hover:underline font-medium cursor-pointer ${
                    pathname === item.href && "text-black"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="p-4 border-t border-neutral-600 flex items-center gap-4 justify-center cursor-pointer">
              <InstagramIcon />
              <WhatsAppIcon />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
