import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ELabChallenges from "../components/ELabChallenges.jsx";

const Challenges = () => {
  const challenges = [
    {
      id: 1,
      title: "Challenge 1",
      subtitle: "Elevator Pitch",
      description:
        "Here's our elevator pitch introducing our names, country, interests, and a fun fact. We shared our passions, why we care about these issues, our goals for solving them, and the unique contributions each of us brings to the team.",
      videoId: "your-video-id-1", // Replace with actual YouTube video IDs
    },
    {
      id: 2,
      title: "Challenge 2",
      subtitle: "Discover Africa",
      description:
        "For this challenge, Sorwazini uncovered and shared the story of the Land of a Thousand Hills, Rwanda, through our gossip television channel. We explored fascinating facts about Rwanda, addressed common misconceptions, highlighted its uniqueness, and discussed the challenges facing this great country.",
      videoId: "your-video-id-2",
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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300">
                SORWAZINI
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Home
              </a>
              <a href="#" className="text-white font-medium">
                E-Lab Challenges
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Gallery
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Prototype
              </a>
            </div>
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6 transition-all duration-300 transform hover:scale-105">
              Let's Talk
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="text-center mb-20"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            E-lab Challenges
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We tackled six challenges as a Think Tank group, exposing us to
            real-world contexts, complexity, and innovative thinking.
          </p>
        </motion.div>

        {/* Challenges Section */}
        <ELabChallenges challenges={challenges} />
      </main>
    </div>
  );
};

export default Challenges;
