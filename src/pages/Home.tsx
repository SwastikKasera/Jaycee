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
import Button from '../components/Button';
import { LuExternalLink } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate("/gallery/images")
  }
  return (
    <>
      <HeroSection />
      <div className="bg-gradient-to-tr from-[#ffc3c3]/50 via-[#c8f2ff]/50 to-[#9effd2]/50">
        <Achievements />
        <StudentAchievement />
      <PrincipalDesk/>
      <div 
        className='w-full py-8 px-4'
      >
        <div className='w-full'>
        </div>
        <div className='hidden md:block'>
          <h2 className='text-5xl text-center mt-4 font-vidaloka'>Capturing Memories and Milestones</h2>
          <p className='text-xl text-center my-2 mb-8 font-martel'>Preserving the special moments that highlight the essence of our educational experience.</p>
          <GalleryComponent/>
        </div>
        <div data-aos="fade-left" data-aos-delay="100" className='md:hidden flex flex-col justify-center items-center'>
          <h2 className='md:text-5xl text-4xl text-center mt-4 font-vidaloka'>Capturing Memories and Milestones</h2>
          <p className='md:text-xl text-center m-2 font-martel'>Preserving the special moments that highlight the essence of our educational experience.</p>
          <Button hasIcon={true} onClick={handleClick} icon={<LuExternalLink className='text-white' />} styles='border-2 mb-4 border-accent bg-secondary' text='View Gallery'/>
          <SwipeCarousel/>
        </div>
      </div>
        <MovingText/>
      </div>
    </>
  );
};

export default Home;