import { Link, useParams } from "react-router-dom";
import { Card } from "../../ui/Card";
import { CardContent } from "../../ui/CardContent";
import { KitchenLists } from "../constants/HousesWithBackYard";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useApartment } from "../../hooks/useApartment";

export const BookingDetails: React.FC = () => {
  const { nights, totalPrice } = useApartment();

  const { id } = useParams<{ id: string }>();
  const item = KitchenLists.find((kitchen) => kitchen.id === id);

  if (!item) {
    return <div>Kitchen not found</div>;
  }
  return (
    <Card className="md:w-1/2">
      <Link
        to={`/details/${item?.id}`}
        className="flex w-24 items-center gap-2 bg-black text-white p-4 rounded-lg"
      >
        <FaArrowLeftLong /> Back
      </Link>
      <CardContent>
        <img
          src={
            item?.image ||
            "https://res.cloudinary.com/dbrub0d6r/image/upload/v1737916240/kitchen1_o0hkp0.png"
          }
          alt="Hotel"
          className="w-full h-50 rounded-lg object-cover mb-4"
        />
        <h3 className="text-lg font-bold">Cashville</h3>
        <p className="text-gray-600">Kemang, Indonesia</p>
        {/* <p className="">$480 USD for 2 night</p> */}
        <p className="my-2 text-sm md:text-lg">
          <span className="text-blue-700 mt-2 font-semibold">
            ${totalPrice}{" "}
          </span>
          USD for {nights} night
          {nights !== 1 ? "s" : ""}
        </p>
      </CardContent>
    </Card>
  );
};
