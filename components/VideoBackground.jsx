export default function VideoBackground() {
  return (
    <video controls={false} muted autoPlay loop className="bg-video">
      <source src={require("../public/bg_540_lo-rez.mp4")} type="video/mp4" />
    </video>
  );
}
