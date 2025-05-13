import { type SchemaTypeDefinition } from "sanity";
import { hero } from "./schemas/hero";
import { product } from "./schemas/product";
import { productCategory } from "./schemas/product-category";
import { promotionCampaign } from "./schemas/promotion-campaign";
import { promotionCode } from "./schemas/promotion-codes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productCategory, product, promotionCode, promotionCampaign, hero],
};
