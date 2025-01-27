import staycation from "../../assets/Staycation.png";

const Footer = () => {
  return (
    <section className="bg-white border-t border-b-[#183369]-500 w-full">
      <div className="container my-3 mx-auto">
        <div className="flex flex-col md:flex-row gap-5 justify-between p-5">
          {/* Left Section */}
          <div className="flex flex-col items-start">
            <img
              className="h-[39px] w-[137px]"
              src={staycation}
              alt="staycation"
            />
            <p className="leading-[27px] text-lg font-poppins text-[#B0B0B0] mt-2">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>

          {/* For Beginners Section */}
          <div className="flex flex-col items-start">
            <h1 className="text-lg font-medium font-poppins text-[#152C5B]">
              For Beginners
            </h1>
            <p className="leading-[27px] text-base font-poppins text-[#B0B0B0]">
              New Account Book a Room Payments
            </p>
          </div>

          {/* Explore Us Section */}
          <div className="flex flex-col items-start">
            <h1 className="text-lg font-medium font-poppins text-[#152C5B]">
              Explore Us
            </h1>
            <p className="leading-[27px] text-base font-poppins text-[#B0B0B0]">
              About Privacy Policy Terms & Conditions
            </p>
          </div>

          {/* Getting in Touch Section */}
          <div className="flex flex-col items-start">
            <h1 className="text-lg font-medium font-poppins text-[#152C5B]">
              Getting Touch
            </h1>
            <p className="leading-[27px] text-base font-poppins text-[#B0B0B0]">
              About Privacy Policy Terms & Conditions.
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <h1 className="text-center text-lg mt-4 font-poppins leading-[27px] text-[#B0B0B0]">
          Copyright 2019 . All rights reserved . Staycation
        </h1>
      </div>
    </section>
  );
};

export default Footer;
