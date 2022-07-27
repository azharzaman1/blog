import React from "react";
import Head from "next/head";
import { postBySlugQuery, postPathsQuery } from "@lib/sanity/queries";
import client, { getClient, urlForImage } from "@lib/sanity";
import BlogLayout from "../../components/Blog/Layout";
import Container from "../../components/Generic/Layout/Container";
import Heading from "../../components/Generic/Heading";
import PostTimeWidget from "../../components/Blog/Generic/Widgets/PostTime";
import PostBody from "../../components/Blog/Post/PostBody";
import AuthorWidget from "../../components/Blog/Generic/Widgets/Author";
import Text from "../../components/Generic/Text";

const Post = ({ post }) => {
  return (
    <div className="page post-page">
      <Head>
        <title>{post.title} | Azhar Blog</title>
      </Head>
      <main className="post-page-content flex flex-col items-center">
        <div className="w-full post-banner max-w-[900px]">
          <img
            src={urlForImage(post.mainImage).url()}
            className="w-full h-96 object-center object-cover"
            alt={post.title}
          />
        </div>
        <div className="post-content flex justify-center pb-16">
          <Container maxWidth="md">
            <div className="post-header">
              <div className="post-info mt-6 pl-2">
                <Heading>{post.title}</Heading>
                <div className="flex flex-col md:flex-row justify-start md:items-center mt-2">
                  <div className="blog-post-timings">
                    <PostTimeWidget
                      date={post.publishedAt}
                      readTime={post.readTime}
                    />
                  </div>
                  <div className="mt-2 md:ml-4 md:mt-0 blog-post-tags flex flex-wrap text-xs sm:text-sm items-center">
                    {post.postTags.map((tag) => (
                      <span
                        key={tag.value}
                        className="text-sm mx-1 sm:mx-1 md:mx-1.5 text-text-dim"
                      >
                        #{tag.value}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="blog-post-author mt-4">
                  <AuthorWidget
                    name={post.author.name}
                    description={post.author.tagline}
                    avatarUrl={urlForImage(post.author.image).url()}
                    externalURL="https://www.azharzaman.com"
                  />
                </div>
              </div>
            </div>
            <PostBody content={post.body} />
            <div className="post-comments">
              <Heading>Comments</Heading>
              <Text className="mt-2">
                Comments section coming soon, I am working on it
              </Text>
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
};

Post.getLayout = (page) => <BlogLayout>{page}</BlogLayout>;

export const getStaticProps = async ({ params, preview = false }) => {
  // fetch post
  const post = await getClient(preview).fetch(postBySlugQuery, {
    slug: params.slug,
  });

  // return post as prop

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      preview,
    },
    // on-demand Incremental Static Regeneration(ISR)
  };
};

export const getStaticPaths = async () => {
  // fetch urls of all the posts needed to be prefetched
  const slugs = await client.fetch(postPathsQuery);

  //  format paths
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default Post;
