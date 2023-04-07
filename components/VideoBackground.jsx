export default function VideoBackground() {
  return (
    <video
      controls={false}
      autoPlay={true}
      playsInline={true}
      muted={true}
      loop={true}
      className="bg-video"
    >
      <source src={require("../public/bg_540_lo-rez.mp4")} type="video/mp4" />
    </video>
  );
}
