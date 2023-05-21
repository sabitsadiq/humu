import React from "react";
import { RiCloseFill } from "react-icons/ri";
import Link from "next/link";
const Heros = ({ isOpen, isClose, toggleSide }) => {
  return (
    <div
      className={`w-screen h-screen ${
        isOpen ? "fixed" : "hidden"
      } top-0 left-0 bg-gray-500 z-20 grid text-white places-items-center`}
    >
      <div
        className={
          isClose === true
            ? "hidden"
            : "absolute top-0 right-0 mr-[30px] mt-[10px] text-[24px]"
        }
        onclick={toggleSide}
      >
        <RiCloseFill />
      </div>
      <div className="flex flex-col gap-4 text-[18px]">
        <Link href="/">About</Link>
        <Link href="/">Features</Link>
        <Link href="/">Reviews</Link>
      </div>
    </div>
  );
};
export default Heros;
