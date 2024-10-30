import FloatingResources from "../components/FloatingResources.jsx";
import Hero from "../components/Hero.jsx";
import AgricultureStats from "@/components/AgricultureStats.jsx";
import ApproachSection from "@/components/ApproachSection.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <FloatingResources />
      <AgricultureStats />
      <ApproachSection />
    </>
  );
};

export default Home;
