import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  start: number;
  end: number;
  duration: number;
}

const Counter: React.FC<CounterProps> = ({ start, end, duration }) => {
  const [count, setCount] = useState<number>(start);
  const startRef = useRef<number>(start);
  const endRef = useRef<number>(end);
  const durationRef = useRef<number>(duration);

  useEffect(() => {
    startRef.current = start;
    endRef.current = end;
    durationRef.current = duration;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationRef.current, 1);
      setCount(Math.floor(progress * (endRef.current - startRef.current) + startRef.current));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [start, end, duration]);

  return <div>{count}</div>;
};

export default Counter;
