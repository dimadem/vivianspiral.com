import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const videoId = "g27irY7PY2M";

export default function VideoBackground() {
  return (
    <>
      <div className="absolute top-0 w-full h-screen overflow-hidden aspect-video transform -z-10">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Vivian - YouTube"
          width="100%"
          height="100%"
          frameBorder="0"
          fill="true"
          allow="accelerometer; autoplay; clipboard-write; "
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
