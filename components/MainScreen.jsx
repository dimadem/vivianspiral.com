import Header from "./Header";
import Footer from "./Footer";
import PerformanceCard from "./PerformanceCard";

export default function MainScreen() {
  return (
    <div className="flex flex-col w-full h-full animate-fade-in-down">
      <Header />

      <div className="flex flex-col w-screen">
        <PerformanceCard />
      </div>
      <Footer />
    </div>
  );
}
