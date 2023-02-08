"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import WelcomeScreen from "../components/WelcomeScreen";

const ScreenData = dynamic(() => import("../components/MainScreen"));

export default function Home() {
  const [loading, setIsLoading] = useState(true);

  // timer to simulate loading
  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  }, [loading]);

  return <>{loading ? <WelcomeScreen /> : <ScreenData />}</>;
}
