import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

interface ImageData {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      large: ImageFormat;
      small: ImageFormat;
      medium: ImageFormat;
      thumbnail: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
  };
}

interface GalleryImage {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: ImageData;
    };
  };
}

const Gallery: React.FC = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const resp = await axios.get('http://localhost:1337/api/galleries?populate=*', {
          headers: {
            Authorization: 'Bearer fa628a6f55109fcb923bec6f659f52cc6943c60f8151ab82ab12b0b10d32001d8bee4c44e276797d6918c671a467c5ac71952150b049f1f7990e30f750e606a97083d9d414a661652f11f2c53eb2d98f622075cb73a9902efdff5f250ac7c85cbcf31623cc6124010e32211f22709413569bf85f95a98481545e99cbf676c5f2'
          }
        });
        console.log('resp', resp.data);
        setGalleryImages(resp.data.data);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container p-5 mx-auto flex flex-wrap">
        <div className="flex flex-wrap md:-m-2 -m-1">
          {galleryImages.map((image, index) => (
            <div key={index} className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                loading='lazy'
                src={`http://localhost:1337${image?.attributes?.image?.data?.attributes?.url}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
