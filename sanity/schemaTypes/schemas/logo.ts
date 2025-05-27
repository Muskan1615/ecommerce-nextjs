import { defineField, defineType } from "sanity";

export const logo = defineType({
  name: "logo",
  title: "Logo",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: [
          { title: "Light Background", value: "light" },
          { title: "Dark Background", value: "dark" },
          { title: "Mobile", value: "mobile" },
          { title: "Favicon", value: "favicon" },
          { title: "Footer", value: "footer" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "image",
      title: "Logo Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "isDefault",
      title: "Default Logo",
      type: "boolean",
      description: "Set as default logo for general use.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "variant",
      media: "image",
    },
  },
});
