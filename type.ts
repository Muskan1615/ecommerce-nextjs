export interface SanityImageAsset {
  _ref: string;
  _type: "reference";
}

export interface SanityImage {
  _key?: string;
  _type: "image";
  asset: SanityImageAsset;
}

export interface Slide {
  _key: string;
  image: SanityImage;
  altText?: string;
  link?: string;
}

export interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  price: number;
  discount: number;
  intro: string;
  images: SanityImage[];
}
