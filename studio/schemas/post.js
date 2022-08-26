export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      placeholder: "100 - 140 characters",
      options: {
        minLength: 80,
        maxLength: 140,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main image",
      description: "Use 2.13:1 for best results",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text(Alt)",
          description: "Important for SEO and accessiblity.",
          options: {
            isHighlighted: true,
          },
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "readTime",
      title: "Read Time(min)",
      type: "string",
      placeholder: "Check on medium",
    },
    {
      name: "postTags",
      title: "Tags",
      type: "tags",
      options: {
        includeFromRelated: "postTags",
        onCreate: (value) => ({
          label: value,
          value: value.toLowerCase().replace(/\W/g, "-"),
        }),
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "priority",
      title: "Post Priority",
      type: "string",
      placeholder: "For filtering stuff",
    },
    {
      name: "other_platforms_link",
      title: "Other platform link",
      type: "string",
    },
    {
      name: "other_platforms_link_2",
      title: "Other platform link 2",
      type: "string",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
