import "./App.css";
import React, { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Faculty from "./pages/Faculty";
import Gallery from "./pages/Gallery";
import NoticeBoard from "./pages/NoticeBoard";
import Admission from "./pages/Admission";
import AnimatedNavbar from "./components/AnimatedNavbar";
import Syllabus from "./pages/Syllabus";
import Cursor from "./StickyCursor/StickyCursor";
import About from "./pages/About";

function App() {
  const stickyRef = useRef<HTMLDivElement>(null);

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
            <Route path="/gallery/images" element={<Gallery />} />
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