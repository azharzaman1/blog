import Head from "next/head";
import { useEffect } from "react";
import { v4 } from "uuid";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // client
      if (localStorage.getItem("azhar_blog_visitor_uid")) {
        // already visited before
        return;
      } else {
        // new user
        localStorage.setItem("azhar_blog_visitor_uid", v4());
      }
    }
  }, []);

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/3/3e/Eo_circle_pink_letter-a.svg"
        />
        <link
          rel="apple-touch-icon"
          href="https://upload.wikimedia.org/wikipedia/commons/3/3e/Eo_circle_pink_letter-a.svg"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
