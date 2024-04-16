import { LuPhone } from "react-icons/lu";
import Button from "./Button";
import Dropdown from "./Dropdown";
import React, { useState } from "react";
import logo from '../assets/logo.png'
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownId: string) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };
  const Academics = [
    {
      text: "Syllabus",
      url: "/syllabus",
    },
    {
      text: "Fee Structure",
      url: "/fee-structure",
    },
    {
      text: "Notice Board",
      url: "/notice-board",
    },
  ];
  const Gallery = [
    {
        text:"Images",
        url:"/gallery/images"
    },
    {
        text:"Videos",
        url:"/gallery/videos"
    }
  ]
  const NavItem = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Academics",
      menu: Academics,
    },
    {
      text: "Faculty",
      url: "/faculty",
    },
    {
      text: "Admission",
      url: "/admission",
    },
    {
      text: "Gallery",
      menu: Gallery,
    },
    {
      text: "About",
      url: "/about",
    },
    {
      text: "Contact",
      url: "/contact",
    },
  ];
  return (
    <div className="bg-secondary hidden md:flex w-full justify-center items-center py-1 px-2">
      <div className="w-3/12 flex justify-start items-center">
        <img src={logo} alt="" />
        <h1 className="text-white text-xl">
          Jaycee Bal <p>Mandir School</p>
        </h1>
      </div>
      <div className=" w-fit flex justify-center items-center gap-2 text-md">
        {NavItem.map((item, index) =>
          item?.menu ? (
            <Dropdown key={index} id={item.text} text={item.text} menu={item.menu} isActive={activeDropdown === item.text} toggleDropdown={() => toggleDropdown(item.text)} />
          ) : (
            <p className="text-white px-3 py-1 rounded-full cursor-pointer transition-colors duration-150 hover:bg-accent hover:text-secondary" key={index}>{item.text}</p>
          )
        )}
      </div>
      <div className="w-3/12 flex justify-end">
        <Button hasIcon={true} icon={<LuPhone />} text="Enquire Now" />
      </div>
    </div>
  );
};

export default Navbar;
