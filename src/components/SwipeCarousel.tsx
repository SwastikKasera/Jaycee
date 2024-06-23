import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import axios from "axios";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

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

export const SwipeCarousel: React.FC = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setImgIndex((pv) => (pv === gallery.length - 1 ? 0 : pv + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [gallery]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const resp = await axios.get<ApiResponse>(`${process.env.REACT_APP_API_URL}/api/main-galleries?populate=*`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_PUBLIC_KEY}`,
          },
        });
        setGallery(resp.data.data[0]?.attributes.mainGallery.data || []);
      } catch (error) {
        console.error("Error fetching gallery data", error);
      }
    };

    fetchGallery();
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < gallery.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} gallery={gallery} />
      </motion.div>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} gallery={gallery} />
      <GradientEdges />
    </div>
  );
};

interface ImagesProps {
  imgIndex: number;
  gallery: GalleryImage[];
}

const Images: React.FC<ImagesProps> = ({ imgIndex, gallery }) => {
  return (
    <>
      {gallery.map((img, idx) => (
        <motion.div
          key={idx}
          style={{
            backgroundImage: `url(${img.attributes.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{ scale: imgIndex === idx ? 0.95 : 0.85 }}
          transition={SPRING_OPTIONS}
          className="aspect-video w-full shrink-0 rounded-xl bg-white object-cover"
        />
      ))}
    </>
  );
};

interface DotsProps {
  imgIndex: number;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
  gallery: GalleryImage[];
}

const Dots: React.FC<DotsProps> = ({ imgIndex, setImgIndex, gallery }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {gallery.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`h-3 w-3 rounded-full transition-colors ${idx === imgIndex ? "bg-accent" : "bg-neutral-500"}`}
        />
      ))}
    </div>
  );
};

const GradientEdges: React.FC = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] " />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] " />
    </>
  );
};
