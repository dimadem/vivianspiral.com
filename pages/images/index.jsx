import NavBar from "@/components/NavBar.jsx";
import Footer from "@/components/Footer";
import { gallery } from "@/public/data";
import { useState } from "react";
import ImageFrame from "@/components/ImageFrame";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Images() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavBar>
        <div className="p-2 md:p-10 lg:p-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-3 lg:gap-5">
          {gallery.map((img, index) => (
            <ImageFrame
              priority
              setOnClick={() => setOpen(true)}
              src={img.src}
              alt={img.id}
              key={index}
            />
          ))}
          <Lightbox open={open} close={() => setOpen(false)} slides={gallery} />
        </div>
        <Footer />
      </NavBar>
    </>
  );
}
