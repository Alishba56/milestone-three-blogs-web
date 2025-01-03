import React from 'react';
import Image from 'next/image';
import { Data } from '../data/top';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger children animations by 0.1 seconds
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
  transition: {
    duration: 0.5,
  },
};

const Post: React.FC = () => {
  return (
    <div className="bg-gray-400 font-[sans-serif] py-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:rounded-full">
            Latest Posts
          </h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto"
          >
            {Data.slice(0, 6).map((data, index) => (
              <Link key={index} href={`/blog/${data.slug}`}>
                <motion.div variants={cardVariants} className="bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60 hover:before:opacity-80">
                  <Image
                    src={data.image}
                    alt="Blog Post 1"
                    className="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="p-6 absolute bottom-0 left-0 right-0 z-20">
                    <span className="text-sm block mb-2 text-yellow-400 font-semibold">
                      {data.date}
                    </span>
                    <h3 className="text-xl font-bold text-white">{data.title}</h3>
                    <div className="mt-4">
                      <p className="text-gray-200 text-sm">{data.description}</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Post;