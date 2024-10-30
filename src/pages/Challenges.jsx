import { motion } from "framer-motion";
import ELabChallenges from "../components/ELabChallenges.jsx";
import PageHeader from "@/components/PageHeader.jsx";

const Challenges = () => {
  const challenges = [
    {
      id: 1,
      title: "Challenge 1",
      subtitle: "Elevator Pitch",
      description:
        "Here's our elevator pitch introducing our names, country, interests, and a fun fact. We shared our passions, why we care about these issues, our goals for solving them, and the unique contributions each of us brings to the team.",
      videoId: "nxg_Q88WgNQ",
    },
    {
      id: 2,
      title: "Challenge 2",
      subtitle: "Discover Africa",
      description:
        "As Big Steppers, we immersed ourselves in the vibrant world of the Intore dance, discovering its rich cultural significance in Rwanda. Through our exploration of the Land of a Thousand Hills, we unveiled intriguing insights, dispelled common myths, celebrated Rwanda's distinctiveness, and thoughtfully examined the challenges this extraordinary nation faces today. This journey not only enhanced our understanding but also deepened our appreciation for Rwanda's remarkable heritage and cultural legacy.",
      videoId: "7SOWifBip3s",
    },
    {
      id: 3,
      title: "Challenge 3",
      subtitle: "Help Lab",
      description:
        "Creating impact in the community is an essential part of E-lab. For Challenge 3, Sorwazini engaged in Help-Lab. In this challenge, we made contributions to address specific community needs.",
      videoId: "your-video-id-3",
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
