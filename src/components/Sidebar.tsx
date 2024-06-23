import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SidebarButton } from './SidebarButton';
import {LuBook, LuHome, LuImage, LuInfo, LuPhone, LuSchool2} from "react-icons/lu"

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

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
          className="fixed top-0 right-0 z-50 h-screen w-60 p-4 bg-neutral-100 shadow-lg"
          variants={sidebarVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          transition={{ type: 'tween' }}>
          <nav>
            <SidebarButton isOpen={isOpen} setIsOpen={setIsOpen} setActive={setActive} />
            <ul className="space-y-2 mt-6">
              <li>
                <Link to="/" className='flex gap-2 items-center hover:bg-secondary hover:text-neutral-100 p-2 rounded-lg transition-colors' onClick={toggleSidebar}>
                  <LuHome />Home
                </Link>
              </li>
              <li>
                <Link to="/about" className='flex gap-2 items-center hover:bg-secondary hover:text-neutral-100 p-2 rounded-lg transition-colors' onClick={toggleSidebar}>
                  <LuInfo />About
                </Link>
              </li>
              <li>
                <Link to="/gallery" className='flex gap-2 items-center hover:bg-secondary hover:text-neutral-100 p-2 rounded-lg transition-colors' onClick={toggleSidebar}>
                  <LuImage />Gallery
                </Link>
              </li>
              <li>
                <Link to="/academics" className='flex gap-2 items-center hover:bg-secondary hover:text-neutral-100 p-2 rounded-lg transition-colors' onClick={toggleSidebar}>
                  <LuBook />Acedemics
                </Link>
              </li>
              <li>
                <Link to="/admission" className='flex gap-2 items-center hover:bg-secondary hover:text-neutral-100 p-2 rounded-lg transition-colors' onClick={toggleSidebar}>
                  <LuSchool2 />Admission
                </Link>
              </li>
              <li>
                <Link to="/about" className='flex gap-2 items-center hover:bg-secondary hover:text-neutral-100 p-2 rounded-lg transition-colors' onClick={toggleSidebar}>
                  <LuInfo />About
                </Link>
              </li>
              <li>
                <Link to="/contact" className='flex gap-2 items-center hover:bg-secondary hover:text-neutral-100 p-2 rounded-lg transition-colors' onClick={toggleSidebar}>
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
