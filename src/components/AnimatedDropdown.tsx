import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

interface AnimatedDropdownProps {
    text: React.ReactNode | string;
    link: string;
    dropdownContent?: React.FC<any>; // Accepts any component as FlyoutContent
  }

const AnimatedDropdown: React.FC<AnimatedDropdownProps> = ({text, link, dropdownContent}) => {
  return (
    <div className="flex justify-center p-3">
      <FlyoutLink href={link} FlyoutContent={dropdownContent}>
        {text}
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({
  children,
  href,
  FlyoutContent,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onClick={()=> setOpen(false)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit z-50"
    >
      <Link to={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 ease-out"
        />
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black rounded-lg"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedDropdown;