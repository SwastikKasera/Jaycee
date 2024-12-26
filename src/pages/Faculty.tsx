import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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

const FacultyCard: React.FC<{ faculty: FacultyDataFormat }> = React.memo(({ faculty }) => (
  <div className="p-4 md:w-1/2 w-full">
    <div className="h-full bg-neutral-700 p-6 rounded">
      <div className="flex justify-between items-start w-full">
        <div className="flex justify-start items-start">
          <img
            alt={`${faculty.facultyName}`}
            src={faculty.facultyPhoto.medium || "https://dummyimage.com/106x106"}
            className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"
            loading="lazy"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-semibold text-[#ffc847] text-lg font-karla">
              {faculty.facultyName}
            </span>
            <span className="text-white text-sm font-martel">{faculty.facultyQualification}</span>
          </span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="bg-[#ffc847] w-fit px-2 py-1 rounded-full text-black font-bold font-karla">{faculty.facultyPosition}</p>
        </div>
      </div>
      <div>
        <p className="pt-2 text-white font-karla">{faculty.facultyBio}</p>
      </div>
    </div>
  </div>
));

const Faculty: React.FC = () => {
  const [facultyData, setFacultyData] = useState<FacultyDataFormat[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = useCallback(async () => {
    try {
      const resp = await axios.get(`${process.env.REACT_APP_API_URL}/api/faculties?populate=*`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_PUBLIC_KEY}`
        }
      });

      const data = resp.data.data.map((item: any) => ({
        facultyName: item.attributes.facultyName,
        facultyId: item.attributes.facultyId,
        facultyDOB: item.attributes.facultyDOB,
        facultyGender: item.attributes.facultyGender,
        facultyQualification: item.attributes.facultyQualification,
        facultyPosition: item.attributes.facultyPosition,
        facultySubjectExpert: item.attributes.facultySubjectExpert,
        facultyBio: item.attributes.facultyBio,
        facultyPhoto: {
          small: item.attributes.facultyPhoto.data.attributes.formats.small?.url,
          medium: item.attributes.facultyPhoto.data.attributes.formats.medium?.url,
          large: item.attributes.facultyPhoto.data.attributes.formats.large?.url
        }
      }));

      setFacultyData(data);
    } catch (error) {
      console.error("Error fetching faculty data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <div className="lg:px-5 lg:py-24 w-full mx-auto">
      <div className="flex flex-col text-center w-full mb-20 mt-10">
        <h1 className="sm:text-5xl md:6xl font-vidaloka text-4xl font-semibold title-font mb-4 text-[#ffc847]">
          Our Faculty
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg font-martel">
          Meet the dedicated educators who ignite curiosity, foster growth, and champion excellence in every student's journey.
        </p>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container lg:px-5 px-2 mx-auto">
          <div className="flex flex-wrap -m-4">
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-neutral-700 p-6 rounded">
                    <div className="flex justify-between items-start w-full">
                      <div className="flex justify-start items-start">
                        <Skeleton circle={true} height={64} width={64} />
                        <span className="flex-grow flex flex-col pl-4">
                          <Skeleton width={120} height={24} />
                          <Skeleton width={80} height={20} />
                        </span>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <Skeleton width={50} height={24} />
                      </div>
                    </div>
                    <div>
                      <Skeleton count={3} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              facultyData.map((faculty, index) => (
                <FacultyCard key={faculty.facultyId || index} faculty={faculty} />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;