import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';

interface SyllabusMedia {
  id: number;
  attributes: {
    name: string;
    url: string;
    ext: string;
    mime: string;
    formats: {
      large?: {
        url: string;
      };
      medium?: {
        url: string;
      };
      small?: {
        url: string;
      };
      thumbnail?: {
        url: string;
      };
    } | null;
  };
}

interface SyllabusInterface {
  id: number;
  attributes: {
    syllabus_name: string;
    syllabus_date: string;
    syllabus_media: {
      data: SyllabusMedia;
    };
  };
}

interface PaginationMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

const Syllabus = () => {
  const [syllabusData, setSyllabusData] = useState<SyllabusInterface[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(25);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSyllabus = async () => {
      try {
        setLoading(true);
        const response = await axios.get<{ data: SyllabusInterface[], meta: PaginationMeta }>(
          `${process.env.REACT_APP_API_URL}/api/syllabi?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_PUBLIC_KEY}`
            }
          }
        );
        setSyllabusData(response.data.data);
        setTotalPages(response.data.meta.pagination.pageCount);
        setLoading(false);
      } catch (error) {
        console.log("Failed to load syllabus data");
        setLoading(false);
      }
    };

    fetchSyllabus();
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

  return (
    <div className='bg-background'>
      <div className="flex flex-col text-center w-full mb-4">
        <h1 className="sm:text-5xl text-4xl font-semibold title-font my-4 text-gray-900">
          Syllabus
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Stay updated with the latest syllabi.
        </p>
      </div>
      <div className="container mx-auto p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2 px-4 text-left w-2/4">Name</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">File</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4 text-left w-2/4">
                      <Skeleton />
                    </td>
                    <td className="py-2 px-4 text-left">
                      <Skeleton />
                    </td>
                    <td className="py-2 px-4 text-left">
                      <Skeleton />
                    </td>
                  </tr>
                ))
              ) : (
                syllabusData.map(syll => (
                  <tr key={syll.id} className="border-b">
                    <td className="py-2 px-4 text-left w-2/4">{syll.attributes.syllabus_name}</td>
                    <td className="py-2 px-4 text-left">{new Date(syll.attributes.syllabus_date).toLocaleDateString()}</td>
                    <td className="py-2 px-4 text-left">
                      {syll.attributes.syllabus_media.data && (
                        <Link
                          to={syll.attributes.syllabus_media.data.attributes.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline block"
                        >
                          {syll.attributes.syllabus_media.data.attributes.name}
                        </Link>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
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

export default Syllabus;