import React from "react";
import { Link } from "react-router-dom";

const Headings = () => {
  return (
    <div className="px-4">
      {/* Breadcrumb Navigation */}
      <div className="text-lg leading-[27px] mt-4 font-poppins flex flex-col md:flex-row gap-2 md:gap-5 cursor-pointer">
        <Link to={"/"} className="text-[#B0B0B0] font-[400]">
          Home
        </Link>
        <span className="hidden md:inline">/</span>
        <span className="font-[400] text-[#152C5B]">House Details</span>
      </div>

      {/* Heading and Subheading */}
      <div className="flex flex-col justify-center items-center text-center mt-6">
        <h1 className="text-[#152C5B] text-[32px] md:text-[42px] font-poppins leading-[48px] md:leading-[68px] font-semibold">
          Montigo Resort
        </h1>
        <p className="text-base md:text-lg leading-[24px] md:leading-[27px] mb-5 mt-4 font-poppins">
          Rio De Janeiro, Brazil
        </p>
      </div>
    </div>
  );
};

export default Headings;
