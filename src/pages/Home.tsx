// src/pages/Home.tsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import Achievements from '../components/Achievements';
import StudentAchievement from '../components/StudentAchievement';
import Gallery from '../components/Gallery';

const Home: React.FC = () => {
  const images = [
    'https://picsum.photos/id/1/800/600',
    'https://picsum.photos/id/2/800/600',
    'https://picsum.photos/id/3/800/600',
    'https://picsum.photos/id/4/800/600',
    'https://picsum.photos/id/5/800/600',
    'https://picsum.photos/id/6/800/600',
  ];

  return (
    <>
      <HeroSection />
      <div className="bg-gradient-to-tr from-[#ffc3c3]/50 via-[#c8f2ff]/50 to-[#9effd2]/50">
        <Achievements />
        <StudentAchievement />
        <Gallery/>
      </div>
    </>
  );
};

export default Home;