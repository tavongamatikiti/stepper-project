import { motion } from "framer-motion";
import PropTypes from "prop-types"; // Import PropTypes

const PageHeader = ({
  title,
  description,
  minHeight = "min-h-[100dvh]",
  children, // Optional: if you want to add additional content
}) => {
  return (
    <section
      className={`pt-20 sm:pt-24 ${minHeight} bg-black flex items-center overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-8 sm:py-10 lg:py-12">
        <div className="flex flex-col items-center">
          {/* Text Content */}
          <div className="w-full text-center relative z-10">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {description}
            </motion.p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

// Define Prop Types
PageHeader.propTypes = {
  title: PropTypes.string.isRequired, // title should be a string and is required
  description: PropTypes.string.isRequired, // description should be a string and is required
  minHeight: PropTypes.string, // minHeight should be a string
  children: PropTypes.node, // children should be a valid React node
};

// Default Props
PageHeader.defaultProps = {
  minHeight: "min-h-[60vh] sm:min-h-[30vh]", // Default minHeight value
};

export default PageHeader;
