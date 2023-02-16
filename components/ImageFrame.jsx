import Image from "next/image";
import { useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function ImageFrame({ src, alt }) {
  return (
    <div className="relative w-full h-64 md:h-96 lg:h-96">
      <Image
        alt={alt}
        src={src}
        layout="fill"
        className="w-full h-full object-cover cursor-pointer"
      />
    </div>
  );
}
