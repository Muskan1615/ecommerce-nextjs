"use client";

import { HeroSection } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { getHeroSectionSlides } from "@/sanity/lib/queries/getHeroSectionSlides";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function NextArrow(props: Readonly<CustomArrowProps>) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute bottom-4 right-8 z-10 bg-white/50 hover:bg-white text-black rounded-full p-2"
      aria-label="Next slide"
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  );
}

function PrevArrow(props: Readonly<CustomArrowProps>) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute bottom-4 left-8 z-10 bg-white/50 hover:bg-white text-black rounded-full p-2"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-5 h-5" />
    </button>
  );
}

export const Hero = () => {
  const [slides, setSlides] = useState<HeroSection["slides"]>([]);

  useEffect(() => {
    getHeroSectionSlides().then((fetchedSlides) => {
      if (fetchedSlides?.length) {
        setSlides(fetchedSlides);
      }
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  if (!slides?.length) {
    return (
      <div className="h-[90vh] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="relative w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide._key} className="relative w-full h-[90vh]">
            {slide.image && (
              <Image
                src={urlFor(slide.image).url()}
                alt={slide.altText ?? `Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            )}
            {slide.link && (
              <a
                href={slide.link}
                className="absolute inset-0 z-10"
                aria-label={`Slide ${index + 1} link`}
              />
            )}
          </div>
        ))}
      </Slider>
    </section>
  );
};
