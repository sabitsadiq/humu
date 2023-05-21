import React from "react";
import { FaStar } from "react-icons/fa";
import Title from "./Title";
import Heading from "./Heading";
const ValidOption = () => {
  return (
    <section className="bg-[#EDF3FF]">
      <div className="w-[90%] mx-auto pt-12 pb-10">
        <Title text="Valid opinions" />
        <Heading text="What our members say." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto text-center">
          <div className="max-w-[218px] mx-auto py-6">
            <h1 className="text-[#000000] text-[700] text-[32px]">
              Sade thomas
            </h1>
            <p className="md:pb-8">
              “Ideal and halal way to meet a potential spouse”
            </p>
            <span className="flex items-center -p-6 justify-center gap-2">
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
            </span>
          </div>
          <div className="max-w-[218px] mx-auto py-6">
            <h1 className="text-[#000000] text-[700] text-[32px]">
              Sade thomas
            </h1>
            <p className="pb-2">
              “It's a beautiful place to meet women in a halal manner”
            </p>
            <span className="flex items-center justify-center gap-2">
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
            </span>
          </div>
          <div className="max-w-[218px] mx-auto py-6">
            <h1 className="text-[#000000] text-[700] text-[32px]">
              Sade thomas
            </h1>
            <p className="pb-2">
              “It's a beautiful place to meet women in a halal manner”
            </p>
            <span className="flex items-center justify-center gap-2">
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
            </span>
          </div>
          <div className="max-w-[218px] mx-auto py-6">
            <h1 className="text-[#000000] text-[700] text-[32px]">
              Sade thomas
            </h1>
            <p>“I'm falling in love with this app”</p>
            <span className="flex items-center pt-6 justify-center gap-2">
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValidOption;
