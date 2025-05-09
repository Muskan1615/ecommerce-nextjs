import React from "react";
import InstagramIcon from "../public/instagram.svg";
import WhatsAppIcon from "../public/whatsapp.svg";
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 pt-4 space-y-4">
      <div className="flex justify-center items-center flex-row">
        <button className="group inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-offset-1 focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 h-8 px-3 text-xs text-neutral-900 uppercase mx-auto cursor-pointer">
          <span className="group-hover:underline underline-offset-4">
            <span> Scroll To Top </span>
            <span className="relative -top-0.5">↑</span>
          </span>
        </button>
      </div>
      <div className="py-4">
        <ul className="flex flex-col sm:flex-row gap-4 items-center justify-center text-xs text-neutral-900">
          {footerLinks.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                target={link.target ?? "_self"}
                rel={link.target ? "noopener noreferrer" : ""}
                className="hover:underline underline-offset-4 decoration-2 decoration-black transition-all"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center p-8">
        <Link href="/" className="text-xl font-bold tracking-wide">
          CIIAPTER2™
        </Link>
      </div>
      {/* <div className="flex justify-center py-4">
        <InstagramIcon />
        <WhatsAppIcon />
      </div> */}
    </footer>
  );
};

export default Footer;
