import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export const Cart = () => {
  return (
    <Link href={"/cart"} className="group relative">
      <ShoppingCart className="w-5 h-5 hover:text-darkColor hoverEffect" />
    </Link>
  );
};
