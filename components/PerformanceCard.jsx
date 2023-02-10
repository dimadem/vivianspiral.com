import {
  BsArrowDownCircle,
  BsArrowUpCircle,
  BsCollection,
} from "react-icons/bs";
import { useState } from "react";

export default function PerformanceCard({
  index,
  header,
  description,
  footer,
}) {
  // hide description
  const [openDescription, setOpenDescription] = useState(true);
  const hide = openDescription ? "hidden" : "block";

  return (
    <div
      id={index}
      className="flex flex-col h-full items-center justify-between pt-5 pb-5 px-2"
    >
      <h1>{header}</h1>
      <p
        className={`${hide} font-montagaText text-xl text-justify animate-fade-in-up w-[75%] sm:w-[90%]`}
      >
        {description}
      </p>
      <div className="flex flex-col items-center">
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
        <h4 className="text-center font-extralight pb-5">{footer}</h4>
      </div>
    </div>
  );
}
