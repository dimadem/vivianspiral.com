import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const videoId = "g27irY7PY2M";

export default function VideoBackground() {
  return (
    <>
      <div className="absolute top-0 w-full h-screen overflow-hidden aspect-video transform -z-10">
        <LiteYouTubeEmbed
          id={videoId}
          title="Vivian Spiral - The Act Kit"
          noCookie={true}
          params="controls=0&showinfo=0&autoplay=1&mute=1&loop=1"
        />
      </div>
    </>
  );
}
