import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Open_Sans, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${openSans.variable} ${lora.variable}`}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
