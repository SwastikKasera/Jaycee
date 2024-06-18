import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SidebarButton } from './SidebarButton';

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
          className="fixed top-0 right-0 z-50 h-screen w-60 p-4 bg-white shadow-lg"
          variants={sidebarVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          transition={{ type: 'tween' }}>
          <nav>
            <SidebarButton isOpen={isOpen} setIsOpen={setIsOpen} setActive={setActive} />
            <ul className="space-y-4">
              <li>
                <Link to="/" onClick={toggleSidebar}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleSidebar}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={toggleSidebar}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleSidebar}>
                  Contact
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
