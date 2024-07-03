import React from "react";
import schoolImg from "../assets/bkgimg.jpg";
import Button from "../components/Button";
import { LuExternalLink } from "react-icons/lu";

const Members = () => {
  const hanldeClick = () => {
    window.location.href = "https://res.cloudinary.com/dxlqy4p04/image/upload/v1720010977/Jaycee_Members_PDF_bda3db690b.pdf";
  };

  return (
    //bg-member-background bg-no-repeat bg-cover bg-opacity-20
    <>
      <div className="py-16">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12 flex justify-center items-center">
              <img
                src={schoolImg}
                alt="school's structure"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl font-martel">
                Jaycee Members
              </h2>
              <p className="mt-4 font-karla text-gray-600">
                Hurray for Jaycee School and its wonderful President, Lolark Nath Singh! The dedication and leadership shown by President Singh and the entire Jaycee team have made a tremendous positive impact on our community. Through their tireless efforts, Jaycee School has become a beacon of education and opportunity for our young learners. Here's to President Lolark Nath Singh and everyone at Jaycee School for their outstanding contributions to our community's growth and development.
              </p>
              <Button text="View" onClick={hanldeClick} hasIcon={true} icon={<LuExternalLink />} styles="mt-4 w-1/4"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
