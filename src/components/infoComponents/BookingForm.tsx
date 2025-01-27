import CustomInput from "../../ui/CusstomInput";

export const BookingForm: React.FC = () => {
  return (
    <form className="md:w-1/2 space-y-4">
      <div className="p-6">
        <CustomInput label="Name" type="text" placeholder="Enter your name" />
        <CustomInput
          label="Email"
          type="email"
          placeholder="John Bull"
          required
        />
        <CustomInput
          label="Password"
          type="password"
          placeholder="Example@gmail.com"
        />
        <CustomInput
          label="Password"
          type="number"
          placeholder="Phone Number"
        />
      </div>
    </form>
  );
};
