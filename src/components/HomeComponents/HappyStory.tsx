import banner from "../../assets/banner2.png";
import { MdStar } from "react-icons/md";

const HappyStory = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between gap-8 h-auto mt-5">
        {/* Left Image */}
        <div className="w-full md:w-1/2 rounded-3xl overflow-hidden">
          <img
            src={banner}
            alt="banner"
            className="w-full h-[200px] md:h-[400px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-[24px] text-[#183369] font-semibold">
            Happy Family
          </h2>
          <p className="text-yellow-300 text-[28px] my-3 flex">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </p>
          <p className="mt-4 text-[20px] md:text-[24px] text-[#152C5B] font-medium font-poppins">
            What a great trip with my family and I should try again next time
            soon ...
          </p>
          <p className="text-[16px] text-[#183369]">Adi, UI/UX Designer</p>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg w-full md:w-auto">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HappyStory;
