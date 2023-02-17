"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import WelcomeScreen from "../components/WelcomeScreen";
import VideoBackground from "../components/VideoBackground";

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
    <div>
      {loading ? (
        <WelcomeScreen useSetIsLoading={() => setIsLoading(false)} />
      ) : (
        <SliderScreen />
      )}
      {/* <SliderScreen /> */}
      {/* <VideoBackground /> */}
    </div>
  );
}
