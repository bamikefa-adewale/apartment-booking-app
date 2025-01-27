import banner from "../../assets/banner.png";

const Hero = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="flex flex-col md:flex-row justify-between gap-10 mt-10">
        {/* Text Section */}
        <div className="flex flex-col justify-center md:w-[50%]">
          <h2 className="text-[#183369] text-2xl md:text-4xl my-3 font-semibold">
            Forget Your Main Work, Start Holiday Now!
          </h2>
          <p className="md:mt-4 text-sm md:text-lg font-poppins">
            We provide you what you need to enjoy your holiday with family. Time
            to make another memorable moments.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-500 cursor-pointer text-white rounded-lg">
            Show More
          </button>
        </div>

        {/* Banner Image */}
        <div className="w-full md:w-[50%] rounded-3xl overflow-hidden">
          <img
            src={banner}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
