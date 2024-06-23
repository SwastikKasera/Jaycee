import React, { useEffect, useState} from 'react';
import Counter from './Counter';
import useIntersectionObserver from '../hooks/InteractiveHook';
import AOS from "aos"
import 'aos/dist/aos.css';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const setRef = useIntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }
  );

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section ref={setRef} className='p-4 md:p-6 flex justify-center items-center'>
      <div className='w-full bg-accent min-h-60 h-fit flex flex-col md:flex-row justify-center items-center flex-wrap shadow-md rounded-2xl'>
        <div className='md:w-2/6 w-full container p-4 md:p-6 h-full flex justify-center items-center'>
          <h2 data-aos="fade-up" className='text-4xl font-vidaloka lg:text-5xl font-semibold lg:text-left text-center'>Our Achievements</h2>
        </div>
        <div className='md:w-4/6 w-full p-2 min-h-60 flex justify-center items-center bg-secondary rounded-2xl'>
          <div className="w-full">
            <div className="flex flex-wrap md:justify-between justify-center text-center">
              {[
                { start: 220, end: 400, label: 'Students', suffix: '+' },
                { start: 0, end: 20, label: 'Top Class Faculty', suffix: '+' },
                { start: 0, end: 100, label: 'Passing Result', suffix: '%' },
                { start: 40, end: 85, label: 'Got 90+ Marks', suffix: '' },
              ].map((item, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={100 + index * 50} className="p-2 sm:w-1/2 lg:w-1/4">
                  {isVisible && (
                    <>
                      <h2 className="title-font font-vidaloka font-medium text-4xl md:text-5xl flex justify-center text-background">
                        <Counter start={item.start} end={item.end} duration={2000} />{item.suffix}
                      </h2>
                      <p className="leading-relaxed font-martel text-background text-sm md:text-base">{item.label}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;