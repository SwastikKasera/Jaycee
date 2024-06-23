import React from 'react';
import bkgimg from "../assets/bkgimg.jpg";

interface StudentInterface {
  name: string,
  photo: string,
  year: string,
  marks: string,
  standard: string,
  rank?: string,
}

const StudentCard: React.FC<StudentInterface> = ({ name, standard, marks, photo, year, rank }) => {
  return (
    <div className="relative h-fit border-2 border-neutral-50 rounded-lg shadow-md p-4 max-w-sm mx-auto overflow-visible">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-right opacity-40 blur-sm rounded-lg"
        style={{ backgroundImage: `url(${bkgimg})` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="relative mr-4 group">
            <img
              src={photo}
              alt="Profile"
              className="rounded-md relative w-16 h-16 transition-all duration-300 ease-in-out cursor-pointer"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold font-karla">{name}</h2>
            {rank && <p className='bg-primary text-sm w-fit font-martel rounded-full px-3 py-1 text-white'>{rank}</p>}
          </div>
        </div>
        <div className="flex justify-between items-center mb-4 font-karla">
          <div>
            <p className="text-gray-600 font-martel">Marks</p>
            <p className="md:text-2xl text-xl font-semibold">{marks}</p>
          </div>
          <div>
            <p className="text-gray-600 font-martel">Class</p>
            <p className="md:text-2xl text-xl font-semibold">{standard}</p>
          </div>
          <div>
            <p className="text-gray-600 font-martel">Year</p>
            <p className="md:text-2xl text-xl font-semibold">{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;