"use client";

import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ImageSlider } from "./ImageSlider";
import Loading from "./Loading";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const hasMultipleImages = (product.images?.length ?? 0) > 1;
  const imageUrl = product.images?.[0] ? urlFor(product.images[0]).url() : "";
  const productSlug = product.slug?.current ?? "#";
  const productName = product.name ?? "Unnamed Product";
  const productPrice =
    typeof product.price === "number" ? product.price.toFixed(2) : "N/A";

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    router.push(`/product/${productSlug}`);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Link
      href={`/product/${productSlug}`}
      onClick={handleClick}
      className="block group"
    >
      <div className="relative w-full bg-gray-200 overflow-hidden aspect-[0.7] min-h-[300px] group/image-slider">
        {hasMultipleImages ? (
          <ImageSlider images={product.images!} productName={productName} />
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={imageUrl}
              alt={productName}
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        )}
      </div>
      <div className="text-center mt-3 px-2 pb-4">
        <h3 className="text-base font-medium truncate">{product.name}</h3>
        <p className="font-semibold text-lg">Rs. {productPrice}</p>
      </div>
    </Link>
  );
};
