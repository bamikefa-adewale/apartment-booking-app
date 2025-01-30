import Layout from "../components/common/layout";
import HappyStory from "../components/detailsComponents/HappyStory";
import Heros from "../components/detailsComponents/Heros";
import ThingsToDo from "../components/detailsComponents/ThingsToDo";
import Headings from "../components/detailsComponents/Headings";
const DetailsPage = () => {
  return (
    <Layout>
      <main className="my-5">
        <Headings />
        <Heros />
        <ThingsToDo />
        <HappyStory />
      </main>
    </Layout>
  );
};

export default DetailsPage;
