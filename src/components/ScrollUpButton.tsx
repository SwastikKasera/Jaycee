import React, { useState, useEffect } from 'react';
import "../styles/scrollUpButton.css";
import { BsWhatsapp } from 'react-icons/bs';

const ScrollUpButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(1); // Default progress as 1 for full circle.

  useEffect(() => {
    const progressPath = document.querySelector('.progress-wrap path') as SVGPathElement;
    const pathLength = progressPath?.getTotalLength();

    if (progressPath) {
      progressPath.style.transition = progressPath.style.webkitTransition = 'none';
      progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
      progressPath.style.strokeDashoffset = `${pathLength}`;
    }

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = pathLength - (scrollTop * pathLength) / documentHeight;
      setProgress(scrollProgress);
      progressPath.style.strokeDashoffset = `${scrollProgress}`;

      // Show/hide the button based on scroll position.
      setIsVisible(scrollTop > 150);
    };

    // Event listeners for scroll events.
    window.addEventListener('scroll', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
    <div
      className={`progress-wrap ${isVisible ? 'active-progress' : ''}`}
      onClick={scrollToTop}
    >
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            transition: 'stroke-dashoffset 10ms linear',
            strokeDasharray: '307.919, 307.919', // Circle's circumference
            strokeDashoffset: progress,
          }}
        ></path>
      </svg>
    </div>
    </>
  );
};

export default ScrollUpButton;
