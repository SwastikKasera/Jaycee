import React from "react";
import logo from "../assets/logo.svg";
import image21 from "../styles/images/shape/shape-21.png";
import image22 from "../styles/images/shape/shape-22.png";
import image23 from "../styles/images/shape/shape-23.png";
import image24 from "../styles/images/shape/shape-24.png";
import image25 from "../styles/images/shape/shape-25.png";
import jcilogo from "../assets/jci.png";
import { LuFacebook, LuInstagram, LuMail, LuMapPin, LuPhone, LuYoutube } from "react-icons/lu";
import { Link } from "react-router-dom";
const Footer = () => {

  const handleCall = () => {
    window.location.href = "tel:+91 9839059374";
  };
  return (
    <>
    <footer className="main-footer">
    <div className="widget-section">
      <div className="pattern-layer">
        <div
          className="pattern-1 img_dark_yellow_filter"
          style={{ backgroundImage: `url(${image21})` }}
        ></div>
        <div
          className="pattern-2"
          style={{ backgroundImage: `url(${image22})` }}
        ></div>
        <div
          className="pattern-3 img_dark_yellow_filter"
          style={{ backgroundImage: `url(${image23})` }}
        ></div>
        <div
          className="pattern-4 float-bob-x img_dark_yellow_filter"
          style={{ backgroundImage: `url(${image24})` }}
        ></div>
        <div
          className="pattern-5 float-bob-y"
          style={{ backgroundImage: `url(${image25})` }}
        ></div>
      </div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget logo-widget">
              <figure className="footer-logo">
                <a href="/">
                  <div className="flex justify-start items-center gap-3">
                    <img src={logo} className="w-20" alt="logo" />
                    <div>
                      <h3>Jaycee Bal Mandir</h3>
                      <p>(Montesorri) <span className="text-[#ffc847]">Junior High School</span></p>
                    </div>
                  </div>
                </a>
              </figure>
              {/* <p>
                Mauris ut enim sit amet lacus ornare ullamcor. Praesent
                placerat nequ puru rhoncu tincidunt odio ultrices.
              </p> */}
              <h3>
                {/* <Link to="/">info@jayceebalmandir.com</Link> */}
              </h3>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget links-widget">
              <div className="widget-title">
                <h3>Quick Links</h3>
              </div>
              <div className="widget-content">
                <ul className="links-list clearfix">
                  <li>
                    <Link to="/noticeboard">Noticeboard</Link>
                  </li>
                  <li>
                    <Link to="/admission">Admission</Link>
                  </li>
                  <li>
                    <Link to="/faculty">Faculty</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/gallery/images">Gallery</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget links-widget">
              <div className="widget-title">
                <h3>Explore</h3>
              </div>
              <div className="widget-content">
                <ul className="links-list clearfix">
                  <li>
                    <Link to="/faculty">Our Faculty</Link>
                  </li>
                  <li>
                    <Link to="/syllabus">Syllabus</Link>
                  </li>
                  <li>
                    <Link to="/founder/school">Founder</Link>
                  </li>
                  <li>
                    <Link to="/fee-structure">Fee Structure</Link>
                  </li>
                  <li>
                    <Link to="https://jayceeapi.onrender.com/admin">Admin</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-widget subscribe-widget">
              <div className="widget-title">
                <h3>Contact Details</h3>
              </div>
              <div className="widget-content">
                <p className="flex justify-start items-center gap-2">
                  <span>
                    <LuMapPin />
                  </span> 
                  Mussafarganj, Mirzapur, Uttar Pradesh 231001
                </p>
                <p className="flex justify-start items-center gap-2">
                  <LuPhone/> +91 94156 79969
                </p>
                <p className="flex justify-start items-center gap-2">
                  <LuMail/> info@jayceebalmandir.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex w-full mx-auto gap-4 flex-col lg:flex-row justify-between items-center px-5 py-6">
        <div className="flex flex-row justify-start items-center w-full lg:w-auto mb-4 lg:mb-0">
          <div className="flex flex-col justify-center items-center mb-2 sm:mb-0">
            <img src={jcilogo} className="w-20 sm:w-16 white-filter" alt="" />
            <p className="text-xs sm:text-sm text-center w-[85px]">ESTD 1987</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-karla text-center sm:text-left text-base sm:text-lg">
              Raja Shree Nivasi Prasad Singh J.C. Kanya Inter College
            </h1>
            <p className="text-xs sm:text-sm text-center sm:text-left text-accent">
              Vijaypur Kothi, Civil Lines, Mirzapur - 231001
            </p>
          </div>
        </div>
        <div className="flex flex-row lg:mr-4 justify-start items-center gap-2 w-full lg:w-auto">
          <div className="flex flex-col justify-center items-center mb-2 sm:mb-0">
            <img src={logo} className="w-20 sm:w-16" alt="" />
            <p className="text-xs sm:text-sm text-center w-[85px]">ESTD 1974</p>
          </div>
          <h1 className="text-white font-karla text-center sm:text-left text-lg sm:text-xl">
            Jaycee Bal Mandir
            <p className="text-xs sm:text-sm">Junior High School</p>
            <p className="text-xs sm:text-sm text-center sm:text-left text-accent">
              Civil Lines, Mirzapur - 231001
            </p>
          </h1>
        </div>
      </div>
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="bottom-inner">
          <p>
            &copy; Copyright 2024 <a href="/">Jaycee Bal Mandir School, Mirzapur</a> - All Rights
            Reserved.
          </p>
          <ul className="social-links">
            <li>
              <Link className="flex justify-center items-center" to="https://www.youtube.com/@jayceebalmandirmusaffargan6756">
                <LuYoutube strokeWidth="2px" size={24} />
              </Link>
            </li>
            <li>
              <Link className="flex justify-center items-center" to="https://www.facebook.com/jayceebal.mandir">
                <LuFacebook strokeWidth="2px" size={24} />
              </Link>
            </li>
            <li>
              <Link className="flex justify-center items-center" to="https://www.instagram.com/jayceebalmandir1964/">
                <LuInstagram strokeWidth="2px" size={24} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
        onClick={handleCall}
        className="text-white bg-blue-800 p-2 flex justify-center cursor-pointer hover:underline text-xs"
      >
        <p className="text-center">
          Designed and Developed by Swastik Kasera -{" "}
          <strong>Super Computer and Networks</strong>
        </p>
        <p></p>
      </div>
  </footer>
  </>
  );
};

export default Footer;
