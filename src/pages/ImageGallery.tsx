import React, { useEffect, useState } from "react";
import axios from "axios";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const GalleryComponent: React.FC = () => {
    const [lightbox, setLightboxImages] = useState<any[]>([]);
    const [openLightbox, setOpenLightbox] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchGallery = async () => {
            try {
                setLoading(true)
                const resp = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/galleries?populate=*`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.REACT_APP_PUBLIC_KEY}`,
                        },
                    }
                );
                const lightboxUrls = resp.data.data.reduce((acc: string[], ele: any) => {
                    return acc.concat(ele?.attributes?.galleryImages?.data.map((item: any) => item?.attributes?.url));
                }, []);
                setLightboxImages(lightboxUrls.filter((url:any) => url)); // Remove undefined/null entries
            } catch (error) {
                console.error("Error fetching gallery data", error);
            } finally {
                setLoading(false)
            }
        };
        fetchGallery();
    }, []);

    const openImageInLightbox = (index: number) => {
        setPhotoIndex(index);
        setOpenLightbox(true);
    };

    return (
        <>
            <h2 className='text-secondary font-semibold text-center text-5xl font-vidaloka my-8'>Image Gallery</h2>
            <div className="grid grid-cols-1 p-2 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
                
                {loading ? Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="border-b">
                      <Skeleton height={200} baseColor="lightgray" />
                  </div>
                )):
                (<>
                {lightbox.map((image, index) => (
                    <div 
                        onClick={()=> setOpenLightbox(true)}
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        key={image.id} 
                        className="relative overflow-hidden aspect-w-16 aspect-h-9 rounded-lg shadow-md"
                    >
                        <img
                            onClick={()=> openImageInLightbox(index)}
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                            src={image}
                            alt={image}
                        />
                    </div>
                ))}</>)}
            </div>
            <Lightbox
                open={openLightbox}
                close={() => setOpenLightbox(false)}
                index={photoIndex}
                slides={lightbox.map((galleryItem) => ({
                    src: galleryItem,
                }))}
            />
        </>
    );
};

export default GalleryComponent;
