import PerformanceCard from "./PerformanceCard";
import { performances } from "../public/performances.js";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import { Carousel } from "flowbite-react";
import Header from "./Header";

export default function SliderScreen() {
  return (
    <>
      <Header />
      <div className="w-screen  h-[760px]">
        <Carousel
          leftControl={<BsCaretLeft size={40} />}
          rightControl={<BsCaretRight size={40} />}
          slideInterval={10000}
          indicators={false}
        >
          {performances.map((performance, index) => (
            <PerformanceCard
              id={index}
              header={performance.header}
              description={performance.description}
              footer={performance.footer}
              image={performance.image}
            />
          ))}
        </Carousel>
      </div>
      <div className="w-screen h-screen">
        <div className="flex flex-col flex-wrap  text-3xl text-center">
          INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM
          FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE
          INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM
          FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE
          INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM
          FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE
          INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM
          FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE
          INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM
          FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE
          INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE
        </div>
      </div>
    </>
  );
}
