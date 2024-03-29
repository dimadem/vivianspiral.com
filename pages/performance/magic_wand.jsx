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
          <p className="text-neutral-content normal-case">
            {performances[1].footer}
          </p>
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
              Putting a modern twist on a magic trick from the turn of the
              century, this mesmerizing prop combines grace, elegance, illusion,
              and dance, leaving audiences perplexed and enchanted.
              <br />
              <br />
              The wand is truly magical; one moment Spiral spins it like a
              pinwheel, the next moment it&apos;s floating over her palm in
              space, only to fly out around her body in impossible arcs that
              defy logic.
              <br />
              <br />
              The LED light version of the wand is fully programmable with
              vibrant, customizable graphics. Stunning imagery shifts and
              changes to the beat of the music; displaying everything from
              realistic flames and dazzling geometric patterns to the birthday
              girl&apos;s face or company logo.
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
              available.
              <br />
              For LED and Fire wand performances, relative darkness in the
              performance area will yield the most vibrant light show.
              <br />
              <br />
              &apos;Spellcasting&apos; LED Wand Act: 4:24 minutes
              <br />
              <br />
              Magic Wand can be combined with other acts to create longer shows
              between 10-25 minutes.
              <br />
              <br />
              Stage requirements: minimum 3.5mx3.5mx3m
              <br />
              Ambient performance can be accommodated to slightly smaller
              spaces.
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
