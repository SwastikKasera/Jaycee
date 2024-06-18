import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Gallery = () => {

    const [gallery, setGallery] = useState([])
    useEffect(()=>{
        const fetchGallery = async ()=>{
            const resp = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/main-galleries?populate=*`,
                {
                  headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_PUBLIC_KEY}`,
                  },
                }
            );
            console.log("resp", resp.data.data);
            
        }
        fetchGallery()
    },[])
  const imageContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="container mx-auto p-4">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
        variants={imageContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="grid gap-4" variants={imageContainerVariants}>
          <motion.div variants={imageVariants}>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://pbs.twimg.com/media/FGRnP_TUUAAttG3?format=jpg&name=large"
              alt="Gallery Item 1"
            />
          </motion.div>
          <motion.div variants={imageVariants}>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://i.pinimg.com/originals/c0/7d/17/c07d17d7ca0b9f39f5aded4b6dca8f02.jpg"
              alt="Gallery Item 2"
            />
          </motion.div>
          <motion.div variants={imageVariants}>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg/1280px-Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg"
              alt="Gallery Item 3"
            />
          </motion.div>
        </motion.div>
        <motion.div className="grid gap-4" variants={imageContainerVariants}>
          <motion.div variants={imageVariants}>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://www.jagranimages.com/images/newimg/27072020/27_07_2020-shri-kashi-vishwanath-temple_20557350.jpg"
              alt="Gallery Item 4"
            />
          </motion.div>
          <motion.div variants={imageVariants}>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://www.jansatta.com/wp-content/uploads/2021/12/Kashi-Vishwanath-Mandir.png?w=1024"
              alt="Gallery Item 5"
            />
          </motion.div>
          <motion.div variants={imageVariants}>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://staticimg.amarujala.com/assets/images/2021/11/07/750x506/kashi-vishwanath-dham_1636258507.jpeg?w=674&dpr=1.0"
              alt="Gallery Item 6"
            />
          </motion.div>
        </motion.div>
        <motion.div className="grid gap-4" variants={imageContainerVariants}>
          <motion.div variants={imageVariants}>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://staticimg.amarujala.com/assets/images/2020/01/13/750x506/kashi-vishwanath-mandir-varanasi_1578924152.png?w=700&dpr=2.0"
              alt="Gallery Item 7"
            />
          </motion.div>
          <motion.div variants={imageVariants}>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/800px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg"
              alt="Gallery Item 8"
            />
          </motion.div>
          <motion.div variants={imageVariants}>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/2/25/Chet_Singh_Ghat_in_Varanasi.jpg"
              alt="Gallery Item 9"
            />
          </motion.div>
        </motion.div>
        <motion.div className="grid gap-4" variants={imageContainerVariants}>
          <motion.div variants={imageVariants}>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://staticimg.amarujala.com/assets/images/2020/01/13/750x506/kashi-vishwanath-mandir-varanasi_1578924152.png?w=700&dpr=2.0"
              alt="Gallery Item 7"
            />
          </motion.div>
          <motion.div variants={imageVariants}>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/800px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg"
              alt="Gallery Item 8"
            />
          </motion.div>
          <motion.div variants={imageVariants}>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/2/25/Chet_Singh_Ghat_in_Varanasi.jpg"
              alt="Gallery Item 9"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Gallery;