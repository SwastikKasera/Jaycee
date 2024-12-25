import React, { useEffect, useState, useCallback, useMemo } from 'react';
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

const FeeStructureRow: React.FC<{ item: FeeStructureItem }> = React.memo(({ item }) => {
  const relativeTime = useMemo(() => getRelativeTime(item.attributes.updatedAt), [item.attributes.updatedAt]);

  return (
    <tr className="border-b font-karla bg-neutral-700">
      <td className="py-2 px-4 text-center text-white border-x border-gray-300">{item.attributes.Name}</td>
      <td className="py-2 px-4 text-center text-white border-x border-gray-300">{item.attributes.Description}</td>
      <td className="py-2 px-4 text-center text-white border-x border-gray-300">{relativeTime}</td>
      <td className="py-2 px-4 text-center">
        {item.attributes.File.data && (
          <a
            href={item.attributes.File.data.attributes.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffc847] hover:underline block"
          >
            {item.attributes.File.data.attributes.name}
          </a>
        )}
      </td>
    </tr>
  );
});

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

const FeeStructure: React.FC = () => {
  const [feeStructureData, setFeeStructureData] = useState<FeeStructureItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(25);
  const [loading, setLoading] = useState(false);

  const fetchFeeStructure = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/fee-structures`, {
        params: {
          populate: '*',
          'pagination[page]': currentPage,
          'pagination[pageSize]': pageSize,
        },
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_PUBLIC_KEY}`
        }
      });
      setFeeStructureData(response.data.data);
      setTotalPages(response.data.meta.pagination.pageCount);
    } catch (error) {
      console.error("Failed to load fee structure", error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, pageSize]);

  useEffect(() => {
    fetchFeeStructure();
  }, [fetchFeeStructure]);

  const handlePreviousPage = useCallback(() => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  }, []);

  const handleNextPage = useCallback(() => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  }, [totalPages]);

  return (
    <div>
      <div className="flex flex-col text-center w-full mb-4">
        <h1 className="sm:text-5xl text-4xl font-vidaloka font-semibold title-font my-4 text-white">
          Fees Structure
        </h1>
        <p className="lg:w-2/3 mx-auto font-martel text-lg leading-relaxed">
          Jaycee School Fees Structure
        </p>
      </div>
      <div className="container mx-auto p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-neutral-900 text-white font-martel rounded-md">
              <tr>
                <th className="py-2 px-4 border-x border-gray-300 text-center">Name</th>
                <th className="py-2 px-4 border-x border-gray-300 text-center">Description</th>
                <th className="py-2 px-4 border-x border-gray-300 text-center">Last Updated</th>
                <th className="py-2 px-4 text-center">File</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
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
                  <FeeStructureRow key={item.id} item={item} />
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4 font-karla">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-neutral-800 text-white rounded hover:bg-neutral-800/80 disabled:opacity-50"
            aria-label="Previous page"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-neutral-800 text-white rounded hover:bg-gray-400 disabled:opacity-50"
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;