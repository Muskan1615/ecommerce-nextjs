import { Product } from "@/sanity.types";
import { groq } from "next-sanity";
import { client } from "../client";

interface CategoryWithProducts {
  category: {
    _id: string;
    title: string;
    slug: string;
  };
  products: Product[];
}

export const getProductsByCategorySlug = async (
  slug: string
): Promise<CategoryWithProducts> => {
  const categoryQuery = groq`*[_type == "productCategory" && slug.current == $slug][0]{ _id, title, "slug": slug.current }`;
  const category = await client.fetch(categoryQuery, { slug });

  if (!category) {
    return {
      category: { _id: "", title: "Unknown Category", slug },
      products: [],
    };
  }

  const productsQuery = groq`
    *[_type == "product" && references($categoryId)]{
      _id,
      name,
      slug,
      price,
      discount,
      intro,
      description,
      images,
      bestSeller,
      status
    }
  `;
  const products = await client.fetch<Product[]>(productsQuery, {
    categoryId: category._id,
  });

  return { category, products };
};
