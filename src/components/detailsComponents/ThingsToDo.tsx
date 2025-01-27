import Heading from "../common/header/Heading";
import { HotelLists } from "../constants/HousesWithBackYard";

const ThingsToDo = () => {
  return (
    <section className="container mx-auto my-20">
      <Heading title="Things To Do" />
      <div className=" h-auto md:h-[315px] cursor-pointer my-2 justify-center">
        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[280px]">
          {HotelLists.map((item, i) => (
            <div
              className="rounded-2xl transition-transform p-2 duration-300 hover:scale-105 hover:shadow-lg w-full md:w-auto"
              key={i}
            >
              <img
                src={item.image}
                alt="featured1"
                className="overflow-hidden rounded-2xl w-full h-[200px] md:h-full object-cover"
              />
              <div className="capitalize mt-4">
                <p className="text-[#152C5B] text-xl font-poppins">
                  {item.city}
                </p>
                <h1 className="text-sm font-poppins text-[#B0B0B0]">
                  {item.country}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsToDo;
