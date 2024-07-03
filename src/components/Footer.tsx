import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { TbBrandYoutube } from "react-icons/tb";
import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import jcilogo from "../assets/jci.png"
const Footer = () => {
  const links = [
    {
      link: "/noticeboard",
      text: "Noticeboard",
    },
    {
      link: "https://jayceeapi.onrender.com/admin",
      text: "Admin",
    },
    {
      link: "/gallery/images",
      text: "Gallery",
    },
    {
      link: "/admission",
      text: "Admission",
    },
    {
      link: "/about",
      text: "About",
    },
  ];
  const handleCall = () => {
    window.location.href = "tel:+91 9839059374";
  };
  return (
    <footer className="bg-secondary text-background body-font font-karla">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-full md:w-5/12 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div className="">
            <h2 className="text-center mb-1">
              Under the management of Mirzapur Junior Chamber
            </h2>
            <Link
              to="/"
              className="w-full flex justify-center md:justify-start items-center gap-3 mb-4 sm:mb-2"
            >
              <div className="flex flex-col justify-center items-center gap-2">
                <img src={logo} className="w-20 md:w-32" alt="" />
                <p className="text-neutral-50 text-xs sm:text-base">
                  ESTD 1964
                </p>
              </div>
              <div className="flex flex-col w-fit justify-start mb-6 md:w-full">
                <h1 className="text-white font-karla text-left text-3xl">
                  Jaycee Bal Mandir
                  <p className="text-base">
                    (Montessori){" "}
                    <span className="text-accent text-base">
                      Junior High School
                    </span>
                  </p>
                </h1>
              </div>
            </Link>
            <div className="flex justify-center items-center">
              <hr className="w-full" />
              <p className="w-full text-center">Sister Concern</p>
              <hr className="w-full" />
            </div>
            <div className="flex mt-2 gap-2 justify-center items-center">
              <div className="w-full flex justify-start items-center gap-2">
                <img src={jcilogo} className="w-16" alt="" />
                <h1 className="text-white font-karla text-center text-lg">
                  Raja Shree Nivasi Prasad Singh J.C. Kanya Inter College
                </h1>
              </div>
              <div className="w-full flex justify-start items-center gap-2">
                <img src={logo} className="w-14" alt="" />
                <h1 className="text-white font-karla text-center text-xl">
                  Jaycee Bal Mandir
                  <p className="text-sm">Junior High School</p>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap justify-around -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-fit md:w-1/2 w-full px-4">
            <h2 className="text-2xl font-medium mb-3 text-start">
              Important Links
            </h2>
            <nav className="flex flex-col justify-start items-start gap-3 mb-10">
              {links.map((l, index) => (
                <Link to={l.link} key={index} className="hover:text-accent">
                  {l.text}
                </Link>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full flex flex-col px-4">
            <h2 className="text-2xl text-start font-medium mb-3">Contact Us</h2>
            <nav className="flex flex-col gap-3">
              <div className="flex justify-start items-center gap-2">
                <p className="flex justify-center items-center">
                  <MdMailOutline className="inline-block mr-2 text-accent w-5" />
                  info@jaycee.com
                </p>
              </div>
              <div className="flex justify-start items-center gap-2 w-full">
                <p className="flex justify-center items-center">
                  <FaPhoneAlt className="inline-block mr-2 text-accent w-5" />
                  05442-220-531 <br />
                  +91 94156 79969
                </p>
              </div>
              <div className="flex justify-start items-start gap-2">
                <IoLocationSharp className="inline-block text-accent mt-2 w-5" />
                <p className="max-w-80 text-start w-full">
                  Mussafarganj, Mirzapur, Uttar Pradesh 231001
                </p>
              </div>
            </nav>
            <span className="inline-flex sm:mt-2 mt-4 justify-center sm:justify-start">
              <Link to="https://www.youtube.com/@jayceebalmandirmusaffargan6756" className="">
                <TbBrandYoutube size={26} />
              </Link>
              <Link to="" className="ml-3 ">
                <CiTwitter size={26} />
              </Link>
              <Link to="" className="ml-3 ">
                <CiInstagram size={26} />
              </Link>
              <Link to="" className="ml-3 ">
                <CiFacebook size={26} />
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-accent flex justify-center items-center">
        <div className="container py-2 px-5 flex flex-col flex-wrap gap-1 justify-center items-center">
          <p className="text-secondary font-bold text-sm text-center sm:text-left">
            Copyright © 2024 Jaycee Bal Mandir School, Mirzapur. All Right
            Reserved
          </p>
        </div>
      </div>
      <div
        onClick={handleCall}
        className="text-white bg-blue-800 p-2 flex justify-center cursor-pointer hover:underline text-xs"
      >
        <p>
          Designed and Developed by Swastik Kasera -{" "}
          <strong>Super Computer and Networks</strong>
        </p>
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
