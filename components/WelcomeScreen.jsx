import SoundButtons from "./ui/SoundButtons";

export default function WelcomeScreen(params) {
  return (
    <main>
      <div className="w-96 font-spectralHeader">
        <h1 className="text-center">
          PIONEER IN HULA-HOOP DANCE AND FLOW ARTS
        </h1>
        <h1 className="text-center">
          BLENDING DANCE, CIRCUS, ACROBATICS, OBJECT MANIPULATION AND
          STORYTELLING TO MOVE AUDIENCES WORLDWIDE
        </h1>
        <div className="flex flex-row">{/* <SoundButtons /> */}</div>
      </div>
    </main>
  );
}
