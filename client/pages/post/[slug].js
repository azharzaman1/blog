import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "@lib/axios";
import { useRouter } from "next/router";
import { BiRefresh } from "react-icons/bi";
import {
  getAllPostComments,
  getPostBySlugQuery,
  getPostPathsQuery,
} from "@lib/sanity/queries";
import client, { getClient, imageBuilder } from "@lib/sanity";
import { limitString } from "utils";
import useUserStatus from "hooks/useUserStatus";
import Heading from "../../components/Generic/Heading";
import PostTimeWidget from "../../components/Blog/Generic/Widgets/PostTime";
import PostBody from "../../components/Blog/Post/PostBody";
import AuthorWidget from "../../components/Blog/Generic/Widgets/Author";
import PostComments from "components/Blog/Post/Comments";
import BlogLayout from "../../components/Blog/Layout";
import PostShareWidget from "components/Blog/Post/ShareWidget";

const Post = ({ post }) => {
  const isAdmin = useUserStatus(false);
  const [revalidatingPost, setRevalidatingPost] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  const postRevalidationHandler = () => {
    setRevalidatingPost(true);
    axios
      .get(
        `/revalidate?secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET_TOKEN}&route=/post/${slug}`
      )
      .then((res) => {
        console.log("Post revalidate response", res);
      })
      .catch((err) => {
        console.log("Post revalidate error:", err.message);
      })
      .finally(() => {
        console.log("Post revalidation attempt finished");
        setRevalidatingPost(false);
      });
  };

  return (
    <div className="page post-page">
      <Head>
        <title>{post.title} | Azhar Blog</title>
        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@idrazhar" />
        {/* generic */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={limitString(post.excerpt, 140, true)}
        />
        <meta
          property="og:image"
          content={imageBuilder(post.mainImage).url()}
        />
      </Head>
      <main className="post-page-content flex flex-col items-center relative">
        <div className="post-banner relative w-full h-64 sm:h-96 md:h-[480px] max-w-5xl">
          <Image
            src={imageBuilder(post.mainImage).url()}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            priority
          />
          {isAdmin && (
            <div className="post-admin-actions flex items-center absolute right-4 top-4 text-white bg-white bg-opacity-10 rounded-full py-1.5 px-2.5">
              <button
                title="Revalidate"
                className="flex items-center"
                onClick={postRevalidationHandler}
              >
                <BiRefresh className={revalidatingPost && "animate-spin"} />
              </button>
            </div>
          )}
        </div>
        <div className="post-content flex-col pb-16 px-8 max-w-5xl">
          <div className="post-header">
            <div className="post-info mt-6 pl-2">
              <Heading>{post.title}</Heading>
              <div className="flex flex-col md:flex-row justify-start md:justify-between md:items-center mt-2">
                <div className="blog-post-timings">
                  <PostTimeWidget
                    date={post.publishedAt}
                    readTime={post.readTime}
                  />
                </div>
                <PostShareWidget
                  slug={slug}
                  className="block mt-3"
                  horizontal
                  variant="minimal"
                />
              </div>

              <div className="blog-post-author mt-4">
                <AuthorWidget
                  variant="inline"
                  name={post.author.name}
                  description={post.author.tagline}
                  avatarUrl={imageBuilder(post.author.image).url()}
                  externalURL="https://www.azharzaman.com"
                />
              </div>
            </div>
          </div>
          <PostBody content={post.body} />

          {/* <PostComments _id={post._id} comments={post.comments} /> */}
        </div>
      </main>
    </div>
  );
};

Post.getLayout = (page) => <BlogLayout>{page}</BlogLayout>;

export const getStaticProps = async ({ params, preview = false }) => {
  // fetch post
  const post = await getClient(preview).fetch(getPostBySlugQuery, {
    slug: params.slug,
  });

  // fetch comments
  const comments = await getClient(preview).fetch(getAllPostComments, {
    postID: post?._id,
  });

  // return post as prop

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: { ...post, comments },
      preview,
    },
    // on-demand Incremental Static Regeneration(ISR)
  };
};

export const getStaticPaths = async () => {
  // fetch urls of all the posts needed to be prefetched
  const slugs = await client.fetch(getPostPathsQuery);

  //  format paths
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default Post;
