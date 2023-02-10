import {
  BsCaretLeft,
  BsCaretRight,
  BsArrowDownCircle,
  BsArrowUpCircle,
  BsCollection,
} from "react-icons/bs";
import { useState } from "react";

export default function PerformanceCard({ header, body, footer }) {
  // hide description
  const [openDescription, setOpenDescription] = useState(true);
  const hide = openDescription ? "hidden" : "block";

  return (
    <div className="flex flex-col w-screen h-full justify-start items-center pt-5 pb-20 space-y-8 snap-center">
      <h1>{header}</h1>
      <div className="flex flex-row w-full h-full">
        <button className="">
          <BsCaretLeft size={40} />
        </button>
        <div className="flex flex-col w-full h-full justify-end">
          <p
            className={`${hide} font-montagaText text-xl text-justify animate-fade-in-up`}
          >
            {body}
          </p>
        </div>
        <button>
          <BsCaretRight size={40} />
        </button>
      </div>
      <div className="flex flex-row w-full items-start justify-evenly">
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
      <div className="flex flex-col w-full h-fit items-center justify-center">
        <h4 className="text-center font-extralight">{footer}</h4>
      </div>
    </div>
  );
}
