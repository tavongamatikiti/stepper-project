// import { motion } from "framer-motion";
//
// const FloatingResources = () => {
//   const topRowItems = [
//     { text: "Empowerment", link: "/category/empowerment" },
//     { text: "Sustainability", link: "/category/sustainability" },
//     { text: "Collaboration", link: "/category/collaboration" },
//     { text: "Innovation", link: "/category/innovation" },
//     { text: "Economic Growth", link: "/category/economic-growth" },
//     { text: "Job Creation", link: "/category/job-creation" },
//     { text: "Community Improvement", link: "/category/community" },
//   ];
//
//   const bottomRowItems = [
//     { text: "Integrity", link: "/category/integrity" },
//     { text: "Education", link: "/category/education" },
//     { text: "Resilience", link: "/category/resilience" },
//     { text: "Diversity", link: "/category/diversity" },
//     { text: "Leadership", link: "/category/leadership" },
//     { text: "Accessibility", link: "/category/accessibility" },
//     { text: "Cultural Respect", link: "/category/cultural-respect" },
//     { text: "Advocacy", link: "/category/advocacy" },
//   ];
//
//   const duplicatedTopRow = [...topRowItems, ...topRowItems];
//   const duplicatedBottomRow = [...bottomRowItems, ...bottomRowItems];
//
//   return (
//     <section className="w-full bg-black p-4 relative overflow-hidden flex items-center justify-center overflow-x-hidden rounded-b-lg">
//       <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-4 py-6 sm:py-8">
//           {/* Title Section */}
//           <motion.div
//             className="w-full lg:w-1/4 flex-shrink-0 text-center lg:text-left mb-4 lg:mb-0"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
//               Our Core Values
//             </h2>
//           </motion.div>
//
//           {/* Sliding Content Container */}
//           <motion.div
//             className="w-full lg:w-3/4 flex-grow flex flex-col justify-center gap-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             {/* Top Row */}
//             <div className="relative overflow-hidden">
//               <motion.div
//                 className="flex gap-2 sm:gap-4"
//                 animate={{
//                   x: ["0%", "-50%"],
//                 }}
//                 transition={{
//                   x: {
//                     duration: 20,
//                     repeat: Infinity,
//                     ease: "linear",
//                   },
//                 }}
//               >
//                 {duplicatedTopRow.map((item, index) => (
//                   <motion.a
//                     key={`top-${index}`}
//                     href={item.link}
//                     className="px-3 sm:px-4 py-2 rounded-full bg-white text-blue-600 no-underline hover:shadow-xl
//                              transition-all duration-300 whitespace-nowrap text-sm sm:text-base font-medium"
//                     whileHover={{ scale: 1.05 }}
//                     animate={{ y: [0, -4, 0] }}
//                     transition={{
//                       y: {
//                         duration: 2,
//                         repeat: Infinity,
//                         repeatType: "reverse",
//                         delay: index * 0.1,
//                       },
//                     }}
//                   >
//                     {item.text}
//                   </motion.a>
//                 ))}
//               </motion.div>
//             </div>
//
//             {/* Bottom Row */}
//             <div className="relative overflow-hidden">
//               <motion.div
//                 className="flex gap-2 sm:gap-4"
//                 animate={{
//                   x: ["-50%", "0%"],
//                 }}
//                 transition={{
//                   x: {
//                     duration: 20,
//                     repeat: Infinity,
//                     ease: "linear",
//                   },
//                 }}
//               >
//                 {duplicatedBottomRow.map((item, index) => (
//                   <motion.a
//                     key={`bottom-${index}`}
//                     href={item.link}
//                     className="px-3 sm:px-4 py-2 rounded-full bg-white text-blue-600 no-underline hover:shadow-xl
//                              transition-all duration-300 whitespace-nowrap text-sm sm:text-base font-medium"
//                     whileHover={{ scale: 1.05 }}
//                     animate={{ y: [0, -4, 0] }}
//                     transition={{
//                       y: {
//                         duration: 2,
//                         repeat: Infinity,
//                         repeatType: "reverse",
//                         delay: index * 0.1,
//                       },
//                     }}
//                   >
//                     {item.text}
//                   </motion.a>
//                 ))}
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default FloatingResources;

import { motion } from "framer-motion";

const FloatingResources = () => {
  const topRowItems = [
    { text: "Empowerment", link: "/category/empowerment" },
    { text: "Sustainability", link: "/category/sustainability" },
    { text: "Collaboration", link: "/category/collaboration" },
    { text: "Innovation", link: "/category/innovation" },
    { text: "Economic Growth", link: "/category/economic-growth" },
    { text: "Job Creation", link: "/category/job-creation" },
    { text: "Community Improvement", link: "/category/community" },
  ];

  const bottomRowItems = [
    { text: "Integrity", link: "/category/integrity" },
    { text: "Education", link: "/category/education" },
    { text: "Resilience", link: "/category/resilience" },
    { text: "Diversity", link: "/category/diversity" },
    { text: "Leadership", link: "/category/leadership" },
    { text: "Accessibility", link: "/category/accessibility" },
    { text: "Cultural Respect", link: "/category/cultural-respect" },
    { text: "Advocacy", link: "/category/advocacy" },
  ];
  const duplicatedTopRow = [...topRowItems, ...topRowItems];
  const duplicatedBottomRow = [...bottomRowItems, ...bottomRowItems];

  return (
    <section className="w-full bg-black relative overflow-hidden flex items-center justify-center h-[350px] px-2 sm:px-4 lg:px-6">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 py-6 sm:py-8">
          {/* Title Section */}
          <motion.div
            className="w-full lg:w-1/4 flex-shrink-0 text-center lg:text-left mb-4 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Our Core
              <br />
              Values
            </h2>
          </motion.div>

          {/* Sliding Content Container */}
          <motion.div
            className="w-full lg:w-3/4 flex-grow flex flex-col justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Row */}
            <div className="relative overflow-hidden h-28 flex items-center">
              <motion.div
                className="flex gap-2 sm:gap-4 absolute"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  x: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedTopRow.map((item, index) => (
                  <motion.a
                    key={`top-${index}`}
                    href={item.link}
                    className="px-3 sm:px-4 py-2 rounded-full bg-white text-blue-600 no-underline hover:shadow-xl
                             transition-all duration-300 whitespace-nowrap text-sm sm:text-base font-medium"
                    whileHover={{ scale: 1.05 }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.1,
                      },
                    }}
                  >
                    {item.text}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Bottom Row */}
            <div className="relative overflow-hidden h-28 flex items-center">
              <motion.div
                className="flex gap-2 sm:gap-4 absolute"
                animate={{
                  x: ["-50%", "0%"],
                }}
                transition={{
                  x: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedBottomRow.map((item, index) => (
                  <motion.a
                    key={`bottom-${index}`}
                    href={item.link}
                    className="px-3 sm:px-4 py-2 rounded-full bg-white text-blue-600 no-underline hover:shadow-xl
                             transition-all duration-300 whitespace-nowrap text-sm sm:text-base font-medium"
                    whileHover={{ scale: 1.05 }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.1,
                      },
                    }}
                  >
                    {item.text}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FloatingResources;
