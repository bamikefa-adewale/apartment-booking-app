import { useParams } from "react-router-dom";
import { CardContent } from "../../ui/CardContent";
import { useApartment } from "../../hooks/useApartment";
import CustomButton from "../../ui/CustomBotton";
import BookingForm from "./BookingForm";

export const BookingDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { nights, navigate, totalPrice, findKitchenById } = useApartment();

  if (!findKitchenById) {
    return <div>Loading...</div>;
  }
  const item = findKitchenById(id ?? "");
  if (!item) {
    return <div>Kitchen not found</div>;
  }

  return (
    <>
      <section className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
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
        </div>
        <BookingForm />
      </section>
      <div>
        <CustomButton
          onClick={() => navigate(`/details/${item?.id}`)}
          label="Cancel"
          className="bg-red-500 text-white hover:bg-red-600"
        />
        <CustomButton
          label="Continue to Book"
          type="submit"
          className="mt-2 bg-blue-500 text-white hover:bg-blue-600"
        />
      </div>
    </>
  );
};
