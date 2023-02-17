import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const videoId = "g27irY7PY2M";

export default function VideoBackground() {
  return (
    <>
      <div className="absolute top-0 w-full h-screen overflow-hidden aspect-video -z-10">
        <iframe
          src="https://player.vimeo.com/video/799926239?background=1"
          allowfullscreen
          className="absolute -z-10 w-auto aspect-video min-w-full min-h-full max-w-none transform -translate-y-1/2 top-1/2 sm:-left-1/2 lg:left-0 md:-left-1/2 -left-4"
          title="Spiral_Circus_Artist_Demo_Reel.mov"
        ></iframe>
      </div>
    </>
  );
}
