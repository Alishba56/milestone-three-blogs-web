"use client";

import { Data as data } from "../data/top";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(timer); 
  }, [index]);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === 9 ? 0 : prevIndex + 1));
  }; 

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  return (
    <div className="w-[100%] h-screen bg-gray-300">
      <h1 className="text-4xl font-bold text-black text-center pt-8">Top Blogs</h1>
      <div className="flex flex-row justify-center h-[60vh] md:h-[65vh] w-[100%] gap-12 pb-20 py-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[90%] relative h-[70vh] overflow-hidden rounded-xl"
        >
          <Image 
            src={data[index].image} 
            alt={data[index].title} 
            className="kenburns-top absolute top-0 h-full w-full object-cover" 
            width={0} 
            height={0} 
          />
          <div>
            <FaArrowRight 
              onClick={handleNext} 
              className="absolute z-10 top-[47%] right-0 text-white text-3xl bg-gray-400 rounded-full p-2 cursor-pointer mx-3" 
            />
            <FaArrowLeft 
              onClick={handlePrev} 
              className="absolute z-10 top-[47%] left-0 text-white text-3xl bg-gray-400 rounded-full p-2 cursor-pointer mx-3" 
            />
            <div className="z-30 flex justify-center w-[100%] absolute top-[80%]">
              {data[index].link && (
                <Link key={index} href={`blog/${data[index].slug || ''}`}>
                  <button className="text-white text-xl bg-[#09003d] rounded-full py-1 px-3 cursor-pointer mx-3">
                    Read Blog
                  </button>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}