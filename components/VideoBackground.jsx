import { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";

const videoUrl = "https://www.youtube-nocookie.com/embed/g27irY7PY2M";

export default function VideoBackground() {
  // check if we are on the client
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <>
      {/* <div className="absolute w-fit h-screen aspect-video transform -z-10"> */}
      {isSSR ? null : (
        <ReactPlayer
          key={videoUrl}
          url={videoUrl}
          playing={true}
          loop={true}
          controls={false}
          volume={1}
          width="100%"
          height="100%"
          muted={true}
          style={{
            position: "absolute",
            top: 0,
            zIndex: -1,
            // width: "fit",
            height: "100vh",
            // objectFit: "cover",
          }}
        />
      )}
      {/* </div> */}
    </>
  );
}
