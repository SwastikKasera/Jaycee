import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';

const ScrollUpButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-yellow-500 text-secondary p-3 rounded-full shadow-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          <MdOutlineKeyboardDoubleArrowUp size={22} />
        </button>
      )}
    </div>
  );
};

export default ScrollUpButton;
