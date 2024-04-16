import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Achievements from './components/Achievements';
function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Achievements/>
      <Footer/>
    </div>
  );
}

export default App;
