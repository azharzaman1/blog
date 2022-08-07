import React from "react";

const PostTags = ({ tags }) => {
  return (
    <div className="mt-2 md:ml-4 md:mt-0 blog-post-tags flex flex-wrap text-xs sm:text-sm items-center md:flex-[0.67]">
      {tags.slice(0, 4).map((tag) => (
        <span
          key={tag.value}
          className="text-sm mx-1 sm:mx-1 md:mx-1.5 text-text-dim"
        >
          #{tag.value}
        </span>
      ))}
    </div>
  );
};

export default PostTags;
