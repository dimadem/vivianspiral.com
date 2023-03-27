export default function VideoBackground() {
  return (
    <video muted autoPlay playsInline loop className="bg-video">
      <source src={require("../public/bg_540_lo-rez.mp4")} type="video/mp4" />
    </video>
  );
}
