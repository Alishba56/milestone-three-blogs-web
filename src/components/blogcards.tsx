import Image from "next/image";
import React from "react";
import img from "../images/crypto.png";
import img2 from "../images/btc.png";
import Link from "next/link";
import { Data } from "../data/top";
import { motion, AnimatePresence } from "framer-motion";

const blogcards: React.FC = () => {
  return (
    <div className="bg-gray-600 py-10">
      <div className="text-center ">
        <h2 className="text-3xl font-extrabold text-gray-200 ">Featured post</h2>
        <p className="text-gray-200 text-xl my-9">
          Create and publish blog articles with rich formatting, images, and multimedia.
        </p>
      </div>
      <div className="container">
        <AnimatePresence mode="wait">
          <Link key={Data[8].slug} href={`blog/${Data[8].slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 2, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="my-8"
            >
              <div
                className="flex flex-col items-center bg-gray-200 border md:h-[50vh] rounded-lg shadow md:flex-row md:max-w-[50rem] hover:bg-gray-100"
              >
                <Image
                  className="object-cover w-full rounded-t-lg h-96 md:h-[50vh] md:w-[60vh] md:rounded-none md:rounded-s-lg"
                  src={img}
                  alt=""
                />
                <div className="flex flex-col p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    The Rise of Cryptocurrencies: A Revolution in Finance
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Cryptocurrencies have emerged as a revolutionary force in the
                    financial world, challenging traditional systems and offering
                    new possibilities for individuals and businesses.
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link key={Data[9].slug} href={`blog/${Data[9].slug}`}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-end my-8"
            >
              <div
                className="flex flex-col items-center bg-gray-200 border md:h-[50vh] rounded-lg py-32 shadow md:flex-row md:max-w-[50rem] hover:bg-gray-100"
              >
                <div className="flex flex-col p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Bitcoin: The First Cryptocurrency
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Bitcoin, often referred to as digital gold, is the first and
                    most well-known cryptocurrency. 1 Created in 2009 by an
                    anonymous individual or group known as Satoshi Nakamoto, 2
                    Bitcoin revolutionized finance by introducing a decentralized
                    digital currency. 3
                  </p>
                </div>
                <Image
                  className="object-cover w-full rounded-t-lg h-96 md:h-[50vh] md:w-[60vh] md:rounded-md md:rounded-s-lg"
                  src={img2}
                  alt=""
                />
              </div>
            </motion.div>
          </Link>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default blogcards;