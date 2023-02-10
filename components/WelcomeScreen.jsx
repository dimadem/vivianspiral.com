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
    <div className="flex flex-col justify-center items-center w-full">
      <div className="relative z-30 flex flex-col justify-between items-center w-80 sm:min-w-full min-h-screen">
        <div className="mt-44">
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
        <div className="min-h-full mb-48">
          <SoundButtons />
        </div>
      </div>
    </div>
  );
}
