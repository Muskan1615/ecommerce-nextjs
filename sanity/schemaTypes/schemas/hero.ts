import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "slides",
      title: "Slides",
      type: "array",
      of: [
        {
          type: "object",
          name: "slide",
          title: "Slide",
          fields: [
            defineField({
              name: "image",
              title: "Slide Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "link",
              title: "Slide Link",
              type: "url",
            }),
            defineField({
              name: "altText",
              title: "Alt Text",
              type: "string",
              validation: (Rule) => Rule.max(120),
            }),
          ],
          preview: {
            select: {
              title: "altText",
              media: "image",
              subtitle: "link",
            },
            prepare(selection) {
              return {
                title: selection.title || "No alt text",
                media: selection.media,
                subtitle: selection.subtitle || "No link",
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(5).warning("Only 5 slides allowed."),
    }),
  ],
  preview: {
    select: {
      slides: "slides",
    },
    prepare({ slides }) {
      const count = slides?.length || 0;
      const title = "Hero Section";
      const subtitle = `${count} Slide${count === 1 ? "" : "s"}`;
      const media = slides?.[0]?.image;

      return {
        title,
        subtitle,
        media,
      };
    },
  },
});
