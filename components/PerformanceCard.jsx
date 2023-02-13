import {
  BsArrowDownCircle,
  BsArrowUpCircle,
  BsCollection,
  BsArrowLeft,
} from "react-icons/bs";
import { useState } from "react";

export default function PerformanceCard({ id, header, description, footer }) {
  // hide description
  const [openDescription, setOpenDescription] = useState(true);
  const hide = openDescription ? "hidden" : "block";

  return (
    <div
      id={`slide${id}`}
      className="carousel-item w-screen h-full flex flex-col items-center justify-between pt-5 pb-5"
    >
      <h1 className="text-focus-200">{header}</h1>
      <p
        className={`${hide} font-montagaText text-xl text-justify animate-fade-in-up w-[75%] sm:w-[90%] p-1`}
      >
        {description}
      </p>
      {/* SHOW / HIDE Description */}
      <div className="flex flex-col items-center w-full p-4">
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
          {footer}
        </h4>
      </div>
      {/* <Image src={performance.image} layout="fill" objectFit="cover" /> */}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
        {/* //TODO Подумать как сделать прибавление на 1 и убавление на 1 */}
        <a href={`#slide${id}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${id}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
}
