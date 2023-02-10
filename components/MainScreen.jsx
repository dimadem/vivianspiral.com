import Header from "./Header";
import Footer from "./Footer";
import PerformanceCard from "./PerformanceCard";
import { performances } from "../public/performances.js";

export default function MainScreen() {
  return (
    <>
      <div className="z-30 flex flex-col w-full h-full items-start animate-fade-in-down snap-y snap-mandatory overflow-scroll">
        <div className="top-0 w-screen h-screen snap-start">
          <Header />
          <div className="flex flex-col snap-x w-full sm:h-[780px] h-96 p-2">
            <PerformanceCard
              header={performances[0].header}
              body={performances[0].description}
              footer={performances[0].footer}
            />
          </div>
        </div>
        <div className="w-screen h-screen snap-start">
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
