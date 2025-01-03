"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [attr, setAttr] = useState("hidden");
  const [attr2, setAttr2] = useState("block");
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
    setAttr(isOpen ? "hidden" : "block");
    setAttr2(isOpen ? "block" : "hidden");
  };
  return (
    <>
      <div>
        <header>
          <div className="flex justify-center bg-gray-200 items-center px-10 md:px-24  py-5">
         
            <ul className="hidden md:flex gap-24  px-14 ">
              <Link href="/">
                <li className="border-y-2 border-black px-5">Home</li>
              </Link>
              <Link href="/blogscards">
                <li>Blogs</li>
              </Link>
              <Link href="/about">
                <li>About</li>
              </Link>
              <Link href="/contact">
                <li>contact</li>
              </Link>
            </ul>
            <h1
              onClick={openMenu}
              className={`block text-2xl md:hidden text-black ${attr2}`}
            >
              <IoMenu />{" "}
            </h1>
            <h1
              onClick={openMenu}
              className={`cross ${attr} text-2xl md:hidden text-black  `}
            >
              <RxCross2 />
            </h1>
          </div>
        </header>
      </div>
      <div
        className={`menu md:hidden h-40  bg-transparent bg-gray-200 text-black w-full ${attr}`}
      >
        <ul className="grid justify-center items-center bg-gray-200 gap-3 text-center text-xl">
          <Link href="/">
            <li className="cursor-pointer ease-in duration-300 hover:text-[#712fff3d] hover:scale-[1.1]">
              Home
            </li>
          </Link>
          <Link href="/blogscards">
            <li className="cursor-pointer ease-in duration-300 hover:text-[#712fff3d] hover:scale-[1.1]">
              Blogs
            </li>
          </Link>
       
          <Link href="/about">
            <li className="cursor-pointer ease-in duration-300 hover:text-[#712fff3d] hover:scale-[1.1]">
              About
            </li>
          </Link>
          <Link href="/contact">
            <li className="cursor-pointer ease-in duration-300 hover:text-[#712fff3d] hover:scale-[1.1]">
              contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;