import Heading from "../common/header/Heading";
import { FaRegCalendarMinus } from "react-icons/fa6";
import { AboutIcon } from "../constants/HousesWithBackYard";
import { Minus, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useApartment } from "../../hooks/useApartment";
import DatePicker from "react-datepicker";

const AboutThePlace = () => {
  const { nights, startDate, setStartDate, handleIncrement, handleDecrement } =
    useApartment();

  const navigate = useNavigate();
  const PRICE_PER_NIGHT = 200;
  const totalPrice = PRICE_PER_NIGHT * nights;

  return (
    <section className="container mx-auto mt-80  lg:mt-5 px-4">
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
            $200
            <span className="text-[#B0B0B0] font-light text-sm md:text-base">
              per night
            </span>
          </h2>
          <p className="text-base md:text-lg text-black">
            How long you will stay?
          </p>
          <div className="bg-[#F5F6F8] my-2 h-[3rem] flex items-center justify-between w-full max-w-[18rem] rounded-lg border">
            <div
              onClick={handleIncrement}
              className="flex items-center justify-center bg-red-500 h-full w-[3rem] "
            >
              <span className="text-white text-lg cursor-pointer">
                <Plus />
              </span>
            </div>
            <span>{nights} night</span>

            <div
              onClick={handleDecrement}
              className="flex items-center justify-center bg-green-500 h-full w-[3rem] "
            >
              <span className="text-white text-lg cursor-pointer">
                <Minus />
              </span>
            </div>
          </div>
          <p className="text-black text-base md:text-lg font-poppins my-2">
            Pick a Date
          </p>
          <div className="bg-[#F5F6F8] my-2 h-[3rem] flex gap-16 items-center w-full max-w-[18rem] rounded-lg border">
            <div className="flex items-center justify-center bg-[#152C5B] h-full w-[3rem] rounded-l-lg">
              <span className="text-white text-lg cursor-pointer">
                <FaRegCalendarMinus />
              </span>
            </div>
            <span className="px-2 text-black font-poppins">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date || new Date())}
                className="px-2 text-black font-poppins bg-transparent overflow-hidden outline-none"
                dateFormat="dd/MM/yyyy"
              />
            </span>
          </div>
          <p className="my-2 text-sm md:text-base">
            You will pay ${totalPrice} USD for {nights} night
            {nights !== 1 ? "s" : ""}
          </p>
          <button
            onClick={() => navigate("/bookingpage")}
            className="bg-blue-500 shadow-lg shadow-blue-500/50 py-3 md:py-4 text-center cursor-pointer text-white text-base md:text-lg w-full max-w-[18rem] rounded-xl "
          >
            Continue Book
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutThePlace;
