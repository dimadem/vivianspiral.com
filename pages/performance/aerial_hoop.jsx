import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { performances } from "@/public/data";

export default function aerial_hoop(params) {
  return (
    <NavBar>
      <div className="w-full h-fit p-2">
        <h1 className="w-full text-center p-4 lg:p-10 text-primary-focus">
          {performances[3].header}
        </h1>
        <div className="carousel carousel-center rounded-box gap-5">
          {performances[3].images.map((image, index) => (
            <div key={index} className="carousel-item rounded-md">
              <Image
                src={image.url}
                alt="aerial-hoop-image"
                width={image.width / 2}
                height={image.height / 2}
              />
            </div>
          ))}
        </div>

        <div className="md:p-10 lg:p-20 grid sm:grid-cols-2 grid-cols-1 gap-3 md:gap-3 lg:gap-5">
          <div className="bg-neutral-focus p-4 rounded-md">
            <h3 className="text-neutral-content text-center lg:text-right p-2">
              DESCRIPTION
            </h3>
            <p className="text-primary-focus font-montagaText">
              Strength and grace combine to create beautiful cirque-style
              performance in the air. With stunning presence, strength and
              flexibility, Spiral dances on a steel ring, aka Aerial Hoop or
              Lyra, elevated above the audience.
            </p>
            <br />
            <br />
            <p className="text-primary-focus font-montagaText">
              Aerial performances embody the essential elements of circus:
              beauty and danger. Audiences are enchanted and amazed as her
              sensual, spinning dance unfolds.
            </p>
          </div>
          <div className="bg-neutral-focus p-4 rounded-md">
            <h3 className="text-neutral-content text-center lg:text-right p-2">
              TECHNICAL INFORMATION
            </h3>
            <p className="text-primary-focus font-montagaText">
              Aerial hoop requires a minimum of 4.5 meters/14 feet ceiling
              height and 3m/10 feet clear space underneath. Some lower heights
              can be accommodated for ambient aerial performance.
            </p>
            <br />
            <br />
            <p className="text-primary-focus font-montagaText">
              Please contact for specific rigging questions.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </NavBar>
  );
}
