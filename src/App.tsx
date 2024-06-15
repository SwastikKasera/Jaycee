import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Faculty from "./pages/Faculty";
import Gallery from "./pages/Gallery";
import NoticeBoard from "./pages/NoticeBoard";
import Admission from "./pages/Admission";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/gallery/images" element={<Gallery />} />
          <Route path="/notice-board" element={<NoticeBoard />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;