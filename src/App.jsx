import "./App.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import StatisticSection from "./components/StatisticSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatisticSection />
      <About />
    </>
  );
}

export default App;
