"use client";

import { Product } from "@/sanity.types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ProductCard } from "./ProductCard";

export const BestSellers = ({ products }: { products: Product[] }) => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const outerSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const totalSlides = products.length;
  const visibleSlides = 4;

  return (
    <section className="py-16 bg-neutral-100">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Previous"
            className={`p-2 rounded-full border transition active:opacity-60 ${
              currentSlide === 0
                ? "bg-[rgba(0,0,0,0.05)] text-gray-400"
                : "bg-white text-black hover:bg-gray-100 cursor-pointer"
            }`}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-3xl font-bold uppercase tracking-wide text-center flex-1">
            Best Sellers
          </h2>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Next"
            className={`p-2 rounded-full border transition active:opacity-60 ${
              currentSlide >= totalSlides - visibleSlides
                ? "bg-[rgba(0,0,0,0.05)] text-gray-400"
                : "bg-white text-black hover:bg-gray-100 cursor-pointer"
            }`}
            disabled={currentSlide >= totalSlides - visibleSlides}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <Slider ref={sliderRef} {...outerSettings}>
          {products.map((product) => (
            <div className="px-2" key={product._id}>
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
