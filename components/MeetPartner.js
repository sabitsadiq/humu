import React from "react";
import Heading from "../components/Heading";
const MeetPartner = () => {
  return (
    <section className="">
      <div className="p-6 md:w-[60%] md:h-[200px]  mx-auto mb:pt-12 flex flex-col items-start md:center md:items-center pb-12">
        <Heading text="Meet your dream partner" />
        <p className="sm:text-center">
          Lorem ipsum dolor sit amet consectetur. Sodales tellus lorem
          suspendisse rhoncus venenatis nisl magna scelerisque. Morbi tincidunt
          urna neque neque.
        </p>
        <button className="flex px-14 py-2 ring-[#042F88] ring-1 text-[20px] leading-[26.6px] rounded-[32px] items-center  align-center text-[#000000] mt-6 mb-8 hover:bg-[#042F88] hover:text-white">
          Find Now
        </button>
      </div>
    </section>
  );
};

export default MeetPartner;
