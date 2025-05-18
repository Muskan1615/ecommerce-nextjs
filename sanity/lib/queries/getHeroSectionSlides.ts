import { HeroSection } from "@/sanity.types";
import { client } from "@/sanity/lib/client";

export const getHeroSectionSlides = async (): Promise<
  NonNullable<HeroSection["slides"]>
> => {
  const query = `*[_type == "heroSection"]{ slides[]{_key, image, altText, link} }`;
  const data = await client.fetch<Pick<HeroSection, "slides">[]>(query);
  const allSlides = data.flatMap((section) => section.slides ?? []);
  return allSlides;
};
