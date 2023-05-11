import React from "react";
import Image from "next/image";
import Link from "next/link";
import { imageBuilder } from "@lib/sanity";
import { limitString } from "../../../../utils";
import Heading from "../../../Generic/Heading";
import Text from "../../../Generic/Text";
import PostTimeWidget from "../../Generic/Widgets/PostTime";

const PostCard = ({ post }) => {
  return (
    <div className="group">
      <div className="post-archive-card group-hover:shadow border rounded border-t-4 border-t-primary pb-4 transition-shadow duration-200 min-h-[430px]">
        <Link href={`post/${post.slug.current}`}>
          <div className="post-card-banner relative w-full h-56">
            <Image
              src={imageBuilder(post.mainImage).url()}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-200"
            />
          </div>
        </Link>
        <div className="post-card-body px-4 mt-3">
          <Link href={`post/${post.slug.current}`}>
            <Heading
              type="secondary"
              className="hover:underline hover:text-primary hover:decoration-primary underline-offset-2 transition-colors duration-150 cursor-pointer"
            >
              {post.title}
            </Heading>
          </Link>

          <div className="post-card-info flex items-center justify-between mt-2">
            <PostTimeWidget date={post.publishedAt} readTime={post.readTime} />
          </div>
          <div className="post-card-content mt-2">
            <Text>{limitString(post.excerpt, 140, true)}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
