import CustomButton from "../../ui/CustomBotton";
import CustomInput from "../../ui/CustomInput";
import { useApartment } from "../../hooks/useApartment";
import { useParams } from "react-router-dom";

const BookingForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const {
    handleSubmit,
    onSubmit,
    errors,
    navigate,
    register,
    findKitchenById,
    isValid,
  } = useApartment();
  console.log(isValid);
  if (!findKitchenById) {
    return <div>Loading...</div>;
  }
  const item = findKitchenById(id ?? "");
  if (!item) {
    return <div>Kitchen not found</div>;
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2 space-y-4">
      <div className="py-6">
        <CustomInput
          autoComplete="name"
          label="Name"
          type="text"
          placeholder="Enter your name"
          {...register("name")}
        />
        <p className="text-red-500">{errors.name?.message}</p>

        <CustomInput
          autoComplete="email"
          label="Email"
          type="email"
          placeholder="John Bull"
          {...register("email")}
        />
        <p className="text-red-500">{errors.email?.message}</p>

        <CustomInput
          autoComplete="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register("password")}
        />
        <p className="text-red-500">{errors.password?.message}</p>

        <CustomInput
          autoComplete="number"
          label="Phone Number"
          type="number"
          placeholder="Phone Number"
          {...register("number")}
        />
        <p className="text-red-500">{errors.number?.message}</p>
      </div>

      <div className="flex">
        <CustomButton
          onClick={() => navigate(`/details/${item?.id}`)}
          label="Cancel"
          className="bg-red-500 text-white hover:bg-red-600"
        />
        {isValid && (
          <CustomButton
            label="Continue to Book"
            type="submit"
            disabled={!isValid}
            className={`mt-2  text-white  ${
              !isValid ? "bg-blue-400" : "bg-blue-500 hover:bg-blue-600"
            }`}
          />
        )}
      </div>
    </form>
  );
};

export default BookingForm;
