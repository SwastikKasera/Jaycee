import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimatedNavbar from "./components/AnimatedNavbar";
import Footer from "./components/Footer";
import ScrollUpButton from "./components/ScrollUpButton";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
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
        <div className="App overflow-x-hidden bg-background">
          <Suspense fallback={<div>Loading...</div>}>
            {typeof window !== 'undefined' && window.innerWidth >= 768 && <Cursor />}
            <Routes>
              <Route path="/" element={<Home />} />
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
      <ScrollUpButton />
    </div>
  );
}

export default App;