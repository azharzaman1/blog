import Head from "next/head";
import client from "@lib/sanity";
import { getAllPostsQuery } from "@lib/sanity/queries";
import Blog from "../components/pages/Blog";
import Footer from "components/Generic/Footer";
import Header from "components/Generic/Header";
export default function Home({ posts }) {
  return (
    <div className="page home-page">
      <Head>
        <title>Blog - Azhar Zaman</title>
      </Head>
      <Header />
      <main className="blog-container">
        <Blog posts={posts} />
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const posts = await client.fetch(getAllPostsQuery);
  return {
    props: {
      posts: posts,
    },
  };
};
