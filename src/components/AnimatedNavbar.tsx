import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/logo.svg";
import { LuPhone } from "react-icons/lu";
import AnimatedDropdown from "./AnimatedDropdown";
import facultyImg from "../assets/faculty.png";
import noticeBoardImg from "../assets/noticeBoard.jpg";
import syllabusImg from "../assets/classSyllabus.jpg";
import { IoChevronDown } from "react-icons/io5";
import { SidebarButton } from "./SidebarButton";
import Sidebar from "./Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";

const GalleryContent = () => {
  return (
    <div className="w-[450px] z-50 bg-white rounded-lg p-6 shadow-xl flex flex-col gap-4">
      <Link
        to="/gallery/images"
        className="flex items-center gap-4 hover:bg-secondary hover:text-white border border-secondary transition-colors rounded-xl cursor-pointer p-4"
      >
        <span className="text-2xl">🖼️</span>
        <div>
          <h3 className="font-semibold">Image Gallery</h3>
          <p className="text-sm">
            Explore our vibrant school life through photos. View images of events, classrooms, sports activities, and more.
          </p>
        </div>
      </Link>
      <Link
        to="gallery/videos"
        className="flex items-center gap-4 hover:bg-secondary hover:text-white border border-secondary transition-colors rounded-xl cursor-pointer p-4"
      >
        <span className="text-2xl">🎥</span>
        <div>
          <h3 className="font-semibold">Video Gallery</h3>
          <p className="text-sm">
            Watch videos of school performances, educational content, and highlights from special events.
          </p>
        </div>
      </Link>
    </div>
  );
};

const AcademicsContent = () => {
  return (
    <div className="w-[450px] z-10 bg-white rounded-lg p-6 shadow-xl flex flex-col gap-4">
      <Link
        to="/faculty"
        className="flex items-center gap-4 hover:bg-secondary hover:text-white border border-secondary transition-colors rounded-xl cursor-pointer p-4"
      >
        <img src={facultyImg} className="w-16 h-16 rounded-lg" alt="Faculty" />
        <div>
          <h3 className="font-semibold">Our Faculty</h3>
          <p className="text-sm">
            Meet our dedicated team of educators committed to nurturing young minds.
          </p>
        </div>
      </Link>
      <Link
        to="/syllabus"
        className="flex items-center gap-4 hover:bg-secondary hover:text-white border border-secondary transition-colors rounded-xl cursor-pointer p-4"
      >
        <img src={syllabusImg} className="w-16 h-16 rounded-lg" alt="Syllabus" />
        <div>
          <h3 className="font-semibold">Syllabus</h3>
          <p className="text-sm">
            Access our comprehensive curriculum and course outlines for all grades.
          </p>
        </div>
      </Link>
      <Link
        to="/noticeboard"
        className="flex items-center gap-4 hover:bg-secondary hover:text-white border border-secondary transition-colors rounded-xl cursor-pointer p-4"
      >
        <img src={noticeBoardImg} className="w-16 h-16 rounded-lg" alt="Notice Board" />
        <div>
          <h3 className="font-semibold">Notice Board</h3>
          <p className="text-sm">
            Stay updated with the latest announcements, events, and important information.
          </p>
        </div>
      </Link>
    </div>
  );
};

const EmptyComponent = () => null;

const AnimatedNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    localStorage.getItem("isSidebarOpen") === "true" || false
  );
  const [active, setActive] = useState(
    localStorage.getItem("isActive") === "true" || false
  );

  useEffect(() => {
    localStorage.setItem("isSidebarOpen", isSidebarOpen.toString());
    localStorage.setItem("isActive", active.toString());
  }, [isSidebarOpen, active]);
  useEffect(() => {
    AOS.init();
  }, []);

  const handleCall = () => {
    window.location.href = `tel:+919415679969`;
    
  };
  return (
    <>
      <div className="bg-secondary flex w-full justify-between items-center py-1 px-2">
        <Link to="/" className="w-fit flex justify-start items-center gap-2">
          <img src={logo} className="w-14" alt="" />
          <h1 className="text-white font-karla text-center text-xl">
            Jaycee Bal Mandir
            <p className="text-sm">(Montessori)</p>
            <p className="text-accent text-sm">Junior High School</p>
          </h1>
        </Link>
        <div className=" w-fit hidden lg:flex justify-center items-center gap-2 text-md font-karla">
          <AnimatedDropdown
            link="/"
            text="Home"
            dropdownContent={EmptyComponent}
          />
          <AnimatedDropdown
            link="#"
            text={
              <>
                Gallery <IoChevronDown className="inline-block" />
              </>
            }
            dropdownContent={GalleryContent}
          />
          <AnimatedDropdown
            link="#"
            text={
              <>
                Academics <IoChevronDown className="inline-block" />
              </>
            }
            dropdownContent={AcademicsContent}
          />
          <AnimatedDropdown
            link="/admission"
            text="Admission"
            dropdownContent={EmptyComponent}
          />
          <AnimatedDropdown
            link="/about"
            text="About"
            dropdownContent={EmptyComponent}
          />
          <AnimatedDropdown
            link="/contact"
            text="Contact"
            dropdownContent={EmptyComponent}
          />
        </div>
        <div
          className="w-fit flex gap-2 justify-end"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Button
          onClick={handleCall}
            hasIcon={true}
            icon={<LuPhone />}
            text="Enquire Now"
            styles="text-xs md:text-base"
          />
          <div className="block lg:hidden">
            <SidebarButton
              isOpen={isSidebarOpen}
              setIsOpen={setIsSidebarOpen}
              setActive={setActive}
            />
          </div>
        </div>
      </div>
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        setActive={setActive}
      />
    </>
  );
};

export default AnimatedNavbar;
