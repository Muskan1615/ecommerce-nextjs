"use client";

import { Title } from "@/components/Title";
import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useState } from "react";

interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Readonly<Props>) {
  const [selectedSize, setSelectedSize] = useState("XS");

  return (
    <div className="md:flex md:gap-10">
      <div
        className="md:w-3/5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
        style={{ maxHeight: "calc(100vh - 80px)" }}
      >
        <div className="grid grid-cols-2 gap-2 w-full">
          {product.images?.map((image) => (
            <div
              key={image._key}
              className="relative w-full h-[500px] shadow-md overflow-hidden"
            >
              <Image
                src={urlFor(image).url()}
                alt={`${product.name ?? "Product"} image`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 33vw"
                priority
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-2/5 mt-10 md:mt-0 px-4 flex flex-col">
        <Title className="text-4xl sm:text-5xl uppercase">{product.name}</Title>
        <div className="mt-3 flex items-center gap-3">
          {typeof product.price === "number" && (
            <p className="text-2xl font-semibold">
              Rs. {product.price.toFixed(2)}
            </p>
          )}
          {typeof product.discount === "number" &&
            product.discount > 0 &&
            product.price && (
              <p className="text-sm text-red-500 border border-red-400 px-2 py-1 rounded">
                SALE • SAVE RS.{" "}
                {Math.round(product.price * (product.discount / 100))}
              </p>
            )}
        </div>
        <div className="mt-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-semibold">Size | {selectedSize}</span>
            <button
              type="button"
              className="text-sm underline text-blue-600 hover:text-blue-800 cursor-pointer"
            >
              Size Chart
            </button>
          </div>
          <ul className="flex gap-3 flex-wrap max-w-xs">
            {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
              <li key={size}>
                <button
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border uppercase text-sm font-semibold cursor-pointer ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-300"
                  }`}
                  type="button"
                >
                  {size}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex flex-col gap-3">
          <button className="w-full border border-black py-3 text-lg font-bold uppercase hover:bg-black hover:text-white transition cursor-pointer">
            Add to Cart • Rs. {product.price?.toFixed(2)}
          </button>
          <button className="w-full bg-black text-white py-3 text-lg font-bold uppercase hover:bg-gray-800 transition cursor-pointer">
            Buy It Now
          </button>
        </div>
        <div className="mt-6 text-gray-700">
          {typeof product.stock === "number" && (
            <p
              className={`text-sm ${
                product.stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.stock > 0
                ? `In stock: ${product.stock}`
                : "Out of stock"}
            </p>
          )}
          {product.description && (
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-black">Description</h2>
              <p className="mt-2 text-black">{product.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
