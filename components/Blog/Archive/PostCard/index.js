import React from "react";
import { useRouter } from "next/router";
import { urlForImage } from "@lib/sanity";
import { limitString } from "../../../../utils";
import Heading from "../../../Generic/Heading";
import Text from "../../../Generic/Text";
import PostTimeWidget from "../../Generic/Widgets/PostTime";
import Image from "next/image";

const PostCard = ({ post }) => {
  const router = useRouter();

  const navigateToPost = (slug) => {
    router.push(`post/${slug}`);
  };

  return (
    <div className="group">
      <div className="post-archive-card group-hover:shadow border rounded border-t-4 border-t-primary pb-4 transition-shadow duration-200 min-h-[430px]">
        <div
          className="post-card-banner relative w-full h-56"
          onClick={() => navigateToPost(post.slug.current)}
        >
          <Image
            src={urlForImage(post.mainImage).url()}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-200"
          />
        </div>

        <div className="post-card-body px-4 mt-3">
          <Heading
            type="secondary"
            className="hover:underline hover:text-primary hover:decoration-primary underline-offset-2 transition-colors duration-150 cursor-pointer"
            onClick={() => navigateToPost(post.slug.current)}
          >
            {post.title}
          </Heading>

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
