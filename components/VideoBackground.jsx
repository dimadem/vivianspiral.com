import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";

const videoUrl = "https://www.youtube.com/watch?v=g27irY7PY2M";

const VIDEO_WIDTH = 1920;
const VIDEO_HEIGHT = 1080;

export default function VideoBackground() {
  // check if we are on the client
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <>
      {isSSR ? null : (
        <ReactPlayer
          key={videoUrl}
          url={videoUrl}
          width="100%"
          height="100%"
          playing={true}
          controls={false}
          volume={1}
          muted={true}
          style={{
            position: "absolute",
            top: 0,
            objectFit: "cover",
            zIndex: -1,
          }}
        />
      )}
    </>
  );
}
