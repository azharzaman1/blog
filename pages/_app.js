import Head from "next/head";
import { useEffect } from "react";
import { v4 } from "uuid";
import { Provider as RadixTooltipProvider } from "@radix-ui/react-tooltip";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // client
      if (localStorage.getItem("azhar_blog_visitor_user_obj")) {
        // already visited before
        return;
      } else {
        // new user
        localStorage.setItem(
          "azhar_blog_visitor_user_obj",
          JSON.stringify({ uid: v4() })
        );
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
      <RadixTooltipProvider>
        {getLayout(<Component {...pageProps} />)}
      </RadixTooltipProvider>
    </>
  );
}

export default MyApp;
