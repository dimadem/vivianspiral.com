import PerformanceCard from "./PerformanceCard";
import { performances } from "../public/data.js";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function SliderScreen() {
  return (
    <>
      <NavBar>
        <div className="carousel w-full h-screen animate-fade-in-down">
          {performances.map((performance, index) => (
            <PerformanceCard
              id={index}
              header={performance.header}
              description={performance.description}
              footer={performance.footer}
              background={performance.background}
            />
          ))}
        </div>
        <Footer />
      </NavBar>
    </>
  );
}
