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
        <div className=" absolute min-w-screen min-h-screen animate-fade-in-up">
          <ReactPlayer
            key={videoUrl}
            url={videoUrl}
            playing={true}
            width="100%"
            height="100vh"
            loop={true}
            controls={false}
            volume={1}
            muted={true}
            style={{
              position: "relative",
              top: 0,
              zIndex: 0,
              // width: "100%",
              // height: "100vh",
              objectFit: "cover",
              opacity: 0.8,
            }}
          />
        </div>
      )}
    </>
  );
}
