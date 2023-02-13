import { performances } from "../../public/data.js";
import Image from "next/image";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import NavBar from "@/components/NavBar.jsx";
import Footer from "@/components/Footer";

export default function Images(params) {
  return (
    <>
      <NavBar>
        <div className="h-screen w-full">
          {performances.map((performance, index) => (
            <div tabIndex={index} className="collapse group">
              <div className="collapse-title font-spectralHeader text-xl">
                <div className="flex flex-row justify-between">
                  {performance.header}
                  <HiOutlineArrowCircleDown />
                </div>
              </div>
              <div className="collapse-content group-focus:text-secondary-content justify-center">
                {/* CAROUSEL */}
                <div className="carousel carousel-center p-4 space-x-4 rounded-box">
                  {performance.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative carousel-item h-fit w-fit"
                    >
                      <Image
                        src={image.url}
                        alt={`image + ${index}`}
                        width="50%"
                        height="50%"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* //todo ADD FOOTER */}
        {/* <Footer /> */}
      </NavBar>
    </>
  );
}
