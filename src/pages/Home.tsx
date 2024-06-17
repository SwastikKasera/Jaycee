import React from 'react'
import HeroSection from '../components/HeroSection'
import Achievements from '../components/Achievements'
import StudentAchievement from '../components/StudentAchievement'
import AnimatedNavbar from '../components/AnimatedNavbar'
import person from "../assets/person.jpg"

const Home = () => {
  return (
    <>
      <HeroSection/>
      <Achievements/>
      <StudentAchievement name='Swastik Kasera' marks='96%' photo={person} standard='12th' year='2020' rank='58th'/>
    </>
  )
}

export default Home