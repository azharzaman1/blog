export default {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "email",
      type: "string",
    },
    {
      title: "User Id",
      name: "uid",
      type: "string",
    },
    {
      name: "body",
      type: "text",
    },
    {
      name: "likes",
      type: "number",
    },
    {
      name: "clap_count",
      type: "number",
    },
    {
      title: "Approved",
      type: "boolean",
      name: "approved",
      description: "Approve to show on site",
    },
    {
      title: "Pinned",
      type: "boolean",
      name: "pinned",
      description: "Pin to the top",
    },
    {
      title: "Pin Priority",
      type: "number",
      name: "pin_priority",
      description: "To rank between multiple pins, lower number is at top",
    },
    {
      title: "Replies",
      name: "replies",
      type: "array",
      of: [{ type: "comment" }],
    },
    { type: "reference", name: "post", to: [{ type: "post" }] },
  ],
};
