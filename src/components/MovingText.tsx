import React from 'react';
import { motion } from 'framer-motion';
import { GoDotFill } from "react-icons/go";

const MovingText = () => {
  const text = "EVENT HIGHLIGHTS";
  const repeatedText = Array(10).fill(text); // Create an array with repeated text

  return (
    <div className="relative font-martel bg-primary text-white overflow-hidden w-full py-2">
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          },
        }}
        className="whitespace-nowrap flex items-center"
      >
        {repeatedText.map((word, index) => (
          <React.Fragment key={index}>
            <span className="flex items-center">
              <GoDotFill className="text-white mx-2" size={24}/>
              <span className="relative font-bold uppercase text-3xl tracking-widest px-4">
                {word}
              </span>
              {/* <GoDotFill className="text-white mx-2" /> */}
            </span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default MovingText;
