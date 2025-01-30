import CustomButton from "../../ui/CustomBotton";
import CustomInput from "../../ui/CustomInput";
import { useApartment } from "../../hooks/useApartment";

const BookingForm: React.FC = () => {
  const { handleSubmit, onSubmit, errors, register } = useApartment();

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

      <CustomButton
        type="submit"
        label="Testing btn"
        className=" text-white bg-amber-500"
      />
    </form>
  );
};

export default BookingForm;
