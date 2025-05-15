import { groq } from "next-sanity";
import { client } from "./client";
import { Product } from "@/type";

export const getBestSellers = async (): Promise<Product[]> => {
  const query = groq`
    *[_type == "product" && bestSeller == true] | order(_createdAt desc)[0...8]{
      _id,
      name,
      slug,
      price,
      discount,
      intro,
      description,
      images
    }
  `;
  const data = await client.fetch<Product[]>(query);
  return data ?? [];
};
