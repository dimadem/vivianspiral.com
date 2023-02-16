import NavBar from "@/components/NavBar.jsx";
import Footer from "@/components/Footer";
import { gallery } from "@/public/data";
import ImageFrame from "@/components/ImageFrame";
import { Suspense } from "react";
import Loading from "./loading";

export default function Images(params) {
  return (
    <>
      <NavBar>
        <div className="p-2 md:p-10 lg:p-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-3 lg:gap-5">
          <Suspense fallback={<Loading />}>
            {gallery.map((img, index) => (
              <ImageFrame src={img.url} alt={img.id} key={index} />
            ))}
          </Suspense>
        </div>
        <Footer />
      </NavBar>
    </>
  );
}
