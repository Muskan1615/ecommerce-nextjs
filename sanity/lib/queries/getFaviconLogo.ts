import { client } from "@/sanity/lib/client";

export const getFaviconLogo = async (): Promise<string | null> => {
  const query = `*[_type == "logo" && variant == "favicon" && defined(image.asset)][0]{
    "url": image.asset->url
  }`;

  const result = await client.fetch<{ url?: string }>(query);
  return result?.url ?? null;
};
