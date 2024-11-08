import AboutHero from "@/components/AboutHero.jsx";
import MissionSection from "@/components/MissionSection";
import TeamSection from "@/components/TeamSection.jsx";
import FinalCTA from "@/components/FinalCTA.jsx";
import TeamMemberModal from "@/components/TeamMemberModal.jsx";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "BIG STEPPERS | About Us";
  }, []);
  return (
    <section className="bg-black text-white">
      <AboutHero />
      <MissionSection />
      <TeamSection />
      <FinalCTA />
      <TeamMemberModal />
    </section>
  );
};

export default AboutPage;
