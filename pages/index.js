"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import WelcomeScreen from "../components/WelcomeScreen";
import VideoBackground from "../components/VideoBackground";
import Head from "next/head";

const SliderScreen = dynamic(() => import("../components/SliderScreen"));

export default function Home() {
  const [loading, setIsLoading] = useState(true);

  // timer to simulate loading
  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setIsLoading(false);
      }, 6000);
    }
  }, [loading]);

  return (
    <>
      <Head>
        <title>Pioneer of Hula Hoop Dance and Flow Arts</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="relative flex shrink-0 h-[100vh]">
        {loading ? (
          <WelcomeScreen useSetIsLoading={() => setIsLoading(false)} />
        ) : (
          <SliderScreen />
        )}
        {/* <SliderScreen /> */}
        <VideoBackground />
      </main>
    </>
  );
}
