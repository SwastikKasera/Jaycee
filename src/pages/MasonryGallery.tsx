import React, { useState, useEffect } from 'react';

interface Image {
  id: string;
  url: string;
  width: number;
  height: number;
}

const Gallery: React.FC = () => {
  const imagesArr = [
    "https://res.cloudinary.com/dxlqy4p04/image/upload/v1718736797/IMG_20230211_142059_e4bb632dcf.jpg",
    "https://res.cloudinary.com/dxlqy4p04/image/upload/v1718712381/person_6203bf80a7.jpg",
    "https://res.cloudinary.com/dxlqy4p04/image/upload/v1718736745/IMG_20230124_114021_fa104266b0.jpg",
    "https://res.cloudinary.com/dxlqy4p04/image/upload/v1718712381/person_6203bf80a7.jpg",
    "https://res.cloudinary.com/dxlqy4p04/image/upload/v1718736734/IMG_20230126_084106_2979db2f77.jpg"
  ]
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    // Fetch images from an API
    const fetchImages = async () => {
      const response = await fetch('/api/images');
      const data = await response.json();
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="bg-gray-200 rounded-lg overflow-hidden"
          style={{
            paddingTop: `${(image.height / image.width) * 100}%`,
            position: 'relative',
          }}
        >
          <img
            src={image.url}
            alt={`Image ${image.id}`}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
