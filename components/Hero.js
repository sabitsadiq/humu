import React from "react";
const Hero = () => {
  return (
    <section className="w-[100%]grid grid-cols-1 md:flex  lg:mt-16">
      <div className="hidden lg:flex w-24 bg-[#AD0091]"></div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className=" bg-[url(/images/Frame-627981.png)] flex flex-col pt-24 sm:pt-[4rem] md:pt-[8rem] px-4">
          <span className="relative">
            <img
              className="absolute top-0 md:top-1 sm:top-2 lg:top-0 -left-2 w-3 h-3"
              src="/images/love.png"
            />
            <h1 className="text-[24px] md:text-[37px] lg:text-5xl font-bold text-[#fff] mb-8 sm:my-2">
              Your perfect Match is just a dm away.
            </h1>
          </span>
          <p className="text-[20px] text-white">
            Lorem ipsum dolor sit amet consectetur. Sodales tellus lorem
            suspendisse rhoncus venenatis nisl magna scelerisque. Morbi
            tincidunt urna neque neque.
          </p>
          <div className="lg:flex gap-4 md:gap-2 mt-6 mb-8">
            <div className="flex rounded-2xl lg:rounded-2xl mb-4 bg-white items-center p-2 gap-4 md:gap-2 lg:w-[170px] mx-auto xl:mx-0">
              <div className=" flex items-center gap-2 sm:font-bold mx-auto">
                <img src="/images/play-store.png" className="w-5 h-5" />
                <a href="/">GET IT ON GOOGLE STORE</a>
              </div>
            </div>
            <div className="flex rounded-2xl lg:rounded-2xl mb-4 bg-white items-center p-2 gap-4 md:gap-2 lg:w-[170px]  mx-auto xl:mx-4">
              <div className=" flex items-center gap-2 sm:font-bold mx-auto">
                <img src="/images/appleLogo.png" className="w-5 h-5" />
                <a href="/">GET IT ON APPLE STORE</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="w-[654px] h-[100%]" src="/images/couple.png" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
