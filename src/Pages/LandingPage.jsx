import { useEffect, useState } from "react";
import { RiArrowUpDoubleLine } from "react-icons/ri";

import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Component/Navbar";
import HeroSection from "../Component/HeroSection";
import WhyChoose from "../Component/WhyChoose";
import Features from "../Component/Features";
import Transform from "../Component/Transform";
import Footer from "../Component/Footer";
const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    AOS.init({
      duration: 1000,
      once: true,
    });
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className=" ">
      <Navbar />
      <HeroSection />
      <WhyChoose />
      <Features />
      <Transform />
      <Footer />
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#ffffff] text-[#000000] px-4 py-4 rounded-full shadow-lg hover:bg-[#000000] hover:text-white transition-all duration-300 animate-bounce hover:animate-none"
        >
          <RiArrowUpDoubleLine className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default LandingPage;
