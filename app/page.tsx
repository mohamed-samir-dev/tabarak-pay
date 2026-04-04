import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsCards from "./components/StatsCards";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-8 pt-24 pb-16">
        <section id="home"><HeroSection /></section>
        <StatsCards />
        <section id="features"><FeaturesSection /></section>
      </main>
      <Footer />
    </>
  );
}
