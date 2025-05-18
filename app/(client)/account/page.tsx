import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowUpRight, LogOut } from "lucide-react";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <section className="p-4 min-h-screen">
      <h6 className="text-center md:text-lg font-semibold mb-2 uppercase text-neutral-900">
        Account
      </h6>
      <div className="w-full mx-auto bg-neutral-800 h-[2px] max-w-[30px] my-2"></div>
      <div className="flex justify-center items-center flex-col gap-8">
        <h4 className="text-xl md:text-2xl uppercase font-semibold text-neutral-500">
          Welcome to your account.
        </h4>
        <div className="flex flex-col max-w-[600px] mx-auto w-full">
          <a
            href="/account/orders"
            className="flex items-center justify-between w-full h-9 px-4 text-sm font-medium capitalize text-neutral-900 border border-neutral-800 transition-colors hover:bg-[rgba(0,0,0,0.2)] hover:border-black cursor-pointer focus:outline-none focus:ring-1 focus:ring-neutral-950"
          >
            Orders
            <ArrowUpRight width={14} height={14} />
          </a>

          <SignOutButton>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full mt-8 h-8 px-3 text-xs font-medium uppercase text-white bg-black hover:bg-neutral-900 cursor-pointer transition-all disabled:opacity-50 disabled:pointer-events-none"
            >
              <LogOut width={14} height={14} />
              Sign out
            </button>
          </SignOutButton>
        </div>
      </div>
    </section>
  );
}
