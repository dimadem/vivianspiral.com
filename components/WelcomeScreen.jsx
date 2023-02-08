import { useEffect, useState } from "react";
import SoundButtons from "./ui/SoundButtons";

export default function WelcomeScreen(params) {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("hidden");

  useEffect(() => {
    setTimeout(() => {
      setFirst("hidden");
      setSecond("");
    }, 2500);
  }, []);

  return (
    <div className="flex flex-col justify-between items-center h-screen p-5">
      <div className="flex flex-col h-full justify-center w-80 sm:w-full">
        <h1 className={`text-center animate-fade-in-up ${first}`}>
          PIONEER IN HULA-HOOP DANCE AND FLOW ARTS
        </h1>
        <h1 className={`text-center animate-fade-in-up ${second}`}>
          BLENDING DANCE, CIRCUS, ACROBATICS, OBJECT MANIPULATION <br /> AND
          STORYTELLING TO MOVE AUDIENCES WORLDWIDE
        </h1>
      </div>
      <div className="flex flex-col h-full w-full justify-center">
        <SoundButtons />
      </div>
    </div>
  );
}
