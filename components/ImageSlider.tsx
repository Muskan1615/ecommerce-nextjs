import { urlFor } from "@/sanity/lib/image";
import { SanityImage } from "@/type";
import Image from "next/image";
import { useState } from "react";
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

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (_: number, next: number) => setCurrentIndex(next),
  };

  return (
    <div className="relative w-full h-full">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={img._key ?? index} className="relative w-full h-full">
            <Image
              src={urlFor(img).url()}
              alt={productName}
              width={500}
              height={500}
              className="object-cover group-hover::scale-105"
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
        {images.map((img) => (
          <div
            key={img._key}
            className={`h-[2px] w-5 rounded-full transition-all duration-200 ${
              images[currentIndex]?._key === img._key
                ? "bg-white"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
