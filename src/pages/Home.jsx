import FloatingResources from "../components/FloatingResources.jsx";
import Hero from "../components/Hero.jsx";
import AgricultureStats from "@/components/AgricultureStats.jsx";
import ApproachSection from "@/components/ApproachSection.jsx";
import HelpSection from "@/components/HelpSection.jsx";
import PartnersSection from "@/components/PartnersSection.jsx";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>BIG STEPPERS | Empowering Zimbabwe Through Agriculture</title>
      </Helmet>
      <Hero />
      <FloatingResources />
      <AgricultureStats />
      <ApproachSection />
      <HelpSection />
      <PartnersSection />
    </>
  );
};

export default Home;
