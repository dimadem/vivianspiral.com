import "@/styles/globals.css";
import { Spectral, Montaga, Josefin_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

export const spectral = Spectral({
  weight: ["200", "300", "400"],
  //   style: "normal",
  subsets: ["latin"],
  //   preload: true,
  variable: "--font-spectral",
});

export const montaga = Montaga({
  weight: "400",
  //   style: "normal",
  subsets: ["latin"],
  //   preload: true,
  variable: "--font-montaga",
});

export const josefin = Josefin_Sans({
  weight: ["200", "300", "400"],
  //   style: "normal",
  subsets: ["latin"],
  //   preload: true,
  variable: "--font-josefin",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${spectral.variable} ${montaga.variable} ${josefin.variable}`}
    >
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
