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
        const resp = await axios.get('http://localhost:1337/api/faculties?populate=*', {
          headers: {
            Authorization: 'Bearer fa628a6f55109fcb923bec6f659f52cc6943c60f8151ab82ab12b0b10d32001d8bee4c44e276797d6918c671a467c5ac71952150b049f1f7990e30f750e606a97083d9d414a661652f11f2c53eb2d98f622075cb73a9902efdff5f250ac7c85cbcf31623cc6124010e32211f22709413569bf85f95a98481545e99cbf676c5f2'
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
                        src={`http://localhost:1337${faculty.facultyPhoto.medium}` || "https://dummyimage.com/106x106"}
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
