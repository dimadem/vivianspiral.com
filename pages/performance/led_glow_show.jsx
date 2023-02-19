import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { performances } from "@/public/data";

export default function led_glow_show(params) {
  return (
    <NavBar>
      <div className="w-full h-fit p-2">
        <h1 className="w-full text-center p-4 lg:p-10 text-primary-focus">
          {performances[2].header}
        </h1>
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
            <h3 className="text-neutral-content text-center lg:text-right p-2">
              DESCRIPTION
            </h3>
            <p className="text-primary-focus font-montagaText">
              Amazingly bright rainbow lights in a dazzling array of intricate
              patterns, woven expertly around the body at lightning speed,
              delighting audiences of all ages. Guests are mesmerized by a light
              show fusing dance, acrobatics and technical showmanship in a range
              of props.
              <br />
              <br />
              Spiral's LED Wand and Hula Hoops are fully programmable and
              customizable, with vibrant designs and photo-realistic graphics.
              Stunning imagery shifts and changes to the beat of the music;
              displaying everything from vivid flames and dazzling patterns to
              the birthday girl's face or company logo.
            </p>
          </div>
          <div className="bg-neutral-focus p-4 rounded-md">
            <h3 className="text-neutral-content text-center lg:text-right p-2">
              TECHNICAL INFORMATION
            </h3>
            <p className="text-primary-focus font-montagaText">
              Spiral performs LED versions of wand, hoops and atmospheric
              contact juggling.
              <br />
              <br />
              LED Shows range from 3-15 minute stage sets to 30 minute sets as
              ambient walk-around entertainment.
              <br />
              <br />
              'Spellcasting' LED Wand Act- 3:00 minutes 'Ignition' LED Hoop
              Dance Act- 4:43 minutes
              <br />
              <br />
              LED Stage acts require a minimum of 3.5 x 3.5 x 3.5
              meters/10'x10'x10' feet.
              <br />
              <br />
              For LED performance, relative darkness in the staging area will
              yield the most vibrant light show.
              <br />
              <br />
              Spiral can also provide expert LED jugglers, poi, staff, and hoop
              artists for a full LED stage show.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </NavBar>
  );
}
