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
      {loading ? <WelcomeScreen /> : <MainScreen />}
      <div className="flex flex-col animate-fade-in-up">
        <VideoBackground />
      </div>
    </>
  );
}
