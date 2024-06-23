import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos"
import 'aos/dist/aos.css';

interface ProviderMetadata {
    public_id: string;
    resource_type: string;
}

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
    provider_metadata: ProviderMetadata;
}

interface ImageAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        small: ImageFormat;
        medium: ImageFormat;
        large?: ImageFormat;
        thumbnail: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: ProviderMetadata;
    createdAt: string;
    updatedAt: string;
}

interface GalleryImage {
    id: number;
    attributes: ImageAttributes;
}

interface ApiResponse {
    data: {
        id: number;
        attributes: {
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            mainGallery: {
                data: GalleryImage[];
            };
        };
    }[];
}

const GalleryComponent: React.FC = () => {
    const [gallery, setGallery] = useState<GalleryImage[]>([]);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const resp = await axios.get<ApiResponse>(
                    `${process.env.REACT_APP_API_URL}/api/main-galleries?populate=*`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.REACT_APP_PUBLIC_KEY}`,
                        },
                    }
                );
                setGallery(resp.data.data[0]?.attributes.mainGallery.data);
            } catch (error) {
                console.error("Error fetching gallery data", error);
            }
        };
        fetchGallery();
    }, []);

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 my-4">
            {gallery.map((image) => (
                <div 
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    key={image.id} 
                    className="relative overflow-hidden aspect-w-16 aspect-h-9 rounded-lg shadow-md"
                >
                    <img
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                        src={image.attributes.url}
                        alt={image.attributes.alternativeText || image.attributes.name}
                    />
                </div>
            ))}
        </div>
    );
};

export default GalleryComponent;