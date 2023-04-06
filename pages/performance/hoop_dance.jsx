import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { performances, actKit } from "@/public/data";
import { BsCloudDownload } from "react-icons/bs";
import Link from "next/link";

export default function hoop_dance(params) {
  return (
    <NavBar>
      <div className="w-full h-fit p-2">
        <div className="w-full text-center p-4 lg:p-10">
          <h1 className="text-primary-focus">{performances[0].header}</h1>
          <h5 className="text-neutral-content">{performances[0].footer}</h5>
        </div>
        <div className="carousel carousel-center rounded-box gap-5">
          {performances[0].images.map((image, index) => (
            <div key={index} className="carousel-item rounded-md">
              <Image
                src={image.url}
                alt="hoop-dance-image"
                width={image.width / 2}
                height={image.height / 2}
              />
            </div>
          ))}
        </div>
        <div className="md:p-10 lg:p-20 grid sm:grid-cols-2 grid-cols-1 gap-3 md:gap-3 lg:gap-5">
          <div className="bg-neutral-focus p-4 rounded-md">
            <h3 className="text-neutral-content text-center p-2">
              DESCRIPTION
            </h3>
            <p className="text-primary-focus font-montagaText">
              Illusion, acrobatics, and dance combine in a contemporary take on
              the classic hula hoop.
              <br />
              <br />
              Combining elements of classic circus, modern object manipulation,
              Native American hoop dance, and dervish- like spinning with her
              own fierce, joyful passion, Spiral&apos;s hoop dance is unlike any
              other.
              <br />
              <br />
              Beginning the act with her signature, powerful fusion of skirt
              dance and hoop manipulation, Spiral conjures a mystical, alluring
              energy that draws the audience into her magical world.
              <br />
              <br />
              The release of her billowing skirt allows for an engaging,
              high-energy display of contemporary hoop dance technique;
              integrating precision, power, and musicality to create a truly
              unique, moving performance.
            </p>
          </div>
          <div className="bg-neutral-focus p-4 rounded-md">
            <h3 className="text-neutral-content text-center p-2">
              TECHNICAL INFORMATION
            </h3>
            <p className="text-primary-focus font-montagaText">
              <span className="text-neutral-content">&apos;Cycles&apos;</span>{" "}
              Contemporary Hoop Dance Act- 5:36 minutes &apos;Ignition&apos; LED
              Hoop Dance Act- 4:43 minutes
              <br />
              <br />
              Hoop Dance can be combined with other acts to create longer shows
              between 10-25 minutes.
              <br />
              <br />
              <span className="text-neutral-content">
                Hoop Dance Stage acts require
              </span>{" "}
              a minimum of 3.5 x 3.5 x 3.5 meters/10&apos;x10&apos;x10&apos;
              feet. Band or DJ accompaniment and Walkabout performances{" "}
              <span className="text-neutral-content">
                can occur in smaller spaces.
              </span>
            </p>
          </div>
        </div>
        {/* act kit */}
        <div className="flex flex-row w-full justify-center">
          <div className="tooltip tooltip-bottom" data-tip="download Act Kit">
            <Link
              href={actKit[0].href}
              target="_blank"
              className="btn btn-ghost"
            >
              <BsCloudDownload size={25} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </NavBar>
  );
}
