import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import HeroSectionNew from '../components/HeroSectionNew';
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
import image17 from "../assets/shape/shape-17.png"
import image18 from "../assets/shape/shape-18.png"
import image19 from "../assets/shape/shape-19.png"
import "../styles/cta.css"

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
      <HeroSectionNew/>
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
      {/* <section className="cta-section pt_80 pb_80">
            <div className="pattern-layer">
                <div className="pattern-1" style={{backgroundImage: `url(${image17})`}}></div>
                <div className="pattern-2" style={{backgroundImage: `url(${image18})`}}></div>
                <div className="pattern-3" style={{backgroundImage: `url(${image19})`}}></div>
            </div>
            <div className="auto-container">
                <div className="inner-box">
                    <h2>Let’s work Awesome <br />project in mind!</h2>
                    <div className="btn-box"><div className="shape"></div><a href="contact.html"><span>About Me More</span></a></div>
                </div>
            </div>
        </section> */}
      </div>
    </>
  );
};

export default Home;