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
      <div className="absolute w-full h-screen overflow-hidden aspect-video transform -z-10">
        {/* {isSSR ? null : ( */}
        <iframe
          width="100%"
          height="100vh"
          src="https://www.youtube-nocookie.com/embed/g27irY7PY2M?autoplay=1"
          frameBorder="0"
          allowFullScreen
          allow="autoplay"
          className="absolute top-0 left-0"
        ></iframe>
        {/* )} */}
      </div>
    </>
  );
}
