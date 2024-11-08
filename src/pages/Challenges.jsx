import { motion } from "framer-motion";
import ELabChallenges from "../components/ELabChallenges.jsx";
import PageHeader from "@/components/PageHeader.jsx";
import DigitalPrint from "@/assets/HOP_2699.png";
import { useEffect } from "react";

const Challenges = () => {
  useEffect(() => {
    document.title = "BIG STEPPERS | Innovation Sprints";
  }, []);

  const challenges = [
    {
      id: 1,
      title: "Challenge 1",
      subtitle: "Elevator Pitch",
      description:
        "Here's our elevator pitch introducing our names, country, interests, and a fun fact. We shared our passions, why we care about these issues, our goals for solving them, and the unique contributions each of us brings to the team.",
      videoId: "Mke8iilBWWY",
    },
    {
      id: 2,
      title: "Challenge 2",
      subtitle: "Discover Africa",
      description:
        "As BIG STEPPERS, we explored Rwanda's Intore dance, uncovering its cultural significance, unique heritage, and modern challenges. Our journey dispelled myths, celebrated Rwanda's identity, and deepened our appreciation for this extraordinary nation’s rich legacy and resilience.",
      videoId: "EqaGkHgpeuY",
    },
    {
      id: 3,
      title: "Challenge 3",
      subtitle: "Help Lab",
      description:
        "The Dusangire Lunch campaign supports Rwanda’s future by providing nutritious meals to students, enhancing school attendance, academic performance, and overall well-being. Join us in nourishing young minds and building a stronger, healthier nation. 🌱🍲",
      videoId: "mAixqoAqszM",
    },
    {
      id: 4,
      title: "Challenge 4",
      subtitle: "Hunt for Treasure",
      description:
        "In this video, The BIG STEPPERS showcase Kuminda’s inspiring journey in African agriculture, covering its achievements, challenges, and future ambitions. Through job creation and award-winning sustainable practices, Kuminda drives transformative, community-focused growth across the agricultural sector.",
      videoId: "VVfnGzQuTsY",
    },
    {
      id: 5,
      title: "Challenge 5",
      subtitle: "Launch Your Mission",
      description:
        "As BIG STEPPERS introduce their initiative with AgriVision Zimbabwe, aiming to revolutionize Zimbabwe’s agriculture through sustainable farming, job creation, and food security enhancement. By tackling soil degradation and youth unemployment, they aspire to build a sustainable, empowered future for local communities.",
      videoId: "CvsdadKZfBE",
    },
    {
      id: 6,
      title: "Challenge 6",
      subtitle: "Digital Print",
      description:
        "The website showcases our E-LAB experience, presenting a concise mission statement and a well-defined problem statement with our proposed solutions. It includes profiles of think tank members and details all six E-LAB challenges, reflecting the core of our collaborative journey and the innovative solutions we developed.",
      imageUrl: DigitalPrint,
    },
  ];

  return (
    <section className="bg-black min-h-screen">
      <PageHeader
        title="Innovation Sprints"
        description="As BIG STEPPERS, we took on six pivotal challenges that immersed us in real-world contexts, complex dynamics, and the pursuit of innovative solutions."
      />

      {/* Challenges Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <ELabChallenges challenges={challenges} />
        </motion.div>
      </div>
    </section>
  );
};

export default Challenges;
