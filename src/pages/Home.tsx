import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import Achievements from '../components/Achievements';
import StudentAchievement from '../components/StudentAchievement';
import { SwipeCarousel } from '../components/SwipeCarousel';
import GalleryComponent from '../components/Gallery';
import AOS from "aos";
import 'aos/dist/aos.css';
import PrincipalDesk from '../components/PrincipalDesk';
import MovingText from '../components/MovingText';

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <HeroSection />
      <div className="bg-gradient-to-tr from-[#ffc3c3]/50 via-[#c8f2ff]/50 to-[#9effd2]/50">
        <Achievements />
        <StudentAchievement />
      <PrincipalDesk/>
      <MovingText/>
      <div 
        className='w-full py-8 px-4'
      >
        <div className='w-full'>
        </div>
        <div className='hidden md:block'>
          <h2 className='text-6xl text-center mb-10 font-vidaloka'>Gallery</h2>
          <GalleryComponent/>
        </div>
        <div data-aos="fade-left" data-aos-delay="100" className='md:hidden'>
          <SwipeCarousel/>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;