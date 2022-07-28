import "../styles/globals.css";
import Head from "next/head";
import RadixProviders from "headless/radix/RadixProviders";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

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
      <RadixProviders>{getLayout(<Component {...pageProps} />)}</RadixProviders>
    </>
  );
}

export default MyApp;
