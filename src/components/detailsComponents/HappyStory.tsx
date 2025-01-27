import { MdStar } from "react-icons/md";

const HappyStory = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 h-auto md:h-[541px] mt-5">
        {/* Image Section */}
        <div className="w-full md:w-1/2 rounded-3xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/dbrub0d6r/image/upload/v1737980420/picture_pk0hj4.png"
            alt="banner"
            className="w-full h-auto md:h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center md:w-1/2">
          <h2 className="text-[20px] md:text-[24px] text-[#183369] font-semibold">
            Happy Family
          </h2>
          <p className="text-yellow-300 text-[24px] md:text-[28px] my-3 flex">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </p>
          <p className="mt-2 md:mt-4 text-[20px] md:text-[32px] text-[#152C5B] font-[400] font-poppins leading-[48px]">
            As a wife I can pick a great trip with my own lovely family ...
            thank you!
          </p>
          <p className="text-[16px] md:text-[18px] text-[#183369] font-[300] mt-2 leading-[27px]">
            Megan, Product Manager{" "}
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg self-start">
            Read Our Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default HappyStory;
