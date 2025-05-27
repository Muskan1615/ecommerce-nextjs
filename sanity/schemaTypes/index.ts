import { type SchemaTypeDefinition } from "sanity";
import { heroSection } from "./schemas/hero";
import { logo } from "./schemas/logo";
import { product } from "./schemas/product";
import { productCategory } from "./schemas/product-category";
import { promotionCampaign } from "./schemas/promotion-campaign";
import { promotionCode } from "./schemas/promotion-codes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productCategory,
    product,
    promotionCode,
    promotionCampaign,
    heroSection,
    logo,
  ],
};
