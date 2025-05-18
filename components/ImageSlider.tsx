"use client";

import { SanityImage } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const ImageSlider = ({
  images,
  productName,
}: {
  images: SanityImage[];
  productName: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    if (isHovered) {
      sliderRef.current?.slickPlay();
    } else {
      sliderRef.current?.slickPause();
      sliderRef.current?.slickGoTo(0);
      setCurrentIndex(0);
    }
  }, [isHovered]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    beforeChange: (_: number, next: number) => setCurrentIndex(next),
  };

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Slider ref={sliderRef} {...settings}>
        {images.map((img, index) => (
          <div key={img._key ?? index} className="relative w-full h-full">
            <Image
              src={urlFor(img).url()}
              alt={productName}
              width={500}
              height={500}
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>
      {isHovered && (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-10 w-[90%]">
          {images.map((img) => {
            const isActive = images[currentIndex]?._key === img._key;
            return (
              <div
                key={img._key}
                className="relative flex-1 h-[2px] bg-gray-400 rounded-full overflow-hidden"
              >
                {isActive && (
                  <div className="absolute left-0 top-0 h-full bg-white animate-progress w-full" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
