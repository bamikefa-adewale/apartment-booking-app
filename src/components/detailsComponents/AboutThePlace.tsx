import Heading from "../common/header/Heading";
import { FaRegCalendarMinus } from "react-icons/fa6";
import { AboutIcon } from "../constants/HousesWithBackYard";

const AboutThePlace = () => {
  return (
    <section className="container mx-auto mt-5 px-4">
      <Heading title="About the Place" />

      <div className="flex flex-col md:flex-row gap-5 md:h-[550px] justify-center">
        {/* Left Text and Icons */}
        <div className="w-full text-[15px] text-[#B0B0B0] font-poppins leading-[30px]">
          <p className="my-3 leading-[27px]">
            Lorem ipsum dolor for your design, website, and copywriting works.
            Use our tool to generate chunks of text that is free from repetition
            and copyright claims. Take Action. 3D Images Increase Sales. Learn
            More. Sell More Online Today.
          </p>
          <p className="my-3">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="my-3">
            Design is a plan or specification for the construction of an object
            or system or for the implementation of an activity or process, or
            the result of that plan or specification in the form of a prototype,
            product or process. The national agency for design: enabling
            Singapore to use design for economic growth and to make lives
            better.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 my-5">
            {AboutIcon.map((item, i) => (
              <div key={i} className="text-center">
                <div>
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-[30px] h-[30px] mx-auto"
                  />
                </div>
                <div className="flex flex-col items-center mt-2">
                  <h6 className="text-xl text-black">{item.available_room}</h6>
                  <span>{item.room_name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Booking Section */}
        <div className="w-full md:w-[45%] h-auto md:h-[450px] flex flex-col items-center px-6 py-5 sm:mb-4 border border-[#E5E5E5] rounded-4xl">
          <h1 className="text-[20px] md:text-[24px] leading-[36px] font-medium text-[#152C5B]">
            Start Booking
          </h1>
          <h2 className="my-2 text-[#1ABC9C] text-[28px] md:text-[36px] font-poppins font-medium">
            $280{" "}
            <span className="text-[#B0B0B0] font-light text-sm md:text-base">
              per night
            </span>
          </h2>
          <p className="text-base md:text-lg text-black">
            How long you will stay?
          </p>
          <div className="bg-[#F5F6F8] my-2 h-[3rem] flex items-center justify-between w-full max-w-[18rem] rounded-lg border">
            <p className="bg-red-500 p-2 h-full cursor-pointer">-</p>
            <span>2 night</span>
            <p className="bg-green-500 p-2 h-full cursor-pointer">+</p>
          </div>
          <p className="text-black text-base md:text-lg font-poppins my-2">
            Pick a Date
          </p>
          <div className="bg-[#F5F6F8] my-2 h-[3rem] flex items-center w-full max-w-[18rem] rounded-lg border">
            <div className="flex items-center justify-center bg-[#152C5B] h-full w-[3rem] rounded-l-lg">
              <span className="text-white text-lg cursor-pointer">
                <FaRegCalendarMinus />
              </span>
            </div>
            <span className="px-2 text-black font-poppins">
              20 Jan - 22 Jan
            </span>
          </div>
          <p className="my-2 text-sm md:text-base">
            You will pay $480 USD for 2 nights
          </p>
          <button className="bg-blue-500 shadow-lg shadow-blue-500/50 py-3 md:py-4 text-center cursor-pointer text-white text-base md:text-lg w-full max-w-[18rem] rounded-xl ">
            Continue Book
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutThePlace;
