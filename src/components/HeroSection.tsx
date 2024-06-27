import React, { useEffect } from "react";
import Button from "./Button";
import { LuPhone } from "react-icons/lu";
import { IoSparklesSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import hero_bkg from "../assets/hero_bkg2.jpg";
import video from "../assets/school_bkg_video.mp4";
import AOS from "aos";
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const handleCall = () => {
    window.location.href = `tel:+919415679969`;
    
  };
  return (
    <section className="relative text-gray-600 flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 w-full min-h-[90vh] bg-[#0000003d] flex px-5 py-24 flex-col items-center">
        <div className="lg:flex-grow md:max-w-2/3 md:w-2/3 flex flex-col mb-16 md:mb-0 items-center text-center">
          <h1 data-aos="fade-up" className="title-font font-vidaloka sm:text-5xl text-5xl mb-4 font-medium text-white">
            Discover, Learn, Grow: Where Every Moment is a Lesson
          </h1>
          <p className="mb-8 font-martel leading-relaxed text-white">
            Nurture Your Talents and Unleash Your Potential
          </p>
          <div className="flex justify-center w-full gap-4">
            <Button
              text="Admission Open"
              key={"admission_open"}
              icon={<LuPhone />}
              hasIcon={true}
              onClick={handleCall}
            />
            <div className="flex justify-start text-white items-center gap-1">
              <IoSparklesSharp />
              <Link to="/admission">Check Details</Link>
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" />
      </div>
    </section>
  );
};

export default HeroSection;