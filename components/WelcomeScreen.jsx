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
    <div className="w-full h-screen flex flex-col items-center justify-between">
      <div className="mt-44 h-full">
        <h1 className={`uppercase text-center animate-fade-in-up ${first}`}>
          Pioneer of
          <br /> Hula Hoop Dance
          <br /> and Flow Arts
        </h1>
        <h1 className={`uppercase text-center animate-fade-in-up ${second}`}>
          Blending Dance, Circus, Acrobatics, Object Manipulation,
          <br /> and Storytelling to Move Audiences Worldwide
        </h1>
      </div>
      <div className="h-full mb-48">
        <SoundButtons />
      </div>
    </div>
  );
}
