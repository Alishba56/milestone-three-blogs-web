import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaGithub  } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { TbWorld } from 'react-icons/tb';


const footer = () => {
  return (
    <div>
        <footer className="bg-gray-200 dark:bg-gray-800">
  <div className="p-4 py-6 mx-auto  max-w-screen-xl md:p-8 lg:p-10">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
              <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                      <Link href="/" className=" hover:underline">Home</Link>
                  </li>
                  <li className="mb-4">
                      <Link href="/contact" className="hover:underline">Contact</Link>
                  </li>
                  <li className="mb-4">
                      <Link href="/about" className="hover:underline">About</Link>
                  </li>
                  <li className="mb-4">
                      <Link href="/blogscards" className="hover:underline">Blog</Link>
                  </li>
              </ul>
          </div>
          <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
              <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                      <Link href="#" className="hover:underline">Discord Server</Link>
                  </li>
                  <li className="mb-4">
                      <Link href="#" className="hover:underline">Twitter</Link>
                  </li>
                  <li className="mb-4">
                      <Link href="#" className="hover:underline">Facebook</Link>
                  </li>
                  <li className="mb-4">
                      <Link href="#" className="hover:underline">Contact Us</Link>
                  </li>
              </ul>
          </div>
          <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                      <Link href="#" className="hover:underline">Privacy Policy</Link>
                  </li>
                  <li className="mb-4">
                      <Link href="#" className="hover:underline">Licensing</Link>
                  </li>
                  <li className="mb-4">
                      <Link href="#" className="hover:underline">Terms</Link>
                  </li>
              </ul>
          </div>
       
          <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
              <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                      <Link href="#" className="hover:underline">iOS</Link>
                  </li>
                  <li className="mb-4">
                      <Link href="#" className="hover:underline">Android</Link>
                  </li>
                  <li className="mb-4">
                      <Link href="#" className="hover:underline">Windows</Link>
                  </li>
                  <li className="mb-4">
                      <Link href="#" className="hover:underline">MacOS</Link>
                  </li>
              </ul>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
      <div className="text-center">
          <Link href="#" className="block justify-center items-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
          <h2> my Blogs</h2>  
          </Link>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024-2025 <Link href="#" className="hover:underline">Blogs™</Link>. All Rights Reserved.
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
              <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                  <FaFacebookF />
                  </Link>
              </li>
              <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                   <FaXTwitter/>
                  </Link>
              </li>
              <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                  <FaGithub/>
                  </Link>
              </li>
              <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                  <TbWorld/>
                  </Link>
              </li>
          </ul>
      </div>
  </div>
</footer>
      
    </div>
  )
}

export default footer
