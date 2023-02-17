import { useEffect, useState } from "react";
import SoundButtons from "./ui/SoundButtons";

export default function WelcomeScreen({ useSetIsLoading }) {
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
      <button
        className="absolute right-4 top-3 btn btn-ghost font-spectralHeader text-sm"
        onClick={useSetIsLoading}
      >
        skip
      </button>
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
      <div className="h-fit mb-48">
        <SoundButtons />
      </div>
    </div>
  );
}
