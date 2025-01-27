import Heading from "../common/header/Heading";

const MostPickUp = () => {
  return (
    <section className="container mx-auto px-3 mt-5">
      <Heading title="Most Pick" />
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* Left Image */}
        <div className="w-full md:w-[50%] h-[460px]">
          <img
            src="https://res.cloudinary.com/dbrub0d6r/image/upload/v1737758620/featured1_axuwzf.png"
            alt="featured1"
            className="overflow-hidden rounded-3xl w-full h-[200px] md:h-full object-cover"
          />
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full h-[460px]">
          <div className="overflow-hidden">
            <img
              src="https://res.cloudinary.com/dbrub0d6r/image/upload/v1737758620/featured1_axuwzf.png"
              alt="featured1"
              className="overflow-hidden rounded-3xl w-full h-[200px] md:h-full object-cover"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="https://res.cloudinary.com/dbrub0d6r/image/upload/v1737758620/featured1_axuwzf.png"
              alt="featured1"
              className="overflow-hidden rounded-3xl w-full h-[200px] md:h-full object-cover"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="https://res.cloudinary.com/dbrub0d6r/image/upload/v1737758620/featured1_axuwzf.png"
              alt="featured1"
              className="overflow-hidden rounded-3xl w-full h-[200px] md:h-full object-cover"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="https://res.cloudinary.com/dbrub0d6r/image/upload/v1737758620/featured1_axuwzf.png"
              alt="featured1"
              className="overflow-hidden rounded-3xl w-full h-[200px] md:h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostPickUp;
