import { Logo } from "@/sanity.types";
import { client } from "@/sanity/lib/client";

export const getLogos = async (): Promise<Logo[]> => {
  const query = `*[_type == "logo"]{
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    title,
    slug,
    variant,
    image,
    isDefault
  }`;

  return await client.fetch<Logo[]>(query);
};
