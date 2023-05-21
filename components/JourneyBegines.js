import React from "react";
import Title from "../components/Title";
import Heading from "../components/Heading";
const JourneyBegines = () => {
  return (
    <section className="pt-10  z-20 -pb-[6] bg-[url('/images/Rectangle-10.png')] bg-cover bg-center">
      <div className="w-[90%] mx-auto pb-96 mb:pb-[12rem]">
        <div className="sm:pb-2">
          <Title text="Journey begins" />
          <Heading text="Meet your dream partner" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 mt-4">
          <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
            <img
              className="md:w-[180px] lg:w-[250px]"
              src="/images/Rectangle-11.png"
            />
            <img
              className="md:w-[180px] lg:w-[250px]"
              src="/images/Rectangle-12.png"
            />
          </div>
          <div className="w-[90%] lg:pl-4 my-auto ">
            <Heading text="Your perfect Match is just a dm away." />
            <p>
              Lorem ipsum dolor sit amet consectetur. Sodales tellus lorem
              suspendisse rhoncus venenatis nisl magna scelerisque. Morbi
              tincidunt urna neque neque.
            </p>
            <button className="flex px-12 py-2 border-none text-[20px] leading-[26.6px] rounded-[32px] items-center bg-[#042F88] text-[#fff] mt-6 mb-8 hover:bg-[#fff] hover:text-[black] hover:ring-[#042F88] ring-1">
              button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyBegines;
