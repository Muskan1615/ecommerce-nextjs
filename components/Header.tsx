import React from "react";
import { CircleUserRound } from "lucide-react";
import { ClerkLoaded, SignedIn, SignInButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import { HeaderMenu } from "./HeaderMenu";
import { SideMenu } from "./SideMenu";

const Header = async () => {
  const user = await currentUser();

  return (
    <header className="sticky top-0 z-20 w-full h-[75px] bg-neutral-100 bg-opacity-90 backdrop-blur-lg border-b border-neutral-200 flex items-center">
      <section className="flex-1 w-full px-4 sm:px-8 gap-1 flex flex-col items-center justify-center">
        <div className="max-w-7xl w-full flex items-center justify-between h-1/2">
          <div className="flex items-center gap-x-2">
            <SideMenu />
            <Link href="/" className="text-xl font-bold tracking-wide">
              CIIAPTER2™
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <ClerkLoaded>
              <SignedIn>
                <Link href="/account">
                  <CircleUserRound className="w-5 h-5 cursor-pointer" />
                </Link>
              </SignedIn>
              {!user && (
                <SignInButton forceRedirectUrl="/account">
                  <CircleUserRound className="w-5 h-5 cursor-pointer" />
                </SignInButton>
              )}
            </ClerkLoaded>
            <SearchBar />
            <Cart />
          </div>
        </div>
        <nav className="w-full h-1/2 flex items-center justify-center">
          <HeaderMenu />
        </nav>
      </section>
    </header>
  );
};

export default Header;
