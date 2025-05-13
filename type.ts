// types.ts
export interface SanityImageAsset {
  _ref: string;
  _type: "reference";
}

export interface SanityImage {
  _type: "image";
  asset: SanityImageAsset;
}

export interface Slide {
  _key: string;
  image: SanityImage;
  altText?: string;
  link?: string;
}
