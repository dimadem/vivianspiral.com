import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { CiSquareMore } from "react-icons/ci";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import { BsInfoCircle } from "react-icons/bs";

//! performance data
import { performances } from "../public/data.js";
import { performancePages } from "../public/data.js";

//! bg images
import hoopDance_bg from "../public/images/Hoop_Dance/bg/bg_sq_rmbg.png";
import magicWand_bg from "../public/images/Magic_Wand/bg/bg_sq_rmbg.png";
import ledGlowShow_bg from "../public/images/LED_Glow_Show/bg/bg_sq_rmbg.png";
import aerialHoop_bg from "../public/images/Aerial_Hoop/bg/1_bg_rt_rmbg.png";
import sphereDance_bg from "../public/images/Sphere_Dance/bg/bg_sq_rmbg.png";
import firePerformance_bg from "../public/images/Fire_Performance/bg/4_bg_rt_rmbg.png";

export default function SliderScreen() {
  // hide description
  const [openDescription, setOpenDescription] = useState(true);
  const hide = openDescription ? "hidden" : "block";
  const bg = openDescription ? null : "bg-neutral bg-opacity-80";

  return (
    <>
      <NavBar>
        <div className="carousel h-full z-0 animate-fade-in-up">
          {/* 1 */}
          <div id="slide1" className={`${bg} slide-frame`}>
            <Image
              src={hoopDance_bg}
              alt="hoop_dance"
              priority
              className="slide-bgImage w-fit"
            />
            <h1 className="slide-title">{performances[0].header}</h1>

            <p
              className={`${hide} z-10 slide-description flex flex-col justify-center lg:justify-end`}
            >
              Illusion, acrobatics, and dance combine in a contemporary take on
              the classic hula hoop.
              <br />
              <br />
              Combining elements of classic circus, modern object manipulation,
              Native American hoop dance, and dervish-like spinning with her own
              fierce, joyful passion, Spiral&apos;s hoop dance is unlike any
              other.
            </p>

            {/* SHOW / HIDE Description */}
            <div className="flex flex-col items-center w-full p-4 z-10">
              <div className="flex flex-row w-full justify-evenly p-5">
                {openDescription ? (
                  <button onClick={() => setOpenDescription(false)}>
                    <BsInfoCircle size={32} />
                  </button>
                ) : (
                  <button onClick={() => setOpenDescription(true)}>
                    <BsArrowDownCircle size={32} />
                  </button>
                )}
                <Link href={performancePages[0].href}>
                  <CiSquareMore size={40} />
                </Link>
              </div>
              <h4 className="slide-footer">{performances[0].footer}</h4>
            </div>
            {/* Slide Navigation */}
            <div className="slide-navigation">
              <Link href="#slide6" className="btn-ghost">
                <FiChevronLeft size={32} />
              </Link>
              <Link href="#slide2" className="btn-ghost">
                <FiChevronRight size={32} />
              </Link>
            </div>
          </div>
          {/* 2 */}
          <div id="slide2" className={`${bg} slide-frame`}>
            <Image
              src={magicWand_bg}
              alt="magic_wand"
              priority
              className="slide-bgImage aspect-square"
            />
            <h1 className="slide-title">{performances[1].header}</h1>
            <p
              className={`${hide} z-10 slide-description flex flex-col justify-center lg:justify-end`}
            >
              Putting a modern twist on a magic trick from the turn of the
              century, this mesmerizing prop combines grace, elegance, illusion,
              and dance, leaving audiences perplexed and enchanted.
              <br />
              <br />
              One moment Spiral spins the wand like a pinwheel, the next moment
              it&apos;s floating over her palm in space, only to fly out around
              her body in impossible arcs that defy logic; the wand is truly
              magical.
            </p>
            {/* SHOW / HIDE Description */}
            <div className="flex flex-col items-center w-full p-4 z-10">
              <div className="flex flex-row w-full justify-evenly p-5">
                {openDescription ? (
                  <button onClick={() => setOpenDescription(false)}>
                    <BsInfoCircle size={32} />
                  </button>
                ) : (
                  <button onClick={() => setOpenDescription(true)}>
                    <BsArrowDownCircle size={32} />
                  </button>
                )}
                <Link href={performancePages[1].href}>
                  <CiSquareMore size={40} />
                </Link>
              </div>
              <h4 className="slide-footer"> {performances[1].footer}</h4>
            </div>
            {/* Slide Navigation */}
            <div className="slide-navigation">
              <Link href="#slide1" className="btn-ghost">
                <FiChevronLeft size={32} />
              </Link>
              <Link href="#slide3" className="btn-ghost">
                <FiChevronRight size={32} />
              </Link>
            </div>
          </div>
          {/* 3 */}
          <div id="slide3" className={`${bg} slide-frame`}>
            <Image
              src={ledGlowShow_bg}
              alt="led_glow_show"
              priority
              className="slide-bgImage aspect-square"
            />
            <h1 className="slide-title">{performances[2].header}</h1>
            <p
              className={`${hide} z-10 slide-description flex flex-col justify-center lg:justify-end`}
            >
              <br />
              <br />
              <br />
              <br />
              Amazingly bright rainbow lights in a dazzling array of intricate
              patterns, woven expertly around the body at lightning speed,
              delighting audiences of all ages. Guests are mesmerized by a light
              show fusing dance, acrobatics and technical showmanship.
              <br />
              <br />
              Stunning imagery shifts and changes to the beat of the music;
              displaying everything from vivid flames and dazzling patterns to
              the birthday girl&apos;s face or company logo.
              <br />
              <br />
              Spiral&apos;s LED Wand and Hula Hoops are fully programmable and
              customizable for bespoke performances with vibrant designs and
              photo-realistic graphics.
            </p>
            {/* SHOW / HIDE Description */}
            <div className="flex flex-col items-center w-full p-4 z-10">
              <div className="flex flex-row w-full justify-evenly p-5">
                {openDescription ? (
                  <button onClick={() => setOpenDescription(false)}>
                    <BsArrowUpCircle size={32} />
                  </button>
                ) : (
                  <button onClick={() => setOpenDescription(true)}>
                    <BsArrowDownCircle size={32} />
                  </button>
                )}
                <Link href={performancePages[2].href}>
                  <CiSquareMore size={40} />
                </Link>
              </div>
              <h4 className="slide-footer"> {performances[2].footer}</h4>
            </div>
            {/* Slide Navigation */}
            <div className="slide-navigation">
              <Link href="#slide2" className="btn-ghost">
                <FiChevronLeft size={32} />
              </Link>
              <Link href="#slide4" className="btn-ghost">
                <FiChevronRight size={32} />
              </Link>
            </div>
          </div>
          {/* 4 */}
          <div id="slide4" className={`${bg} slide-frame`}>
            <Image
              src={aerialHoop_bg}
              alt="aerial_hoop"
              priority
              className="slide-bgImage"
            />
            <h1 className="slide-title">{performances[3].header}</h1>
            <p
              className={`${hide} z-10 slide-description flex flex-col justify-center lg:justify-end`}
            >
              Strength and grace combine to create beautiful cirque-style
              performance in the air. With stunning presence, strength and
              flexibility, Spiral dances on a steel ring, aka Aerial Hoop or
              Lyra, elevated above the audience. Audiences are enchanted and
              amazed as her strong, spinning dance unfolds.
              <br />
              <br />
              Aerial performances embody the essential elements of circus:
              beauty and danger.
            </p>
            {/* SHOW / HIDE Description */}
            <div className="flex flex-col items-center w-full p-4 z-10">
              <div className="flex flex-row w-full justify-evenly p-5">
                {openDescription ? (
                  <button onClick={() => setOpenDescription(false)}>
                    <BsInfoCircle size={32} />
                  </button>
                ) : (
                  <button onClick={() => setOpenDescription(true)}>
                    <BsArrowDownCircle size={32} />
                  </button>
                )}
                <Link href={performancePages[3].href}>
                  <CiSquareMore size={40} />
                </Link>
              </div>
              <h4 className="slide-footer"> {performances[3].footer}</h4>
            </div>
            {/* Slide Navigation */}
            <div className="slide-navigation">
              <Link href="#slide3" className="btn-ghost">
                <FiChevronLeft size={32} />
              </Link>
              <Link href="#slide5" className="btn-ghost">
                <FiChevronRight size={32} />
              </Link>
            </div>
          </div>
          {/* 5 */}
          <div id="slide5" className={`${bg} slide-frame`}>
            <Image
              src={sphereDance_bg}
              alt="sphere_dance"
              priority
              className="slide-bgImage aspect-square"
            />
            <h1 className="slide-title">{performances[4].header}</h1>
            <p
              className={`${hide} z-10 slide-description flex flex-col justify-center lg:justify-end`}
            >
              The ball rolls across Spiral&apos;s body as if it&apos;s
              magnetized, leaving your guests breathless. One moment it seems to
              magically float, the next it becomes a high-powered dance partner.
              <br />
              <br />
              Moving the sphere all over the body and creating beautiful shapes,
              this unique act is infused with dance, hand balance, and rhythmic
              gymnastics.
            </p>
            {/* SHOW / HIDE Description */}
            <div className="flex flex-col items-center w-full p-4 z-10">
              <div className="flex flex-row w-full justify-evenly p-5">
                {openDescription ? (
                  <button onClick={() => setOpenDescription(false)}>
                    <BsInfoCircle size={32} />
                  </button>
                ) : (
                  <button onClick={() => setOpenDescription(true)}>
                    <BsArrowDownCircle size={32} />
                  </button>
                )}
                <Link href={performancePages[4].href}>
                  <CiSquareMore size={40} />
                </Link>
              </div>
              <h4 className="slide-footer"> {performances[4].footer}</h4>
            </div>
            {/* Slide Navigation */}
            <div className="slide-navigation">
              <Link href="#slide4" className="btn-ghost">
                <FiChevronLeft size={32} />
              </Link>
              <Link href="#slide6" className="btn-ghost">
                <FiChevronRight size={32} />
              </Link>
            </div>
          </div>
          {/* 6 */}
          <div id="slide6" className={`${bg} slide-frame`}>
            <Image
              src={firePerformance_bg}
              alt="fire_performance"
              priority
              className="slide-bgImage w-fit"
            />
            <h1 className="slide-title">{performances[5].header}</h1>
            <p
              className={`${hide} z-10 slide-description flex flex-col justify-center lg:justify-end`}
            >
              Fire; an element so primal, it arouses instant fascination. The
              element of danger combined with stunning skills creates
              high-impact performances that leave your guests in awe.
              <br />
              <br />
              Spiral has been dancing with Fire for over 15 years and is an
              expert performer of this mesmerizing, elemental art form.
              <br />
              <br />
              Delighting at the enchanting interplay of risk and technique, her
              fire performances are one of a kind.
            </p>
            {/* SHOW / HIDE Description */}
            <div className="flex flex-col items-center w-full p-4 z-10">
              <div className="flex flex-row w-full justify-evenly p-5">
                {openDescription ? (
                  <button onClick={() => setOpenDescription(false)}>
                    <BsInfoCircle size={32} />
                  </button>
                ) : (
                  <button onClick={() => setOpenDescription(true)}>
                    <BsArrowDownCircle size={32} />
                  </button>
                )}
                <Link href={performancePages[5].href}>
                  <CiSquareMore size={40} />
                </Link>
              </div>
              <h4 className="slide-footer"> {performances[5].footer}</h4>
            </div>
            {/* Slide Navigation */}
            <div className="slide-navigation">
              <Link href="#slide5" className="btn-ghost">
                <FiChevronLeft size={32} />
              </Link>
              <Link href="#slide1" className="btn-ghost">
                <FiChevronRight size={32} />
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </NavBar>
    </>
  );
}
