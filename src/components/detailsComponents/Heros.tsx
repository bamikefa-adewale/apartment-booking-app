const Heros = () => {
  return (
    <section className="container mx-auto mt-5 px-4">
      <div className="flex flex-col md:flex-row gap-5 h-auto md:h-[400px] justify-center">
        {/* Left Image */}
        <div className="w-full h-60 md:h-full">
          <img
            src="https://res.cloudinary.com/dbrub0d6r/image/upload/v1737758620/featured1_axuwzf.png"
            alt="featured1"
            className="w-full h-full object-cover border rounded-3xl"
          />
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 w-full gap-2">
          <div className="h-60 md:h-[190px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dbrub0d6r/image/upload/v1737758620/featured1_axuwzf.png"
              alt="featured1"
              className="w-full h-full object-cover border rounded-3xl"
            />
          </div>
          <div className="h-60 md:h-[190px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dbrub0d6r/image/upload/v1737758620/featured1_axuwzf.png"
              alt="featured1"
              className="w-full h-full object-cover border rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heros;
