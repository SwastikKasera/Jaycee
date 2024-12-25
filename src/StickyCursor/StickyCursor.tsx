// StickyCursor.tsx
import React, { useEffect } from 'react';
import "../styles/stickyCursor.css"

const StickyCursor: React.FC = () => {
  useEffect(() => {
    const mouseOuter = document.querySelector(".tf-mouse-outer") as HTMLDivElement;
    const mouseInner = document.querySelector(".tf-mouse-inner") as HTMLDivElement;

    if (mouseOuter && mouseInner) {
      let mouseX = 0;
      let mouseY = 0;
      let isHovering = false;

      // Move cursors based on mouse position
      const handleMouseMove = (e: MouseEvent) => {
        if (!isHovering) {
          mouseOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
        mouseInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      // Add hover effect on specific elements
      const handleMouseEnter = () => {
        mouseInner.classList.add("mouse-hover");
        mouseOuter.classList.add("mouse-hover");
        isHovering = true;
      };

      const handleMouseLeave = () => {
        mouseInner.classList.remove("mouse-hover");
        mouseOuter.classList.remove("mouse-hover");
        isHovering = false;
      };

      // Attach global mousemove listener
      window.addEventListener("mousemove", handleMouseMove);

      // Attach hover listeners for target elements
      const targets = document.querySelectorAll("a, .canvas, .progress-wrap, .wishlist-button");
      targets.forEach((target) => {
        target.addEventListener("mouseenter", handleMouseEnter);
        target.addEventListener("mouseleave", handleMouseLeave);
      });

      // Make cursors visible
      mouseInner.style.visibility = "visible";
      mouseOuter.style.visibility = "visible";

      // Cleanup event listeners on unmount
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        targets.forEach((target) => {
          target.removeEventListener("mouseenter", handleMouseEnter);
          target.removeEventListener("mouseleave", handleMouseLeave);
        });
      };
    }
  }, []);

  return (
    <>
    <div className="tf-mouse tf-mouse-outer"></div>
    <div className="tf-mouse tf-mouse-inner"></div>
    </>
  );
};

export default StickyCursor;