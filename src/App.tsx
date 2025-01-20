import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimatedNavbar from "./components/AnimatedNavbar";
import Footer from "./components/Footer";
import ScrollUpButton from "./components/ScrollUpButton";
import "./App.css";
import "./styles/css/style.css";
import "./styles/css/animate.css";
import "./styles/css/responsive.css";
import "./styles/css/color.css";
import "./styles/css/elpath.css";
import "./styles/css/nice-select.css";
import "./styles/css/jquery.fancybox.min.css";
import "./styles/css/owl.css";
import "./styles/cta.css";
import "./styles/css/module-css/banner.css";
import "./styles/css/module-css/about.css";
import "./styles/css/module-css/service.css";
import "./styles/css/module-css/chooseus.css";
import "./styles/css/module-css/clients.css";
import "./styles/css/module-css/video.css";
import "./styles/css/module-css/working.css";
import "./styles/css/module-css/testimonial.css";
import "./styles/css/module-css/news.css";
import "./styles/css/module-css/service-details.css";
import { BsWhatsapp } from "react-icons/bs";

const Home = lazy(() => import("./pages/Home"));
const Home2 = lazy(() => import("./pages/HomeNew"));
const Contact = lazy(() => import("./pages/Contact"));
const Faculty = lazy(() => import("./pages/Faculty"));
const NoticeBoard = lazy(() => import("./pages/NoticeBoard"));
const Admission = lazy(() => import("./pages/Admission"));
const Syllabus = lazy(() => import("./pages/Syllabus"));
const About = lazy(() => import("./pages/About"));
const VideoGallery = lazy(() => import("./pages/VideoGallery"));
const ImageGallery = lazy(() => import("./pages/ImageGallery"));
const Founders = lazy(() => import("./pages/Founders"));
const Members = lazy(() => import("./pages/Members"));
const FeeStructure = lazy(() => import("./pages/FeeStructure"));
const Cursor = lazy(() => import("./StickyCursor/StickyCursor"));


function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <AnimatedNavbar />
        <div className="App overflow-x-hidden bg-[#141416]">
          <Suspense fallback={<div>Loading...</div>}>
            {typeof window !== 'undefined' && window.innerWidth >= 768 && <Cursor />}
            <Routes>
              <Route path="/" element={<Home2 />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/gallery/images" element={<ImageGallery />} />
              <Route path="/gallery/videos" element={<VideoGallery />} />
              <Route path="/noticeboard" element={<NoticeBoard />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/fee-structure" element={<FeeStructure />} />
              <Route path="/syllabus" element={<Syllabus />} />
              <Route path="/about/school" element={<About />} />
              <Route path="/about/founder" element={<Founders />} />
              <Route path="/about/members" element={<Members />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </BrowserRouter>
      <div className="fixed right-7 bottom-20 rounded-full bg-green-500 p-3 shadow-lg hover:bg-green-600 transition duration-300">
      <a 
        href="https://wa.me/+919415679969" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center text-white text-xl"
      >
        <BsWhatsapp />
      </a>
    </div>
      <ScrollUpButton />
    </div>
  );
}

export default App;