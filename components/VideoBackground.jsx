export default function VideoBackground() {
  return (
    <>
      {/* <div className="absolute top-0 w-fit min-h-screen overflow-hidden aspect-video -z-10"> */}
      <iframe
        src="https://player.vimeo.com/video/799926239?muted=1&autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0&background=1"
        className="bg-video"
        title="Spiral_Circus_Artist_Demo_Reel"
        allow="autoplay; fullscreen; picture-in-picture"
      />
      {/* </div> */}
    </>
  );
}
