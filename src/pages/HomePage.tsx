import Layout from "../components/common/layout";
import ApartementWithKitchen from "../components/HomeComponents/ApartementWithKitchen";
import HappyStory from "../components/HomeComponents/HappyStory";
import Hero from "../components/HomeComponents/Hero";
import HotelsWithLivingRoom from "../components/HomeComponents/HotelsWithLivingRoom";
import HousesWithBackyard from "../components/HomeComponents/HousesWithBackyard";
import MostPickUp from "../components/HomeComponents/MostPickUp";

const Home = () => {
  return (
    <Layout>
      <main className="bg-white">
        <Hero />
        <MostPickUp />
        <HousesWithBackyard />
        <HotelsWithLivingRoom />
        <ApartementWithKitchen />
        <HappyStory />
      </main>
    </Layout>
  );
};

export default Home;
