import { motion } from "framer-motion";
import ELabChallenges from "../components/ELabChallenges.jsx";

const Challenges = () => {
  const challenges = [
    {
      id: 1,
      title: "Challenge 1",
      subtitle: "Elevator Pitch",
      description:
        "Here's our elevator pitch introducing our names, country, interests, and a fun fact. We shared our passions, why we care about these issues, our goals for solving them, and the unique contributions each of us brings to the team.",
      videoId: "nxg_Q88WgNQ", // Replace with actual YouTube video IDs
    },
    {
      id: 2,
      title: "Challenge 2",
      subtitle: "Discover Africa",
      description:
        "As Big Steppers, we immersed ourselves in the vibrant world of the Intore dance, discovering its rich cultural significance in Rwanda. Through our exploration of the Land of a Thousand Hills, we unveiled intriguing insights, dispelled common myths, celebrated Rwanda's distinctiveness, and thoughtfully examined the challenges this extraordinary nation faces today. This journey not only enhanced our understanding but also deepened our appreciation for Rwanda’s remarkable heritage and cultural legacy.\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n",
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
    <div className="pt-20 sm:pt-24 min-h-[60vh] sm:min-h-[70vh] bg-black text-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="text-center mb-20"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Innovation Sprints
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            As Big Steppers, we took on six pivotal challenges that immersed us
            in real-world contexts, complex dynamics, and the pursuit of
            innovative solutions.
          </p>
        </motion.div>

        {/* Challenges Section */}
        <ELabChallenges challenges={challenges} />
      </main>
    </div>
  );
};

export default Challenges;
