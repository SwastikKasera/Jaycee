import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SidebarButton } from './SidebarButton';
import { LuBook, LuHome, LuImage, LuInfo, LuPhone, LuSchool2, LuChevronDown, LuChevronUp, LuSchool } from "react-icons/lu";
import { BsImages } from 'react-icons/bs';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { FaChalkboard, FaChalkboardTeacher } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { IoIosPeople } from "react-icons/io";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DropdownProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  toggleSidebar: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ title, icon, children, toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="flex bg-neutral-200 w-full gap-2 items-center justify-between hover:bg-secondary hover:text-neutral-100 p-2 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex gap-2  items-center">
          {icon}{title}
        </span>
        {isOpen ? <LuChevronUp /> : <LuChevronDown />}
      </button>
      {isOpen && (
        <ul className="ml-4 mt-2 space-y-2">
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child as React.ReactElement<any>, {
                className: `${child.props.className} block p-2 hover:bg-secondary hover:text-neutral-100 bg-neutral-200 rounded-lg`,
                onClick: (e: React.MouseEvent) => {
                  if (child.props.onClick) {
                    child.props.onClick(e);
                  }
                  toggleSidebar();
                },
              });
            }
            return child;
          })}
        </ul>
      )}
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, setActive }) => {
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
    setActive((prev) => !prev);
  };

  const sidebarVariants = {
    open: { x: "0%" },
    closed: { x: '100%' },
  };

  const overlayVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-50"
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            onClick={toggleSidebar}
          />
        )}
        <motion.div
          className="fixed top-0 right-0 z-50 h-screen w-72 p-4 bg-neutral-100 shadow-lg overflow-y-auto"
          variants={sidebarVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          transition={{ type: 'tween' }}>
          <nav>
            <SidebarButton isOpen={isOpen} setIsOpen={setIsOpen} setActive={setActive} />
            <ul className="space-y-2 mt-6">
              <li>
                <Link to="/" className='flex bg-neutral-200 gap-2 items-center hover:bg-secondary hover:text-neutral-100 p-2 rounded-lg transition-colors' onClick={toggleSidebar}>
                  <LuHome />Home
                </Link>
              </li>
              <li>
                <Dropdown title="Gallery" icon={<LuImage />} toggleSidebar={toggleSidebar}>
                  <Link to="/gallery/images" className='flex justify-start gap-2 items-center'><BsImages />Image Gallery</Link>
                  <Link to="/gallery/videos" className='flex justify-start gap-2 items-center'><GoDeviceCameraVideo />Video Gallery</Link>
                </Dropdown>
              </li>
              <li>
                <Dropdown title="Academics" icon={<LuBook />} toggleSidebar={toggleSidebar}>
                  <Link to="/faculty" className='flex justify-start gap-2 items-center'><FaChalkboardTeacher />Our Faculty</Link>
                  <Link to="/syllabus" className='flex justify-start gap-2 items-center'><IoDocumentTextOutline />Syllabus</Link>
                  <Link to="/noticeboard" className='flex justify-start gap-2 items-center'><FaChalkboard />Notice Board</Link>
                </Dropdown>
              </li>
              <li>
                <Link to="/admission" className='flex gap-2 bg-neutral-200 items-center hover:bg-secondary hover:text-neutral-100 p-2 rounded-lg transition-colors' onClick={toggleSidebar}>
                  <LuSchool2 />Admission
                </Link>
              </li>
              <li>
                <Dropdown title="About" icon={<LuInfo />} toggleSidebar={toggleSidebar}>
                  <Link to="/about/school" className='flex justify-start gap-2 items-center'><LuSchool /> Our School</Link>
                  <Link to="/about/founder" className='flex justify-start gap-2 items-center'><MdOutlinePersonOutline />Our Founder</Link>
                  <Link to="/about/members" className='flex justify-start gap-2 items-center'><IoIosPeople />Our Members</Link>
                </Dropdown>
              </li>
              <li>
                <Link to="/contact" className='flex bg-neutral-200 gap-2 items-center hover:bg-secondary hover:text-neutral-100 p-2 rounded-lg transition-colors' onClick={toggleSidebar}>
                  <LuPhone />Contact
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Sidebar;