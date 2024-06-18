import { useEffect, useState } from 'react';

const useIntersectionObserver = (callback: IntersectionObserverCallback, options?: IntersectionObserverInit) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!element) return;
    const observer = new IntersectionObserver(callback, options);
    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [element, callback, options]);

  return setElement;
};

export default useIntersectionObserver;
