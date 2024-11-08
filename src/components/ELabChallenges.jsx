import { motion } from "framer-motion";
import YouTubeEmbed from "./YouTubeEmbed";

const ELabChallenges = ({ challenges }) => {
  return (
    <div className="space-y-32">
      {challenges.map((challenge, index) => (
        <motion.div
          key={challenge.id}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div
            className={`${challenge.id % 2 === 0 ? "md:order-2" : ""} space-y-6`}
          >
            <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {challenge.title}
              </h2>
              <h3 className="text-xl text-gray-400 mb-4">
                {challenge.subtitle}
              </h3>
            </motion.div>
            <p className="text-gray-300 leading-relaxed text-lg">
              {challenge.description}
            </p>
          </div>
          <div className={`${challenge.id % 2 === 0 ? "md:order-1" : ""}`}>
            {challenge.videoId ? (
              <YouTubeEmbed videoId={challenge.videoId} />
            ) : (
              <img src={challenge.imageUrl} alt="Challenge Image" />
            )}{" "}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ELabChallenges;
