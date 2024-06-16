import React from "react";
import Button from "./Button";
import { LuPhone } from "react-icons/lu";
import { IoSparklesSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import hero_bkg from "../assets/hero_bkg2.jpg";
const HeroSection = () => {
  const sectionStyle = {
    backgroundImage: `url(${hero_bkg})`,
    backgroundColor: "#000",
  };
  return (
    <section className="text-gray-600 bg-cover body-font" style={sectionStyle}>
      <div className="w-full bg-[#0000003d] flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-5xl mb-4 font-medium text-white">
            Discover, Learn, Grow: Where Every Moment is a Lesson
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            Nurture Your Talents and Unleash Your Potential
          </p>
          <div className="flex justify-center">
            <Button
              text="Admission Open"
              key={"admission_open"}
              icon={<LuPhone />}
              hasIcon={true}
              onClick={() => console.log("clicked")}
            />
            <div className="flex justify-start items-center gap-1">
              <IoSparklesSharp />
              <p>Check Details</p>
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
