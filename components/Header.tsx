import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Cart } from "./Cart";
import { HeaderMenu } from "./HeaderMenu";
import { SearchBar } from "./SearchBar";
import { SideMenu } from "./SideMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full h-[75px] bg-neutral-100/50 backdrop-blur-lg shadow-md flex items-center">
      <section className="w-full px-4 sm:px-6 md:px-8 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SideMenu />
          <Link href="/">
            <Image
              src="/ChapterLogo.jfif"
              alt="Chapter2 Logo"
              width={30}
              height={20}
              priority
            />
          </Link>
        </div>
        <div className="hidden md:flex flex-1 justify-center">
          <HeaderMenu />
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <SignedIn>
            <Link href="/account">
              <User className="w-5 h-5 cursor-pointer" />
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/account">
              <User className="w-5 h-5 cursor-pointer" />
            </SignInButton>
          </SignedOut>
          <SearchBar />
          <Cart />
        </div>
      </section>
    </header>
  );
};

export default Header;
