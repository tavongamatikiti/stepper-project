import FloatingResources from "../components/FloatingResources.jsx";
import Hero from "../components/Hero.jsx";
import AgricultureStats from "@/components/AgricultureStats.jsx";
import ApproachSection from "@/components/ApproachSection.jsx";
import HelpSection from "@/components/HelpSection.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <FloatingResources />
      <AgricultureStats />
      <ApproachSection />
      <HelpSection />
    </>
  );
};

export default Home;
