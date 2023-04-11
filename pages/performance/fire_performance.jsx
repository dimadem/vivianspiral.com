import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { performances, actKit } from "@/public/data";
import { BsCloudDownload } from "react-icons/bs";
import Link from "next/link";

export default function fire_performance(params) {
  return (
    <NavBar>
      <div className="w-full h-fit p-2">
        <div className="w-full text-center lg:p-10 p-4">
          <h1 className="text-primary-focus">{performances[5].header}</h1>
          <p className="text-neutral-content normal-case">
            {performances[5].footer}
          </p>
        </div>
        <div className="carousel carousel-center rounded-box gap-5">
          {performances[5].images.map((image, index) => (
            <div key={index} className="carousel-item rounded-md">
              <Image
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
              Fire; an element so primal, it arouses instant fascination.
              Combining the element of danger with stunning skills, Spiral
              creates high-impact performances that will leave your guests in
              awe.
              <br />
              <br />
              With over 15 years of experience dancing with fire, Spiral is an
              expert performer of this mesmerizing, elemental art form.
              Delighting at the enchanting interplay of risk and technique, her
              fire performances are one of a kind.
              <br />
              <br />
              <Link href={"https://youtu.be/ltxjWgqRKDs"} target="_blank">
                <span className="text-neutral-content">
                  See Spiral perform at the European Juggling Convention Fire
                  Gala in Lublin, Poland.
                </span>
              </Link>
            </p>
          </div>
          <div className="bg-neutral-focus p-4 rounded-md">
            <h3 className="text-neutral-content text-center p-2">
              TECHNICAL INFORMATION
            </h3>
            <p className="text-primary-focus font-montagaText">
              Spiral performs with Fire Hoops, Wand, Candles, and Skirt. For
              Fire shows, relative darkness in the performance area will yield
              the most vibrant flames.
              <br />
              <br />
              Fire shows range from 3-17 minutes. Fire shows require a minimum
              of 3.5 x 3.5 x 3.5 <br />
              meters/10&apos;x10&apos;x10&apos; feet and a dedicated fire safety
              assistant. <br />
              Client is responsible for all required permits.
              <br />
              <br />
              Spiral is fully covered by professional liability insurance for
              all performances, including fire.
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
