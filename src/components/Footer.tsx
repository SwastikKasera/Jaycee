import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { TbBrandYoutube } from "react-icons/tb";
import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
const Footer = () => {
  const links = [
    {
      link: "/noticeboard",
      text: "Noticeboard",
    },
    {
      link: "/acedemics",
      text: "Academics",
    },
    {
      link: "/gallery",
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
  return (
    <footer className="bg-secondary text-background body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center ">
            <img src={logo} className="w-16" alt="" />
            <span className="ml-3 text-xl">Jaycee Bal Mandir School</span>
          </a>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="">
              <TbBrandYoutube size={26} />
            </a>
            <a className="ml-3 ">
              <CiTwitter size={26} />
            </a>
            <a className="ml-3 ">
              <CiInstagram size={26} />
            </a>
            <a className="ml-3 ">
              <CiFacebook size={26} />
            </a>
          </span>
        </div>
        <div className="flex-grow flex flex-wrap justify-evenly -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-fit md:w-1/2 w-full px-4">
            <h2 className="text-2xl font-medium mb-3 text-start">
              Important Links
            </h2>
            <nav className="flex flex-col justify-start items-start gap-3 mb-10">
              {links.map((l) => (
                <Link to={l.link} className="hover:text-accent">
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
              <div className="flex justify-start items-center gap-2">
                <p className="flex justify-center items-center">
                  <FaPhoneAlt className="inline-block mr-2 text-accent w-5" />
                  +91 98765 97685
                </p>
              </div>
              <div className="flex justify-start items-start gap-2">
                <p className="flex justify-center items-center w-full">
                  <IoLocationSharp className="inline-block mr-2 text-accent w-5" />
                  Near Kali Mandir, Mussafarganj, Mirzapur, Uttar Pradesh 231001
                </p>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-accent flex justify-center items-center">
        <div className="container py-4 px-5 flex flex-wrap justify-center items-center">
          <p className="text-secondary font-bold text-sm text-center sm:text-left">
            Copyright © 2024 Jaycee Bal Mandir School, Mirzapur. All Right
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
