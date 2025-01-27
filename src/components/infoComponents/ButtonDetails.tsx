import CustomButton from "../../ui/CustomBotton";

const ButtonDetails = () => {
  return (
    <div>
      {" "}
      <CustomButton
        label="Cancel"
        className="bg-red-500 text-white hover:bg-red-600"
      />
      <CustomButton
        label="Continue to Book"
        type="submit"
        className="mt-2 bg-blue-500 text-white hover:bg-blue-600"
      />
    </div>
  );
};

export default ButtonDetails;
