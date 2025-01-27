import { BookingDetails } from "../components/infoComponents/BookingDetails";
import { BookingForm } from "../components/infoComponents/BookingForm";
import ButtonDetails from "../components/infoComponents/ButtonDetails";
import Heading from "../components/infoComponents/layouts/Heading";
import Layout from "../components/infoComponents/layouts/Layout";

const BookingPage: React.FC = () => {
  return (
    <Layout>
      <Heading
        title="Booking Information"
        instruction=" Please fill up the blanks field below"
      />
      <div className="flex flex-col md:flex-row gap-8">
        <BookingDetails />
        <BookingForm />
      </div>
      <ButtonDetails />
    </Layout>
  );
};

export default BookingPage;
