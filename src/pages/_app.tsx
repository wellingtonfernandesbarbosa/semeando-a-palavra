import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={openSans.variable}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
