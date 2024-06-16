import axios from "axios";
import React, { useEffect, useState } from "react";

interface FacultyDataFormat {
  facultyName: string;
  facultyId: string;
  facultyDOB: string;
  facultyGender: string;
  facultyQualification: string;
  facultyPosition: string;
  facultySubjectExpert: string;
  facultyBio: string;
  facultyPhoto: {
    small: string;
    medium: string;
    large: string;
  };
}

const Faculty = () => {
  const [facultyData, setFacultyData] = useState<FacultyDataFormat[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const resp = await axios.get(`${process.env.REACT_APP_API_URL}/api/faculties?populate=*`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_PUBLIC_KEY}`
          }
        });

        const data = resp.data.data.map((item: any) => {
          const { 
            facultyName, 
            facultyId, 
            facultyDOB, 
            facultyGender, 
            facultyQualification, 
            facultyPosition, 
            facultySubjectExpert, 
            facultyBio 
          } = item.attributes;
          
          const { small, medium, large } = item.attributes.facultyPhoto.data.attributes.formats;

          return {
            facultyName,
            facultyId,
            facultyDOB,
            facultyGender,
            facultyQualification,
            facultyPosition,
            facultySubjectExpert,
            facultyBio,
            facultyPhoto: {
              small: small?.url,
              medium: medium?.url,
              large: large?.url
            }
          };
        });

        setFacultyData(data);
      } catch (error) {
        console.error("Error fetching faculty data:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-5xl text-4xl font-semibold title-font mb-4 text-gray-900">
          Our Faculty
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Meet the dedicated educators who ignite curiosity, foster growth, and champion excellence in every student's journey.
        </p>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {facultyData.map((faculty, index) => (
              <>
              
              <div key={index} className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-6 rounded">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex justify-start items-start">
                      <img
                        alt="faculty"
                        src={`${process.env.REACT_APP_API_URL}${faculty.facultyPhoto.medium}` || "https://dummyimage.com/106x106"}
                        className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-semibold text-black">
                          {faculty.facultyName}
                        </span>
                        <span className="text-secondary text-sm">{faculty.facultyQualification}</span>
                      </span>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <p className="bg-primary w-fit px-2 py-1 rounded-full text-background">{faculty.facultyPosition}</p>
                    </div>
                  </div>
                  <div>
                    <p className="pt-2">{faculty.facultyBio}</p>
                  </div>
                </div>
              </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
