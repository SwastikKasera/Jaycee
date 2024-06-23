// StickyCursor.tsx
import React, { useEffect, useState } from 'react';

const StickyCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen

  useEffect(() => {
    const updatePosition = (ev: MouseEvent) => {
      setPosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div 
      className="fixed w-4 h-4 rounded-full bg-accent pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'  // Center the cursor on the mouse pointer
      }}
    />
  );
};

export default StickyCursor;