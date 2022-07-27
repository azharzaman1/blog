import Head from "next/head";
import client from "@lib/sanity";
import { getAllPostsQuery } from "@lib/sanity/queries";
import BlogLayout from "../components/Blog/Layout";
import Blog from "../components/pages/Blog";

export default function Home({ posts }) {
  console.log(posts);
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
