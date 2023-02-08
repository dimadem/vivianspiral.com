import "@/styles/globals.css";
import { Spectral, Montaga } from "@next/font/google";

export const spectral = Spectral({
  weight: "400",
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

export default function App({ Component, pageProps }) {
  return (
    <main className={`${spectral.variable} ${montaga.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
