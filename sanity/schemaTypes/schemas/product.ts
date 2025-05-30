import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "intro",
      title: "Product Intro",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Product Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "discount",
      title: "Discount Percentage",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "productCategory" } }],
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "status",
      title: "Product Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Hot", value: "hot" },
          { title: "Sale", value: "sale" },
        ],
      },
    }),
    defineField({
      name: "variant",
      title: "Product Type",
      type: "string",
      options: {
        list: [
          { title: "Tshirts", value: "tshirts" },
          { title: "Shirts", value: "shirts" },
          { title: "Jackets", value: "jackets" },
          { title: "Bottoms", value: "bottoms" },
          { title: "Hoodies", value: "hoodies" },
          { title: "Vests", value: "vests" },
          { title: "Caps", value: "caps" },
        ],
      },
    }),
    defineField({
      name: "bestSeller",
      title: "Best Seller",
      type: "boolean",
      initialValue: false,
      description: "Mark this product as a best seller to show on homepage",
    }),
    defineField({
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "XS", value: "XS" },
              { title: "S", value: "S" },
              { title: "M", value: "M" },
              { title: "L", value: "L" },
              { title: "XL", value: "XL" },
              { title: "XXL", value: "XXL" },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "images",
      subtitle: "price",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      const image = media?.[0];
      return {
        title: title,
        subtitle: `Rs.${subtitle}`,
        media: image,
      };
    },
  },
});
