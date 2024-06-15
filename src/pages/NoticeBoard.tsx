import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
  const [pageSize] = useState(5); // You can adjust the page size as needed

  useEffect(() => {
    const fetchNotices = async () => {
      const response = await axios.get(`http://localhost:1337/api/notice-boards/?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`, {
        headers: {
          Authorization: 'Bearer fa628a6f55109fcb923bec6f659f52cc6943c60f8151ab82ab12b0b10d32001d8bee4c44e276797d6918c671a467c5ac71952150b049f1f7990e30f750e606a97083d9d414a661652f11f2c53eb2d98f622075cb73a9902efdff5f250ac7c85cbcf31623cc6124010e32211f22709413569bf85f95a98481545e99cbf676c5f2'
        }
      });

      setNoticeData(response.data.data);
      setTotalPages(response.data.meta.pagination.pageCount);
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
    <>
      <div className="flex flex-col text-center w-full mb-4">
        <h1 className="sm:text-5xl text-4xl font-semibold title-font my-4 text-gray-900">
          Notice Board
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Stay updated with the latest announcements and events.
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
              {noticeData.map(notice => (
                <tr key={notice.id} className="border-b">
                  <td className="py-2 px-4 text-left w-2/4">{notice.attributes.notice_name}</td>
                  <td className="py-2 px-4 text-left">{new Date(notice.attributes.notice_date).toLocaleDateString()}</td>
                  <td className="py-2 px-4 text-left">
                    {notice.attributes.notice_media.data.map(media => (
                      <a
                        key={media.id}
                        href={`http://localhost:1337${media.attributes.formats?.large?.url || media.attributes.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline block"
                      >
                        {media.attributes.name}
                      </a>
                    ))}
                  </td>
                </tr>
              ))}
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
    </>
  );
};

export default NoticeBoard;
