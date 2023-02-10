"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import WelcomeScreen from "../components/WelcomeScreen";
import VideoBackground from "@/components/VideoBackground";

const MainScreen = dynamic(() => import("../components/MainScreen"));

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
      <div className="relative flex flex-col justify-start items-start min-w-full min-h-screen p-0">
        {loading ? <WelcomeScreen /> : <MainScreen />}
        <VideoBackground />
      </div>
    </>
  );
}
