import { accountLinks, featuredCollections, importantLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-12 pb-12 bg-neutral-100 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="text-sm font-bold uppercase mb-4">
              Chapter 2 Clothing
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              In the silence, your outfit roars. It tells your story, whispers
              your secrets, and shouts your dreams. <br />
              This is CHAPTER 2. This is your beginning. Every thread is a
              lesson learned, every seam a step taken. What you wear today isn’t
              just fabric—it’s your past victories, your present hustle, your
              future ambition.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase mb-4">Important Links</p>
            <ul className="space-y-2 text-sm text-neutral-700">
              {importantLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link href={href}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold uppercase mb-4">Account</p>
            <ul className="space-y-2 text-sm text-neutral-700">
              {accountLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link href={href}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold uppercase mb-4">
              Featured Collections
            </p>
            <ul className="space-y-2 text-sm text-neutral-700">
              {featuredCollections.map(({ title, href }) => (
                <li key={title}>
                  <Link href={href}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
