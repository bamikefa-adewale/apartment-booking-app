import { BookingDetails } from "../components/infoComponents/BookingDetails";
import Heading from "../components/infoComponents/layouts/Heading";
import Layout from "../components/infoComponents/layouts/Layout";

const BookingPage: React.FC = () => {
  return (
    <Layout>
      <Heading
        title="Booking Information"
        instruction=" Please fill up the blanks field below"
      />
      <BookingDetails />
    </Layout>
  );
};

export default BookingPage;
