import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { performances, actKit } from "@/public/data";
import { BsCloudDownload } from "react-icons/bs";
import Link from "next/link";

export default function led_glow_show(params) {
  return (
    <NavBar>
      <div className="w-full h-fit p-2">
        <div className="w-full text-center lg:p-10 p-4">
          <h1 className="text-primary-focus">{performances[2].header}</h1>
          <h4 className="text-neutral-content normal-case">
            {performances[2].footer}
          </h4>
        </div>
        <div className="carousel carousel-center rounded-box gap-5">
          {performances[2].images.map((image, index) => (
            <div key={index} className="carousel-item rounded-md">
              <Image
                priority
                src={image.url}
                alt="fire-performance-image"
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
              Amazingly bright rainbow lights in a dazzling array of intricate
              patterns, woven expertly around the body at lightning speed,
              delighting audiences of all ages. Guests are mesmerized by a light
              show fusing dance, acrobatics,
              <span className="text-neutral-content">
                {" "}
                musicality, and technical showmanship presenting a powerful
                display of dazzling lights in a range of props.
              </span>
              <br />
              <br />
              Spiral&apos;s LED Wand and Hula Hoops are fully programmable and
              customizable,
              <span className="text-neutral-content">
                {" "}
                able to create truly unique, bespoke performances using vibrant
                designs and photo-realistic graphics.
              </span>
              <br />
              <br />
              Stunning imagery shifts and changes to the beat of the music;
              displaying everything from vivid flames and dazzling patterns to
              the birthday girl&apos;s face or company logo.
            </p>
          </div>
          <div className="bg-neutral-focus p-4 rounded-md">
            <h3 className="text-neutral-content text-center p-2">
              TECHNICAL INFORMATION
            </h3>
            <p className="text-primary-focus font-montagaText">
              <span className="text-neutral-content">
                {" "}
                Spiral performs programmable LED versions of Wand and Hoops, as
                well as atmospheric LED contact juggling. For LED performance,
                relative darkness in the staging area will yield the most
                vibrant light show.
              </span>
              <br />
              <br />
              <span className="text-neutral-content">
                {" "}
                &apos;Spellcasting&apos; LED Wand Act- 4:24 minutes
              </span>{" "}
              <br />
              &apos;Ignition&apos; LED Hoop Dance Act- 4:43 minutes
              <br />
              <br />
              <span className="text-neutral-content">
                LED Glow Shows combine different skills for performances ranging
                from 10-20 minutes. Ambient, walk-around entertainment sets up
                to 20 minutes.
              </span>
              <br />
              <br />
              <span className="text-neutral-content">
                {" "}
                LED Stage acts require a minimum of 3.5 x 3.5 x 3.5
                meters/10&apos;x10&apos;x10&apos; feet.
              </span>
              <br />
              Ambient performance can occur in smaller spaces.
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
