import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { performances, actKit } from "@/public/data";
import { BsCloudDownload } from "react-icons/bs";
import Link from "next/link";

export default function magic_wand(params) {
  return (
    <NavBar>
      <div className="w-full h-fit p-2">
        <div className="w-full text-center lg:p-10 p-4">
          <h1 className="text-primary-focus">{performances[1].header}</h1>
          <h5 className="text-neutral-content">{performances[1].footer}</h5>
        </div>
        <div className="carousel carousel-center rounded-box">
          {performances[1].images.map((image, index) => (
            <div key={index} className="carousel-item rounded-md">
              <Image
                priority
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
            <h3 className="text-neutral-content text-center p-2">
              DESCRIPTION
            </h3>
            <p className="text-primary-focus font-montagaText">
              The LED light version of the wand is fully programmable with
              vibrant, customizable graphics. Stunning imagery shifts and
              changes to the beat of the music; displaying everything from
              realistic flames and dazzling geometric patterns to the birthday
              girl's face or company logo.
              <br />
              <br />
              The magic wand works well as a high-impact stage act, as well as
              ambient or walkabout entertainment.
            </p>
          </div>
          <div className="bg-neutral-focus p-4 rounded-md">
            <h3 className="text-neutral-content text-center p-2">
              TECHNICAL INFORMATION
            </h3>
            <p className="text-primary-focus font-montagaText">
              LED light, Holographic daytime, and Fire versions of this prop are
              available. For LED and Fire wand{" "}
              <span className="text-neutral-content">performances,</span>{" "}
              relative darkness in the performance area will yield the most
              vibrant light show.
              <br />
              <br />
              &apos;Spellcasting&apos; LED Wand Act:{" "}
              <span className="text-neutral-content">4:24 minutes</span>
              <br />
              <br />
              <span className="text-neutral-content">
                {" "}
                Magic Wand can be combined with other acts to create longer
                shows between 10-25 minutes.
              </span>
              <br />
              <br />
              Stage requirements: minimum 3.5mx3.5mx3m Ambient performance can
              be accommodated to slightly smaller spaces.
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
