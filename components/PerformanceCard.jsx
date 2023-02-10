import {
  BsCaretLeft,
  BsCaretRight,
  BsArrowDownCircle,
  BsArrowUpCircle,
  BsCollection,
} from "react-icons/bs";
import { useState } from "react";

export default function PerformanceCard({ header, body, footer }) {
  const [openDescription, setOpenDescription] = useState(false);
  return (
    <div className="flex flex-col justify-around items-center pt-5 pb-5 space-y-8">
      <h1>{header}</h1>
      <div className="flex flex-row justify-between w-full">
        <button className="">
          <BsCaretLeft size={40} />
        </button>
        <p className="flex font-montagaText sm:h-[470px] h-96 items-end w-full text-2xl text-justify snap-y overflow-scroll">
          {body}
        </p>
        <button>
          <BsCaretRight size={40} />
        </button>
      </div>
      <div className="flex flex-row w-full h-full items-start justify-evenly">
        {openDescription ? (
          <button>
            <BsArrowDownCircle size={32} />
          </button>
        ) : (
          <button>
            <BsArrowUpCircle size={32} />
          </button>
        )}
        <button>
          <BsCollection size={32} />
        </button>
      </div>
      <div className="flex flex-col w-full items-center justify-start">
        <h4 className="text-center font-extralight pb-20">{footer}</h4>
      </div>
    </div>
  );
}
