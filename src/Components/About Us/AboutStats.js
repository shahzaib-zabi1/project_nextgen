import React from "react";
import CountUp from "react-countup";

const AboutStats = () => {
  return (
    <div className="w-full lg:mt-16">
      {/* Heading Section */}
      <p className="title-font text-orange-400 sec-heading font-medium text-3xl mb-2">
        About us
      </p>
      <h1 className="font-nunito hero-text font-black text-black text-2xl lg:text-5xl">
        Welcome to <i className="fa fa-utensils text-orange-400"></i> Restoran
      </h1>

      {/* Description */}
      <p className="leading-relaxed mt-5 text-gray-600">
        Restoran is a proud Pakistani culinary destination where tradition meets flavor. From sizzling kebabs to aromatic biryanis, we serve happiness on every plate.
      </p>


      {/* Stats Section */}
      <div className="flex flex-wrap mt-10 gap-y-6">
        {/* Years of Experience */}
        <div className="p-4 sm:w-1/2 w-full">
          <div className="border-l-4 border-orange-400 pl-4">
            <h2 className="title-font font-medium text-3xl text-gray-900 hero-text">
              <CountUp start={10} end={28} duration={3} />
            </h2>
            <p className="leading-relaxed text-gray-500 font-semibold">Years of</p>
            <h1 className="font-black hero-text uppercase text-black text-lg lg:text-2xl">
              Experience
            </h1>
          </div>
        </div>

        {/* Popular Chefs */}
        <div className="p-4 sm:w-1/2 w-full">
          <div className="border-l-4 border-orange-400 pl-4">
            <h2 className="title-font font-medium text-3xl text-gray-900 hero-text">
              <CountUp start={90} end={300} duration={5} />
            </h2>
            <p className="leading-relaxed text-gray-500 font-semibold">Popular</p>
            <h1 className="font-black hero-text uppercase text-black text-lg lg:text-2xl">
              Chefs
            </h1>
          </div>
        </div>
      </div>

      {/* Read More Button */}
      <div className="mt-6">
        <button className="inline-flex text-white capitalize font-bold shadow-lg bg-orange-400 px-10 py-3 hover:bg-orange-500 transition-all duration-200 rounded text-lg">
          Read more
        </button>
      </div>
    </div>
  );
};

export default AboutStats;
