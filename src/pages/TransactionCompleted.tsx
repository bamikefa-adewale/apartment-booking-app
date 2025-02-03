import Heading from "../components/infoComponents/layouts/Heading";
import Layout from "../components/infoComponents/layouts/Layout";
import CustomButton from "../ui/CustomBotton";

const TransactionCompleted = () => {
  return (
    <Layout>
      <Heading
        title="Booking Information"
        instruction=" Please fill up the blanks field below"
      />
      <div>
        <img
          src="https://res.cloudinary.com/dbrub0d6r/image/upload/v1738578129/il_succes_1_jk6trt.png"
          alt="il_succes_1_jk6trt"
          className="size-70"
        />
        <div className="ml-10">
          <p className="text-center text-lg font-poppins text-[#B0B0B0] font-[00]">
            We will inform you via email later once this transaction has been
            accepted
          </p>
        </div>
        <CustomButton
          className="bg-blue-500 text-gray-100"
          label="Back to Home"
        />
      </div>
    </Layout>
  );
};

export default TransactionCompleted;
