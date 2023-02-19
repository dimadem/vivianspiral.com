import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { performances } from "@/public/data";

export default function fire_performance(params) {
  return (
    <NavBar>
      <div className="w-full h-fit p-2">
        <h1 className="w-full text-center p-4 lg:p-10 text-primary-focus">
          {performances[5].header}
        </h1>
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
            <h3 className="text-neutral-content text-center lg:text-right p-2">
              DESCRIPTION
            </h3>
            <p className="text-primary-focus font-montagaText">
              Fire; an element so primal, it arouses instant fascination. The
              element of danger combined with stunning skills creates
              high-impact performances that leave your guests in awe. <br />
              <br />
              Spiral has been dancing with Fire for over 15 years and is an
              expert performer of this mesmerizing, elemental art form.
              Delighting at the enchanting interplay of risk and technique, her
              fire performances are one of a kind. <br />
              <br />
              See Spiral perform at the European Juggling Convention Fire Gala
              in Lublin, Poland.
            </p>
          </div>
          <div className="bg-neutral-focus p-4 rounded-md">
            <h3 className="text-neutral-content text-center lg:text-right p-2">
              TECHNICAL INFORMATION
            </h3>
            <p className="text-primary-focus font-montagaText">
              Spiral performs with Fire hoops, wand, candles, and skirt.
              <br />
              <br />
              Spiral Circus Arts can also provide performers in a range of other
              fire arts: poi, staff, jugglers, and fans.
              <br />
              <br />
              Solo fire shows range from 3-15 minutes. Duo and Group acts up to
              45 minutes. Fire shows require a minimum of 3.5 x 3.5 x 3.5
              meters/10'x10'x10' feet.
              <br />
              <br />
              For Fire shows, relative darkness in the performance area will
              yield the most vibrant flames.
              <br />
              <br />
              Spiral is fully covered by professional libility insurance for all
              performances, including fire.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </NavBar>
  );
}
