import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedPost = ({ post, className }) => {
  return (
    <div
      className={`related-posts-post cursor-pointer flex flex-row items-start space-x-4 ${className}`}
    >
      <div className="related-post-left">
        <div className="related-post-main-image relative w-20 h-12 bg-slate-200">
          <Image
            src={post.mainImage}
            layout="fill"
            objectFit="contain"
            alt="related post banner"
          />
        </div>
      </div>
      <div className="related-post-right">
        <Link href={`/post/${post.slug}`}>
          <h4 className="hover:underline">{post.title}</h4>
        </Link>
      </div>
    </div>
  );
};

export default RelatedPost;
