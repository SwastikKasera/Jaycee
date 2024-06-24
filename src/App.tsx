import "./App.css";
import React, { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Faculty from "./pages/Faculty";
import NoticeBoard from "./pages/NoticeBoard";
import Admission from "./pages/Admission";
import AnimatedNavbar from "./components/AnimatedNavbar";
import Syllabus from "./pages/Syllabus";
import Cursor from "./StickyCursor/StickyCursor";
import About from "./pages/About";
import img1 from "./assets/Asset1.png"
import img2 from "./assets/hero_background.png"
import VideoGallery from "./pages/VideoGallery";
import ImageGallery from "./pages/ImageGallery";

function App() {
  const stickyRef = useRef<HTMLDivElement>(null);
  const items = [
    { id: '1', imageUrl: img1, width: 300, height: 400 },
    { id: '2', imageUrl: img2, width: 400, height: 300 },
    // Add more items as needed
  ];
  return (
    <div className="relative">
      <Cursor />
      <BrowserRouter>
        <AnimatedNavbar />
        <div className="App overflow-x-hidden bg-background" ref={stickyRef}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/gallery/images" element={<ImageGallery />} />
            <Route path="/gallery/videos" element={<VideoGallery />} />
            <Route path="/noticeboard" element={<NoticeBoard />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;