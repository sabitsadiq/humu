"use client";
import React from "react";
import { RiCloseFill } from "react-icons/ri";
import Link from "next/link";
const Sidebar = ({ isOpen, toggleSide }) => {
  return (
    <div
      className={`w-screen h-screen ${
        isOpen ? "fixed" : "hidden"
      } top-0 left-0 pl-4 bg-gray-500 z-20 grid text-white justify-items-start items-start pt-8`}
    >
      <div
        className="absolute top-0 right-0 mr-[30px] mt-[10px] text-[24px]"
        onClick={toggleSide}
      >
        <RiCloseFill />
      </div>
      <div className="flex flex-col gap-2 text-[18px] font-bold ">
        <Link className="hover:text-[#042F88]" href="/">
          About
        </Link>
        <Link className="hover:text-[#042F88]" href="/">
          Features
        </Link>
        <Link className="hover:text-[#042F88]" href="/">
          Reviews
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
