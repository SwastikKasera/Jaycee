import React from 'react';

interface StudentInterface {
  name: string,
  photo: string,
  year: string,
  marks: string,
  standard: string,
  rank?: string,
}
const StudentCard:React.FC<StudentInterface> = ({name, standard, marks, photo, year, rank}) => {
  return (
    <div className="bg-white relative rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <div className="flex items-center mb-4">
        <img
          src={photo}
          alt="Profile"
          className="rounded-full mr-4 w-12 h-12"
        />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">@student</p>
        </div>
        {rank && <p className='bg-primary rounded-full px-3 py-1 absolute right-3 top-7 text-white'>{rank}</p>}
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-gray-600">Marks</p>
          <p className="md:text-xl text-lg font-semibold">{marks}</p>
        </div>
        <div>
          <p className="text-gray-600">Class</p>
          <p className="md:text-xl text-lg font-semibold">{standard}</p>
        </div>
        <div>
          <p className="text-gray-600">Year</p>
          <p className="md:text-xl text-lg font-semibold">{year}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;