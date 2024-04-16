import React from "react";
import { Link } from "react-router-dom";
import { LuChevronDown } from "react-icons/lu";

interface Menu {
    text: string,
    url?:string
}

interface DropdownInt {
    text:string,
    menu:Menu[]
}

interface DropdownProps {
  id: string;
  isActive: boolean;
  toggleDropdown: () => void;
}

const Dropdown: React.FC<DropdownInt & DropdownProps> = ({ text, menu, isActive, toggleDropdown }) => {
  return (
    <div className="w-fit">
      <p className={`text-white relative flex justify-center px-3 py-1 hover:bg-accent rounded-full transition-colors duration-150 items-center gap-1 no-underline hover:cursor-pointer hover:text-secondary ${isActive && "bg-accent text-secondary rounded-full px-3 py-1"}`} onClick={toggleDropdown}>{text}<LuChevronDown /></p>
      {isActive && 
        <div className="bg-accent absolute w-28 rounded-lg mt-4 p-2 flex flex-col justify-center items-start gap-3">
            {menu.map(item => (
                <Link key={item.url} to={`${item.url}`}>{item.text}</Link>
            ))}
        </div>
      }
    </div>
  );
};


export default Dropdown;
