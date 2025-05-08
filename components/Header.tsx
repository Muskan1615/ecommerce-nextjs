import React from "react";
import { HeaderMenu } from "./HeaderMenu";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { SideMenu } from "./SideMenu";

const Header = async () => {
  const user = await currentUser();
  console.log("user", user);
  return (
    <header className="sticky top-0 w-full border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <div className="flex items-center gap-x-2">
          <SideMenu />
          <Link href="/" className="text-xl font-bold tracking-wide">
            CIIAPTER2™
          </Link>
        </div>
        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && (
              <SignInButton>
                <CircleUserRound className="w-5 h-5 cursor-pointer" />
              </SignInButton>
            )}
          </ClerkLoaded>
          <SearchBar />
          <Cart />
        </div>
      </div>
      <HeaderMenu />
    </header>
  );
};

export default Header;
