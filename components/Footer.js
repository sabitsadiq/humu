import React from "react";
import Title from "../components/Title";
const Footer = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row w-[90%] mx-auto">
        <div className="md:w-[40%] my-auto text-[#000000] text-[600] text-[48px] leading-[72px]">
          HuMu
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-between">
          <div className="flex flex-col gap-2">
            <Title text="Get Started" />
            <p>Partner with us</p>
            <p>Actualizing SDG</p>
          </div>
          <div className="flex flex-col gap-2">
            <Title text="About Us" />
            <p>meet the team</p>
            <p>Privacy policy</p>
            <p>Team And Condition</p>
          </div>
          <div className="flex flex-col gap-2">
            <Title text="Community" />
            <p>Upcomming Event</p>
            <p>Join Our Virtue Community</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
