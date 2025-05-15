import { client } from "@/sanity/lib/client";
import { Slide } from "@/type";

export const getHeroSlides = async (): Promise<Slide[]> => {
  const query = `*[_type == "hero"][0]{ slides[]{_key, image, altText, link} }`;
  const data = await client.fetch<{ slides?: Slide[] }>(query);
  return data?.slides ?? [];
};
