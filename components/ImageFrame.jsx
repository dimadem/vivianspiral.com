import Image from "next/image";

export default function ImageFrame({ src, alt, setOnClick }) {
  return (
    <div className="relative w-full h-64 md:h-96 lg:h-96">
      <Image
        onClick={setOnClick}
        alt={alt}
        src={src}
        fill
        className="w-full h-full object-cover cursor-pointer"
      />
    </div>
  );
}
