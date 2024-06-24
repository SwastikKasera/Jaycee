import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface NoticeMedia {
  id: number;
  attributes: {
    name: string;
    url: string;
    formats?: {
      small?: {
        url: string;
      };
      medium?: {
        url: string;
      };
      large?: {
        url: string;
      };
      thumbnail?: {
        url: string;
      };
    };
  };
}

interface Notice {
  id: number;
  attributes: {
    notice_name: string;
    notice_date: string;
    notice_media: {
      data: NoticeMedia[];
    };
  };
}

const NoticeBoard = () => {
  const [noticeData, setNoticeData] = useState<Notice[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(5);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/notice-boards/?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_PUBLIC_KEY}`
          }
        });
        setNoticeData(response?.data?.data);
        setTotalPages(response?.data?.meta?.pagination?.pageCount);
        setLoading(false);
      } catch (error) {
        console.log("Failed to load notice board");
        setLoading(false);
      }
    };

    fetchNotices();
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
        <h1 className="sm:text-5xl text-4xl font-vidaloka font-semibold title-font my-4 text-gray-900">
          Notice Board
        </h1>
        <p className="lg:w-2/3 mx-auto font-martel text-lg leading-relaxed">
          Stay updated with the latest announcements and events.
        </p>
      </div>
      <div className="container mx-auto p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white font-martel rounded-md">
              <tr>
                <th className="py-2 px-4 text-left w-2/4">Name</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">File</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                // Render skeleton loaders
                Array.from({ length: pageSize }).map((_, index) => (
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
                noticeData.map(notice => (
                  <tr key={notice.id} className="border-b font-karla">
                    <td className="py-2 px-4 text-left w-2/4">{notice?.attributes?.notice_name}</td>
                    <td className="py-2 px-4 text-left">{new Date(notice?.attributes?.notice_date).toLocaleDateString()}</td>
                    <td className="py-2 px-4 text-left">
                      {notice?.attributes?.notice_media?.data !== null && notice?.attributes?.notice_media?.data.map(media => (
                        <a
                          key={media?.id}
                          href={`${media.attributes.formats?.large?.url || media.attributes.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline block"
                        >
                          {media?.attributes?.name}
                        </a>
                      ))}
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

export default NoticeBoard;
