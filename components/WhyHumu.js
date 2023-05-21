import React from "react";
import Title from "./Title";
import Heading from "./Heading";
const WhyHumu = () => {
  return (
    <section className="bg-[url('/images/Rectangle-13.png')] bg-cover">
      <div className="flex flex-col md:flex-row w-[90%] gap-6 mx-auto pt-[8rem] pb-16 md:pt-[23.3rem] lg:pt-[30.3rem] xl:pt-[34.3rem]">
        <div className="-mt-[10rem]">
          <Title text="why Humu" />
          <Heading text="Available features on the platform." />
          <div className="grid md:grid-cols-2 gap-2 md:w-[425px] xl:mt-28 xl:w-[500px]">
            <div className="rounded-[32px] bg-[#BCD2FF] p-6 md:px-2 md:py-4 lg:text-center xl:min-h-[190px]">
              <div className="flex gap-2 font-bold items-center xl:mt-4">
                <img className="w-3.5 h-3.5" src="/images/chat.png" />
                <h4>Chat for free</h4>
              </div>
              <p>
                It’s always FREE to see profiles, match, chat & marry on Muzz.
              </p>
            </div>
            <div className="rounded-[32px] bg-[#BCD2FF] p-6 md:p-4 lg:text-center">
              <div className="flex gap-2 font-bold items-center xl:mt-4">
                <img className="w-3.5 h-3.5" src="/images/videoCall.png" />
                <h4>Free video calling</h4>
              </div>
              <p>
                You decide who you can call and you never have to share your
                phone number.
              </p>
            </div>
            <div className="rounded-[32px] bg-[#BCD2FF] p-6 md:p-4 lg:text-center xl:min-h-[190px]">
              <div className="flex gap-2 font-bold items-center xl:mt-4">
                <img className="w-3.5 h-3.5" src="/images/privacy.png" />
                <h4>Complete privacy</h4>
              </div>
              <p>
                Keep your photos hidden and use a nickname to remain anonymous
                to friends and family
              </p>
            </div>
            <div className="rounded-[32px] bg-[#BCD2FF] p-6 md:p-2 lg:text-center ">
              <div className="flex gap-[0.4rem] md:pt-[0.5rem] font-bold items-center xl:mt-4">
                <img className="w-3.5 h-3.5" src="/images/profile.png" />
                <h4>Voice & video profile</h4>
              </div>
              <p>
                Show off your personality and stand out from the crowd by adding
                Voice & Video intros to your profile
              </p>
            </div>
          </div>
        </div>
        <div className="-p-[5rem] md:[280px]">
          <img
            className="w-[258px] xl:w-[510px] m-auto md:ml-auto"
            src="/images/phone.png"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyHumu;
