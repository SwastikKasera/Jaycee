import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface FeeStructureFile {
  id: number;
  attributes: {
    name: string;
    url: string;
  };
}

interface FeeStructureItem {
  id: number;
  attributes: {
    Name: string;
    Description: string;
    updatedAt: string;
    File: {
      data: FeeStructureFile;
    };
  };
}

const FeeStructure = () => {
  const [feeStructureData, setFeeStructureData] = useState<FeeStructureItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(25);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFeeStructure = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/fee-structures?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_PUBLIC_KEY}`
          }
        });
        setFeeStructureData(response.data.data);
        setTotalPages(response.data.meta.pagination.pageCount);
        setLoading(false);
      } catch (error) {
        console.log("Failed to load fee structure");
        setLoading(false);
      }
    };

    fetchFeeStructure();
  }, [currentPage, pageSize]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);

    if (diffInYears > 0) return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
    if (diffInMonths > 0) return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
    if (diffInWeeks > 0) return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
    if (diffInDays > 0) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    if (diffInHours > 0) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    if (diffInMinutes > 0) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    return 'Just now';
  };

  return (
    <div className='bg-background'>
      <div className="flex flex-col text-center w-full mb-4">
        <h1 className="sm:text-5xl text-4xl font-vidaloka font-semibold title-font my-4 text-gray-900">
          Fees Structure
        </h1>
        <p className="lg:w-2/3 mx-auto font-martel text-lg leading-relaxed">
          Jaycee School Fees Structure
        </p>
      </div>
      <div className="container mx-auto p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white font-martel rounded-md">
              <tr>
                <th className="py-2 px-4 border-x border-gray-300 text-center">Name</th>
                <th className="py-2 px-4 border-x border-gray-300 text-center">Description</th>
                <th className="py-2 px-4 border-x border-gray-300 text-center">Last Updated</th>
                <th className="py-2 px-4 text-center">File</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                // Render skeleton loaders
                Array.from({ length: 2 }).map((_, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4 text-left"><Skeleton /></td>
                    <td className="py-2 px-4 text-left"><Skeleton /></td>
                    <td className="py-2 px-4 text-left"><Skeleton /></td>
                    <td className="py-2 px-4 text-left"><Skeleton /></td>
                  </tr>
                ))
              ) : (
                feeStructureData.map(item => (
                  <tr key={item.id} className="border-b font-karla">
                    <td className="py-2 px-4 text-center border-x border-gray-300">{item.attributes.Name}</td>
                    <td className="py-2 px-4 text-center border-x border-gray-300">{item.attributes.Description}</td>
                    <td className="py-2 px-4 text-center border-x border-gray-300">{getRelativeTime(item.attributes.updatedAt)}</td>
                    <td className="py-2 px-4 text-center">
                      {item.attributes.File.data && (
                        <a
                          href={item.attributes.File.data.attributes.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline block"
                        >
                          {item.attributes.File.data.attributes.name}
                        </a>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4 font-karla">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;