import { Product } from "@/sanity.types";
import { groq } from "next-sanity";
import { client } from "../client";

export const getProductBySlug = async (
  slug: string
): Promise<Product | null> => {
  const query = groq`
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      "slug": slug.current,
      price,
      discount,
      intro,
      description,
      images,
      bestSeller,
      status,
      stock,
      variant,
      categories[]->{
        _id,
        title,
        "slug": slug.current
      }
    }
  `;

  const product = await client.fetch<Product | null>(query, { slug });
  return product;
};
