import Header from "./Header";
import Footer from "./Footer";
import PerformanceCard from "./PerformanceCard";
import { performances } from "../public/performances.js";

export default function MainScreen() {
  return (
    <>
      <div className="relative z-30 flex flex-col w-full h-full items-start animate-fade-in-down">
        <div className="top-0 w-screen h-screen snap-start">
          <Header />
          <div className="relative flex flex-row w-fit h-[820px] md:h-[760px] lg:h-[760px] p-2 overflow-x-scroll overflow-hidden snap-x">
            {performances.map((performance) => (
              <PerformanceCard
                header={performance.header}
                body={performance.description}
                footer={performance.footer}
              />
            ))}
          </div>
        </div>
        <div className="w-screen h-screen">
          <div className="flex flex-col flex-wrap  text-3xl text-center">
            INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM
            FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK
            YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE
            INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM
            FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK
            YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE
            INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM
            FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK
            YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE
            INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM
            FACEBOOK YOUTUBE INSTAGRAM FACEBOOK YOUTUBE INSTAGRAM FACEBOOK
            YOUTUBE INSTAGRAM FACEBOOK YOUTUBE
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
