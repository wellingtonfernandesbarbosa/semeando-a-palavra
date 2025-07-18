import Footer from "@/components/Footer";
import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => (
  <Html lang="pt-BR">
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      {/* <link rel="manifest" href="/site.webmanifest" /> */}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
    <Footer />
  </Html>
);

export default MyDocument;
