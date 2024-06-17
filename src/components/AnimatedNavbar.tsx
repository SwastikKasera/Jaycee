import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/logo.png";
import { LuPhone } from "react-icons/lu";
import AnimatedDropdown from "./AnimatedDropdown";
import facultyImg from "../assets/faculty.png"
import noticeBoardImg from "../assets/noticeBoard.jpg"
import syllabusImg from "../assets/classSyllabus.jpg"
import { IoChevronDown } from "react-icons/io5";

const GalleryContent = () => {
  return (
    <div className="w-[400px] bg-white rounded-lg p-6 shadow-xl flex justify-between items-center gap-4">
        <div className="flex flex-col hover:underline hover:bg-secondary border-dashed border-2 border-secondary transition-colors hover:text-white rounded-xl cursor-pointer gap-3 p-4">
            <img src={facultyImg} className="w-32 h-32 rounded-lg" alt="" />
            <h3 className="font-semibold">Our Faculty</h3>
        </div>
        <div className="flex flex-col hover:underline hover:bg-secondary border-dashed border-2 border-secondary transition-colors hover:text-white rounded-xl cursor-pointer gap-3 p-4">
            <img src={syllabusImg} className="w-32 h-32 rounded-lg" alt="" />
            <h3 className="font-semibold">Syllabus</h3>
        </div>
    </div>
  );
};

const AcademicsContent = ()=>{
    return(
        <div className="w-[550px] bg-white rounded-lg p-6 shadow-xl flex justify-between items-center gap-4">
            <div className="flex flex-col hover:underline hover:bg-secondary border-dashed border-2 border-secondary transition-colors hover:text-white rounded-xl cursor-pointer gap-3 p-4">
                <img src={facultyImg} className="w-32 h-32 rounded-lg" alt="" />
                <h3 className="font-semibold">Our Faculty</h3>
            </div>
            <div className="flex flex-col hover:underline hover:bg-secondary border-dashed border-2 border-secondary transition-colors hover:text-white rounded-xl cursor-pointer gap-3 p-4">
                <img src={syllabusImg} className="w-32 h-32 rounded-lg" alt="" />
                <h3 className="font-semibold">Syllabus</h3>
            </div>
            <div className="flex flex-col hover:underline hover:bg-secondary border-dashed border-2 border-secondary transition-colors hover:text-white rounded-xl cursor-pointer gap-3 p-4">
                <img src={noticeBoardImg} className="w-32 h-32 rounded-lg" alt="" />
                <h3 className="font-semibold">Notice Board</h3>
            </div>
        </div>
    )
}

const EmptyComponent = () => null;

const AnimatedNavbar = () => {
    // const handleClick = () => {
    //     if (onClick) {
    //       onClick();
    //     }
    //     window.open(`tel:${phoneNumber}`, '_self');
    //   };
    
  return (
    <>
      <div className="bg-secondary hidden md:flex w-full justify-between items-center py-1 px-2">
        <Link to="/" className="w-fit flex justify-start items-center">
          <img src={logo} alt="" />
          <h1 className="text-white text-xl">
            Jaycee Bal <p>Mandir School</p>
          </h1>
        </Link>
        <div className=" w-fit flex justify-center items-center gap-2 text-md">
          <AnimatedDropdown link="/" text="Home" dropdownContent={EmptyComponent}/>
          <AnimatedDropdown
            link="/gallery"
            text={<>Gallery <IoChevronDown className="inline-block" /></>}
            dropdownContent={GalleryContent}
          />
          <AnimatedDropdown
            link="#"
            text={<>Academics <IoChevronDown className="inline-block" /></>}
            dropdownContent={AcademicsContent}
          />
          <AnimatedDropdown link="/admission" text="Admission" dropdownContent={EmptyComponent}/>
          <AnimatedDropdown link="/about" text="About" dropdownContent={EmptyComponent}/>
          <AnimatedDropdown link="/contact" text="Contact" dropdownContent={EmptyComponent}/>
        </div>
        <div className="w-fit flex justify-end">
          <Button hasIcon={true} icon={<LuPhone />} text="Enquire Now" />
        </div>
      </div>
    </>
  );
};

export default AnimatedNavbar;
