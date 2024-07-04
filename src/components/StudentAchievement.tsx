import React, { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import AOS from "aos";
import 'aos/dist/aos.css';
interface StudentAchievement {
  id: number;
  studentName: string;
  studentClass: string;
  studentYear: string;
  studentRank: string;
  studentMarks: string;
  studentPhotoUrl: string;
}

const StudentAchievement = () => {
  const [studentData, setStudentData] = useState<StudentAchievement[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStudentData = async () => {
      setLoading(true);
      const resp = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/student-achievements?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_PUBLIC_KEY}`,
          },
        }
      );
      const achievements = resp.data.data.map((item: any) => ({
        id: item.id,
        studentName: item.attributes.studentName,
        studentClass: item.attributes.studentClass,
        studentYear: item.attributes.studentYear,
        studentRank: item.attributes.studentRank,
        studentMarks: item.attributes.studentMarks,
        studentPhotoUrl:item.attributes.studentPhoto.data.attributes.formats.small.url,
      }));
      console.log("achievements", achievements);
      
      setStudentData(achievements);
      setLoading(false);
    };
    fetchStudentData();
  }, []);

  useEffect(() => {
    AOS.init();
    
  }, [])

  return (
    <>
      <div className="my-8 px-1">
        <h2 data-aos="fade-up" className="text-4xl md:text-5xl text-center font-vidaloka font-semibold px-2">
          Our Charming Results
        </h2>
        <p data-aos="fade-up" data-aos-delay="150" className="text-xl text-center my-4 font-martel">
          Dedicated hardwork from students and staff drives exceptional results.
        </p>
      </div>
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 flex-wrap">
          <Skeleton height={200} width={320} />
          <Skeleton height={200} width={320} />
          <Skeleton height={200} width={320} />
          <Skeleton height={200} width={320} />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 flex-wrap">
        {!loading &&
            studentData.map((data) => (
            <div data-aos="fade-up" data-aos-delay="200" className="w-full">
                <StudentCard
                key={data.id}
                name={data.studentName}
                photo={data.studentPhotoUrl}
                marks={data.studentMarks}
                year={data.studentYear}
                standard={data.studentClass}
                rank={data.studentRank}
                />
            </div>
            ))}
        </div>
    </>
  );
};

export default StudentAchievement;