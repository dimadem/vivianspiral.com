import "@/styles/globals.css";
import { Spectral, Montaga } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 5000);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    loading && (
      <div className="spinner-wrapper">
        <div className="spinner"></div>
      </div>
    )
  );
}

export default function App({ Component, pageProps }) {
  return (
    <main className={`${spectral.variable} ${montaga.variable}`}>
      <Loading />
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
