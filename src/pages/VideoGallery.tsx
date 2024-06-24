import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import { RiUploadCloud2Line } from "react-icons/ri";

interface VideoAttributes {
  videoName: string;
  videoLink: string;
  videoDescrption: string | null;
  videoDate: string | null;
  publishedAt: string;
}

interface VideoData {
  id: number;
  attributes: VideoAttributes;
}

interface ApiResponse {
  data: VideoData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const VideoGallery: React.FC = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState<{[key: number]: boolean}>({});

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/video-galleries?populate=*`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_PUBLIC_KEY}`
          }
        });
        setVideos(response.data.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const getYoutubeVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    };
    return new Intl.DateTimeFormat('en-IN', options).format(new Date(dateString));
  };

  const openLinkInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const truncateText = (text: string, maxLength: number) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const toggleDescription = (videoId: number) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [videoId]: !prev[videoId]
    }));
  };

  return (
    <>
      <div className='my-8'>
        <h1 className='text-5xl text-center font-vidaloka'>Discover Our Video Gallery</h1>
        <p className='font-martel text-center px-20 mt-4'>Discover a variety of captivating content, from interviews and behind-the-scenes footage to performances and tutorials. Whether you're here to learn, be inspired, or enjoy entertainment, our gallery engages with stories, creativity, and passion in every frame.</p>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => {
          const videoId = getYoutubeVideoId(video.attributes.videoLink);
          const isExpanded = expandedDescriptions[video.id] || false;
          const displayDescription = isExpanded
            ? video.attributes.videoDescrption
            : truncateText(video.attributes.videoDescrption || '', 100);

          return (
            <div key={video.id}>
              <div className="p-4 bg-white rounded-lg shadow-lg">
                {videoId && (
                  <div className="mb-2">
                    <iframe
                      width="100%"
                      height="200"
                      className='rounded-lg'
                      src={`https://www.youtube.com/embed/${videoId}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.attributes.videoName}
                    ></iframe>
                  </div>
                )}
                <h2 className="text-xl flex justify-between w-full font-bold mb-2">
                  {video.attributes.videoName}
                  <p className="flex text-xs justify-center items-center rounded-md p-1 gap-1 text-purple-800 bg-purple-200">
                    <RiUploadCloud2Line />{formatDate(video.attributes.publishedAt)}
                  </p>
                </h2>
                {video.attributes.videoDescrption && (
                  <div className="mb-2">
                    <p>{displayDescription}</p>
                    {video.attributes.videoDescrption.length > 50 && (
                      <button
                        onClick={() => toggleDescription(video.id)}
                        className="text-blue-500 hover:text-blue-700 text-sm mt-1"
                      >
                        {isExpanded ? 'See Less' : 'See More'}
                      </button>
                    )}
                  </div>
                )}
                <Button styles='w-full bg-secondary' text='Watch on Youtube' onClick={() => openLinkInNewTab(video.attributes.videoLink)} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VideoGallery;