import Head from "next/head";
import client from "@lib/sanity";
import { getAllPostsQuery } from "@lib/sanity/queries";
import BlogLayout from "../components/Blog/Layout";
import Blog from "../components/pages/Blog";
import { useEffect } from "react";
import { v4 } from "uuid";

export default function Home({ posts }) {
  useEffect(() => {
    if (localStorage.getItem("azhar_blog_visitor_uid")) {
      // already visited before
      return;
    } else {
      // new user
      localStorage.setItem("azhar_blog_visitor_uid", v4());
    }
  }, []);
  return (
    <div className="page home-page">
      <Head>
        <title>Blog - Azhar Zaman</title>
      </Head>

      <main className="blog-container">
        <Blog posts={posts} />
      </main>
    </div>
  );
}

Home.getLayout = (page) => <BlogLayout>{page}</BlogLayout>;

export const getServerSideProps = async (ctx) => {
  const posts = await client.fetch(getAllPostsQuery);
  return {
    props: {
      posts: posts,
    },
  };
};
