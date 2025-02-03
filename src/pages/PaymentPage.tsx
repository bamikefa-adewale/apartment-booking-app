import { useNavigate } from "react-router-dom";
import Heading from "../components/infoComponents/layouts/Heading";
import Layout from "../components/infoComponents/layouts/Layout";
import CustomButton from "../ui/CustomBotton";
import CustomInput from "../ui/CustomInput";
import CustomInputFile from "../ui/CustomInputFile";

const PaymentPage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Heading
        title="Payment"
        instruction=" Kindly follow the instruction below"
      />
      <main className="flex flex-col  md:flex-row gap-8">
        <section className="md:w-1/2  ">
          <div className=" mx-20 ">
            <p className="text-[#000000] text-lg font-poppins font-[400] my-3">
              Transfer Payment :
            </p>
            <h3 className="text-[16px] font-[400] font-poppins my-3 ">
              Tax :
              <span className="text-[16px] font-[500] font-poppins"> 10%</span>
            </h3>
            <p className="text-[16px] font-[400] font-poppins my-3">
              Sub total :
              <span className="text-[16px] font-[500] font-poppins">
                $480 USD
              </span>
            </p>
            <h1 className="text-[16px] font-[400] my-3 font-poppins">
              Total :
              <span className="text-[16px] font-[500] font-poppins">
                $580 USD
              </span>
            </h1>
            <div className="my-3">
              <div className="flex items-center gap-4 ">
                <img
                  src="https://res.cloudinary.com/dbrub0d6r/image/upload/v1738421013/image_4_1_lf6lwa.png"
                  alt="image_4_1_lf6lwa"
                  className="size-10"
                />
                <div className="text-lg font-poppins font-400 leading-8">
                  <p>Bank Central Asia</p>
                  <p>2208 1996</p>
                  <p>Tesla Inc.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="https://res.cloudinary.com/dbrub0d6r/image/upload/v1738421013/Rectangle_27_auwoxy.png"
                  alt="Rectangle_27_auwoxy"
                  className="size-10"
                />
                <div className="text-lg font-poppins font-400 leading-8">
                  <p>Bank Mandiri</p>
                  <p>2208 1996</p>
                  <p>Tesla Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="md:w-1/2">
          <form>
            <div className="mb-2">
              <CustomInputFile
                label="Upload Transfer Proof"
                accept=".jpeg, .png, .pdf, .svg, .jpg"
                placeholder="transferproof.png"
              />
            </div>
            <div className="mb-2">
              <CustomInput label=" Bank Origin" placeholder="BCA" />
            </div>
            <div className="mb-2">
              <CustomInput label=" Sender Name" placeholder="John Adewale" />
            </div>
            <div>
              <CustomButton
                type="submit"
                label="Confirm Payment"
                onClick={() => navigate("/transaction-completed")}
                className="bg-blue-500 text-white hover:bg-blue-700"
              />
              <CustomButton
                type="submit"
                onClick={() => navigate("/")}
                label="Cancel"
                className="bg-red-500 text-white hover:bg-red-700"
              />
            </div>
          </form>
        </section>
      </main>
    </Layout>
  );
};

export default PaymentPage;
