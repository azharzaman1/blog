/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaFile, FaImages } from "react-icons/fa";
import { BiSlideshow } from "react-icons/bi";
import { AiOutlineFileDone } from "react-icons/ai";
import { VscFiles } from "react-icons/vsc";
import React from "react";

const highlightIcon = () => <span style={{ fontWeight: "bold" }}>H</span>;

const highlightRender = (props) => (
  <span style={{ backgroundColor: "yellow" }}>{props.children}</span>
);

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "H6", value: "h6" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          {
            title: "Highlight",
            value: "highlight",
            blockEditor: {
              icon: highlightIcon,
              render: highlightRender,
            },
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            icon: IoDocumentTextOutline,
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                to: [{ type: "post" }],
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "image",
      name: "image",
      title: "Image",
      fields: [
        {
          title: "Alternative text(Alt)",
          name: "alt",
          type: "string",
          description: "Important for SEO and accessiblity.",
          options: {
            isHighlighted: true,
          },
        },
        {
          title: "Caption",
          name: "caption",
          type: "string",
          options: {
            isHighlighted: true,
          },
        },
        {
          title: "Copyright Owner Name",
          name: "copyright_owner",
          type: "string",
          description: "e.g. Elon Musk",
          options: {
            isHighlighted: true,
          },
        },
        {
          title: "Copyright Owner URL",
          name: "copyright_owner_url",
          type: "url",
          description: "e.g. www.elonmusk.com",
          options: {
            isHighlighted: true,
          },
        },
        {
          title: "Copyright Source",
          name: "copyright_source",
          description: "e.g. article OR website OR book, etc.",
          type: "string",
          options: {
            isHighlighted: true,
          },
        },
        {
          title: "Copyright Source URL",
          name: "copyright_source_url",
          description: "e.g. url of article OR website OR book, etc.",
          type: "url",
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
      type: "code",
      title: "Code Editor",
    },
    // future use - [https://codesandbox.io/s/qclrrz?file=/package.json]
    {
      type: "gallery",
      icon: FaImages,
    },
    {
      type: "slideshow",
      icon: BiSlideshow,
    },
    {
      type: "resource",
      icon: AiOutlineFileDone,
    },
    {
      type: "resourceGroup",
      icon: VscFiles,
    },
    {
      type: "file",
      name: "file",
      title: "File",
      icon: FaFile,
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
        },
      ],
    },
  ],
};
