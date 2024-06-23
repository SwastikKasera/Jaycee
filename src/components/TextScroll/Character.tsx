import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface ParagraphProps {
  paragraph: string;
}

export default function Paragraph({ paragraph }: ParagraphProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const words = paragraph.split(" ");

  return (
    <div ref={container} className="overflow-hidden"> {/* Ensure the parent container is set correctly */}
      <p className="flex flex-wrap text-2xl leading-none p-10 max-w-7xl text-secondary font-bold">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length);
          return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>;
        })}
      </p>
    </div>
  );
}

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="relative mr-3 mt-3">
      {children.split("").map((char, i) => {
        const start = range[0] + (i * step);
        const end = range[0] + ((i + 1) * step);
        return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>;
      })}
    </span>
  );
};

interface CharProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Char = ({ children, progress, range }: CharProps) => {
  // Adjust the end value to make the opacity fill faster
  const adjustedRange = [range[0], range[0] + (range[1] - range[0]) * 1.0];
  const opacity = useTransform(progress, adjustedRange, [0, 1]);
  
  return (
    <span className="relative inline-block text-secondary/45">
      <span className="absolute inset-0">{children}</span>
      <motion.span style={{ opacity }} className="relative">{children}</motion.span>
    </span>
  );
};
