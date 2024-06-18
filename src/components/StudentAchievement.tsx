import React, { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
      setStudentData(achievements);
      setLoading(false);
    };
    fetchStudentData();
  }, []);

  return (
    <>
      <div className="my-8">
        <h2 className="text-4xl md:text-5xl text-center font-semibold px-2">
          Year 2024: Charming Results
        </h2>
        <p className="text-xl text-center my-4">
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
            <div className="w-full">
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