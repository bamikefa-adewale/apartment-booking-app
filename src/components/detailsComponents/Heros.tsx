import { useParams } from "react-router-dom";
import { KitchenLists } from "../constants/HousesWithBackYard";
import ImageCard from "../../ui/ImageCard";

interface KitchenItem {
  id: string;
  city: string;
  country: string;
  image3?: string;
  image?: string;
  image2?: string;
}
const Heros: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = KitchenLists?.find((item: KitchenItem) => item.id === id);

  if (!item) {
    return <div>Image not found</div>;
  }
  return (
    <section className="container mx-auto mt-5 px-4">
      <div className="flex flex-col md:flex-row gap-5 h-auto md:h-[600px] justify-center">
        {/* Left Image */}
        <div className="w-full h-60 md:h-[190px]">
          <section>
            <img
              src={
                item.image ||
                "https://res.cloudinary.com/dbrub0d6r/image/upload/v1737916240/kitchen1_o0hkp0.png"
              }
              alt={item.city}
              className="rounded-2xl w-full h-full object-cover"
            />
            {/* <div className="capitalize mt-4 flex items-center gap-5">
              <p className="text-[#152C5B] text-xl font-poppins">{item.city}</p>
              <h1 className="text-sm font-poppins text-[#B0B0B0]">
                {item.country}
              </h1>
            </div> */}
          </section>
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 w-full gap-4 h-60 md:h-[190px]">
          <ImageCard src={item?.image4} alt="kitchen Image 4" />
          <ImageCard src={item?.image2} alt="kitchen Image 2" />
        </div>
      </div>
    </section>
  );
};

export default Heros;
