import Header from "./Header";
import Footer from "./Footer";
import PerformanceCard from "./PerformanceCard";

export default function MainScreen() {
  return (
    <main>
      <Header />
      <div className="container">
        performance slider
        <PerformanceCard />
      </div>
      <Footer />
    </main>
  );
}
