import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/logo.svg";
import { LuPhone } from "react-icons/lu";
import AnimatedDropdown from "./AnimatedDropdown";
import { IoChevronDown } from "react-icons/io5";
import { SidebarButton } from "./SidebarButton";
import Sidebar from "./Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";

const GalleryContent = () => {
  return (
    <div className="w-[450px] z-50 bg-neutral-800 rounded-lg p-6 shadow-xl flex flex-col gap-4">
      <Link
        to="/gallery/images"
        className="flex items-center gap-4 hover:bg-neutral-900 hover:text-white border border-secondary transition-colors rounded-xl cursor-pointer p-4"
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
        className="flex items-center gap-4 hover:bg-neutral-900 hover:text-white border border-secondary transition-colors rounded-xl cursor-pointer p-4"
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

const AboutContent = () => {
  return (
    <div className="w-[450px] z-50 bg-neutral-800 rounded-lg p-6 shadow-xl flex flex-col gap-4">
      <Link
        to="/about/founder"
        className="flex items-center gap-4 hover:bg-neutral-900 hover:text-white border border-secondary transition-colors rounded-xl cursor-pointer p-4"
      >
        <span className="text-2xl">👩‍🏫</span>
        <div>
          <h3 className="font-semibold">Our Founder</h3>
          <p className="text-sm">
            Learn about the visionary behind our school's establishment.
          </p>
        </div>
      </Link>
      <Link
        to="/about/members"
        className="flex items-center gap-4 hover:bg-neutral-900 hover:text-white border border-secondary transition-colors rounded-xl cursor-pointer p-4"
      >
        <span className="text-2xl">👨‍🏫</span>
        <div>
          <h3 className="font-semibold">Our Members</h3>
          <p className="text-sm">
            Meet the dedicated members who drive our school's success.
          </p>
        </div>
      </Link>
      <Link
        to="/about/school"
        className="flex items-center gap-4 hover:bg-neutral-900 hover:text-white border border-secondary transition-colors rounded-xl cursor-pointer p-4"
      >
        <span className="text-2xl">🏫</span>
        <div>
          <h3 className="font-semibold">Our School</h3>
          <p className="text-sm">
            Discover the history, mission, and values that define our institution.
          </p>
        </div>
      </Link>
    </div>
  );
};


const AcademicsContent = () => {
  return (
    <div className="w-[450px] z-10 bg-neutral-800 rounded-lg p-6 shadow-xl flex flex-col gap-4">
      <Link
        to="/faculty"
        className="flex items-center gap-4 hover:bg-neutral-900 hover:text-white border border-secondary transition-colors rounded-xl cursor-pointer p-4"
      >
        <span className="text-2xl">🎓</span>
        <div>
          <h3 className="font-semibold">Our Faculty</h3>
          <p className="text-sm">
            Meet our dedicated team of educators committed to nurturing young minds.
          </p>
        </div>
      </Link>
      <Link
        to="/syllabus"
        className="flex items-center gap-4 hover:bg-neutral-900 hover:text-white border border-secondary transition-colors rounded-xl cursor-pointer p-4"
      >
        <span className="text-2xl">📝</span>
        <div>
          <h3 className="font-semibold">Syllabus</h3>
          <p className="text-sm">
            Access our comprehensive curriculum and course outlines for all grades.
          </p>
        </div>
      </Link>
      <Link
        to="/noticeboard"
        className="flex items-center gap-4 hover:bg-neutral-900 hover:text-white border border-secondary transition-colors rounded-xl cursor-pointer p-4"
      >
        <span className="text-2xl">🚨</span>
        <div>
          <h3 className="font-semibold">Notice Board</h3>
          <p className="text-sm">
            Stay updated with the latest announcements, events, and important information.
          </p>
        </div>
      </Link>
      <Link
        to="/fee-structure"
        className="flex items-center gap-4 hover:bg-neutral-900 hover:text-white border border-secondary transition-colors rounded-xl cursor-pointer p-4"
      >
        <span className="text-2xl">📃</span>
        <div>
          <h3 className="font-semibold">Fees Structure</h3>
          <p className="text-sm">
          Here are the details of our school's fee structure.
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
      <div className="bg-black flex w-full justify-between items-center py-1 px-2">
        <Link to="/" className="w-fit flex justify-start items-center gap-2">
          <img src={logo} className="w-14" alt="" />
          <h1 className="text-white font-karla text-center md:text-2xl text-base">
            Jaycee Bal Mandir
            <p className="text-sm">(Montessori)</p>
            <p className="text-accent text-sm">Junior High School</p>
          </h1>
        </Link>
        <div className="w-fit hidden lg:flex justify-center items-center gap-2 text-md font-karla">
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
            link="#"
            text={<>About <IoChevronDown className="inline-block" /></>}
            dropdownContent={AboutContent}
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
          {/* <Button
            onClick={handleCall}
            hasIcon={true}
            icon={<LuPhone />}
            text="Enquire Now"
            styles="text-xs md:text-base"
          /> */}
          <div className="btn-box light mr_30"><a href="/" onClick={handleCall} className="theme-btn"><span>Enquire Now</span></a></div>
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