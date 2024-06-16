import React from "react";
import Button from "../components/Button";
import { LuPhone } from "react-icons/lu";
import AdmissionOpenImg from "../assets/Admission_Open.png";

const Admission = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-xl"
              alt="Admission open"
              src={AdmissionOpenImg}
              loading="lazy"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-justify">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Admission Open
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Welcome to Jay Cee Bal Mandir, where we nurture young minds and
              foster a lifelong love for learning. We are excited to announce
              that admissions for the 2024 are now open!
            </p>
            <div className="">
              <h2 className="font-semibold text-black text-lg">
                Why Choose Jaycee Bal Mandir ?
              </h2>
              <ul className="px-4 mt-2 mb-4 list-disc text-justify">
                <li className="mt-4">
                  <strong>Holistic Education: </strong>Our balanced approach
                  combines academics, arts, sports, and extracurricular
                  activities to develop well-rounded individuals.
                </li>
                <li className="mt-4">
                  <strong>Innovative Learning: </strong>We incorporate the
                  latest educational technology and methods to make learning
                  interactive and enjoyable.
                </li>
                <li className="mt-4">
                  <strong>Excellent Facilities: </strong>Our state-of-the-art
                  facilities provide the perfect setting for academic and
                  personal growth.
                </li>
                <li className="mt-4">
                  <strong>Individual Attention: </strong>With our low
                  student-to-teacher ratio, we ensure personalized attention and
                  tailored instruction for every student.
                </li>
              </ul>
            </div>
            <div className="flex md:justify-start justify-center w-full">
              <Button hasIcon={true} icon={<LuPhone />} text="Call Now" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admission;
