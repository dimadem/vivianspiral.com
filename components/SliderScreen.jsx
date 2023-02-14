import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {
  BsArrowDownCircle,
  BsArrowUpCircle,
  BsCollection,
} from "react-icons/bs";

//! performance data
import { performances } from "../public/data.js";

//! bg images
import hoopDance_bg from "@/public/images/Hoop_Dance/bg/1_bg_sq_rmbg.png";
import magicWand_bg from "@/public/images/Magic_Wand/bg/3_bg_sq_rmbg.png";
import ledGlowShow_bg from "@/public/images/LED_Glow_Show/bg/3_bg_sq_rmbg.png";
import aerialHoop_bg from "@/public/images/Aerial_Hoop/bg/1_bg_sq_rmbg.png";
import sphereDance_bg from "@/public/images/Sphere_Dance/bg/4_bg_sq_rmbg.png";
import firePerformance_bg from "@/public/images/Fire_Performance/bg/4_bg_sq_rmbg.png";

export default function SliderScreen() {
  // hide description
  const [openDescription, setOpenDescription] = useState(true);
  const hide = openDescription ? "hidden" : "block";

  return (
    <>
      <NavBar>
        <div className="carousel w-full h-screen pt-2 z-0">
          {/* 1 */}
          <div
            id="slide1"
            className="relative carousel-item w-full flex flex-col items-center justify-between overflow-hidden"
          >
            <Image
              src={hoopDance_bg}
              alt="Hoop Dance"
              priority
              className="absolute z-0 aspect-square min-w-fit lg:w-fit md:w-fit h-screen transform -translate-y-1/2 top-1/2"
            />
            <h1 className="z-10 text-focus-200 p-2">
              {performances[0].header}
            </h1>
            <p
              className={`${hide} z-10 font-montagaText text-xl text-justify animate-fade-in-up w-[75%] lg:w-[70%] p-1 bg-neutral bg-opacity-40 h-full flex flex-col justify-end`}
            >
              {performances[0].description}
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
                <button>
                  <BsCollection size={32} />
                </button>
              </div>
              <h4 className="text-center font-extralight pb-5 text-focus-200">
                {performances[0].footer}
              </h4>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <Link href="#slide4" className="btn-ghost">
                ❮
              </Link>
              <Link href="#slide2" className="btn-ghost">
                ❯
              </Link>
            </div>
          </div>
          {/* 2 */}
          <div
            id="slide2"
            className="carousel-item relative w-full flex flex-col items-center justify-between overflow-hidden"
          >
            <Image
              src={magicWand_bg}
              alt="Magic_Wand"
              // style={{ height: "100%" }}
              className="absolute z-0 aspect-square min-w-fit lg:w-fit md:w-fit h-screen transform -translate-y-1/2 top-1/2"
            />
            <h1 className="z-10 text-focus-200 p-2">
              {performances[1].header}
            </h1>
            <p
              className={`${hide} z-10 font-montagaText text-xl text-justify animate-fade-in-up w-[75%] lg:w-[70%] p-1 bg-neutral bg-opacity-40 h-full flex flex-col justify-end`}
            >
              {performances[1].description}
            </p>
            {/* SHOW / HIDE Description */}
            <div className="z-10 flex flex-col items-center w-full p-4">
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
                <button>
                  <BsCollection size={32} />
                </button>
              </div>
              <h4 className="text-center font-extralight pb-5 text-focus-200">
                {performances[1].footer}
              </h4>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <Link href="#slide1" className="btn-ghost">
                ❮
              </Link>
              <Link href="#slide3" className="btn-ghost">
                ❯
              </Link>
            </div>
          </div>
          {/* 3 */}
          <div
            id="slide3"
            className="carousel-item relative w-full flex flex-col items-center justify-between overflow-hidden"
          >
            <Image
              src={ledGlowShow_bg}
              alt="Led Glow Show"
              // style={{ height: "100%" }}
              className="absolute z-0 aspect-square min-w-fit lg:w-fit md:w-fit h-screen transform -translate-y-1/2 top-1/2"
            />
            <h1 className="z-10  text-focus-200 p-2">
              {performances[2].header}
            </h1>
            <p
              className={`${hide} z-10 font-montagaText text-xl text-justify animate-fade-in-up w-[75%] lg:w-[70%] p-1 bg-neutral bg-opacity-40 h-full flex flex-col justify-end`}
            >
              {performances[2].description}
            </p>
            {/* SHOW / HIDE Description */}
            <div className="z-10 flex flex-col items-center w-full p-4">
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
                <button>
                  <BsCollection size={32} />
                </button>
              </div>
              <h4 className="text-center font-extralight pb-5 text-focus-200">
                {performances[2].footer}
              </h4>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <Link href="#slide2" className="btn-ghost">
                ❮
              </Link>
              <Link href="#slide4" className="btn-ghost">
                ❯
              </Link>
            </div>
          </div>
          {/* 4 */}
          <div
            id="slide4"
            className="carousel-item relative w-full flex flex-col items-center justify-between overflow-hidden"
          >
            <Image
              src={aerialHoop_bg}
              alt="Aerial Hoop"
              // style={{ height: "100%" }}
              className="absolute z-0 aspect-square min-w-fit lg:w-fit md:w-fit h-screen transform -translate-y-1/2 top-1/2"
            />
            <h1 className="z-10 text-focus-200 p-2">
              {performances[3].header}
            </h1>
            <p
              className={`${hide} z-10 font-montagaText text-xl text-justify animate-fade-in-up w-[75%] lg:w-[70%] p-1 bg-neutral bg-opacity-40 h-full flex flex-col justify-end`}
            >
              {performances[3].description}
            </p>
            {/* SHOW / HIDE Description */}
            <div className="z-10 flex flex-col items-center w-full p-4">
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
                <button>
                  <BsCollection size={32} />
                </button>
              </div>
              <h4 className="text-center font-extralight pb-5 text-focus-200">
                {performances[3].footer}
              </h4>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <Link href="#slide3" className="btn-ghost">
                ❮
              </Link>
              <Link href="#slide5" className="btn-ghost">
                ❯
              </Link>
            </div>
          </div>
          {/* 5 */}
          <div
            id="slide5"
            className="carousel-item relative w-full flex flex-col items-center justify-between overflow-hidden"
          >
            <Image
              src={sphereDance_bg}
              alt="Sphere Dance"
              // style={{ height: "100%" }}
              className="absolute z-0 aspect-square min-w-fit lg:w-fit md:w-fit h-screen transform -translate-y-1/2 top-1/2"
            />
            <h1 className="z-10 text-focus-200 p-2">
              {performances[4].header}
            </h1>
            <p
              className={`${hide} z-10 font-montagaText text-xl text-justify animate-fade-in-up w-[75%] lg:w-[70%] p-1 bg-neutral bg-opacity-40 h-full flex flex-col justify-end`}
            >
              {performances[4].description}
            </p>
            {/* SHOW / HIDE Description */}
            <div className="z-10 flex flex-col items-center w-full p-4">
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
                <button>
                  <BsCollection size={32} />
                </button>
              </div>
              <h4 className="text-center font-extralight pb-5 text-focus-200">
                {performances[4].footer}
              </h4>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <Link href="#slide4" className="btn-ghost">
                ❮
              </Link>
              <Link href="#slide6" className="btn-ghost">
                ❯
              </Link>
            </div>
          </div>
          {/* 6 */}
          <div
            id="slide6"
            className="carousel-item relative w-full flex flex-col items-center justify-between overflow-hidden"
          >
            <Image
              src={firePerformance_bg}
              alt="Fire Performance"
              // style={{ height: "100%" }}
              className="absolute z-0 aspect-square min-w-fit lg:w-fit md:w-fit h-screen transform -translate-y-1/2 top-1/2"
            />
            <h1 className="z-10 text-focus-200 p-2">
              {performances[5].header}
            </h1>
            <p
              className={`${hide} z-10 font-montagaText text-xl text-justify animate-fade-in-up w-[75%] lg:w-[70%] p-1 bg-neutral bg-opacity-40 h-full flex flex-col justify-end`}
            >
              {performances[5].description}
            </p>
            {/* SHOW / HIDE Description */}
            <div className="z-10 flex flex-col items-center w-full p-4">
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
                <button>
                  <BsCollection size={32} />
                </button>
              </div>
              <h4 className="text-center font-extralight pb-5 text-focus-200">
                {performances[5].footer}
              </h4>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <Link href="#slide5" className="btn-ghost">
                ❮
              </Link>
              <Link href="#slide1" className="btn-ghost">
                ❯
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-screen">socials</div>
        <Footer />
      </NavBar>
    </>
  );
}
