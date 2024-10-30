import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[100dvh] pt-20 sm:pt-24 bg-black flex items-center relative overflow-hidden">
      {/* SVG Background - Responsive positioning */}
      <motion.div
        className="absolute inset-0 w-full h-full flex items-center justify-center lg:justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="w-full h-full max-w-[800px] relative opacity-50 lg:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient
                id="bgGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#000000", stopOpacity: 0.1 }}
                >
                  <animate
                    attributeName="stopOpacity"
                    values="0.1;0.3;0.1"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop
                  offset="50%"
                  style={{ stopColor: "#111111", stopOpacity: 0.05 }}
                >
                  <animate
                    attributeName="stopOpacity"
                    values="0.05;0.2;0.05"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop
                  offset="100%"
                  style={{ stopColor: "#000000", stopOpacity: 0.1 }}
                >
                  <animate
                    attributeName="stopOpacity"
                    values="0.1;0.3;0.1"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
              <linearGradient
                id="fieldGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#4a9f44", stopOpacity: 0.1 }}
                >
                  <animate
                    attributeName="stopOpacity"
                    values="0.1;0.3;0.1"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop
                  offset="50%"
                  style={{ stopColor: "#4a9f44", stopOpacity: 0.2 }}
                >
                  <animate
                    attributeName="stopOpacity"
                    values="0.2;0.4;0.2"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop
                  offset="100%"
                  style={{ stopColor: "#4a9f44", stopOpacity: 0.1 }}
                >
                  <animate
                    attributeName="stopOpacity"
                    values="0.1;0.3;0.1"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>

            <rect width="500" height="500" fill="url(#bgGradient)">
              <animate
                attributeName="opacity"
                values="0.3;0.5;0.3"
                dur="5s"
                repeatCount="indefinite"
              />
            </rect>

            {/* Animated fields */}
            <g>
              <path
                d="M50 300 Q250 250 450 300"
                fill="none"
                stroke="url(#fieldGradient)"
                strokeWidth="8"
                opacity="0.6"
              >
                <animate
                  attributeName="d"
                  values="M50 300 Q250 250 450 300;M50 310 Q250 260 450 310;M50 300 Q250 250 450 300"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M50 340 Q250 290 450 340"
                fill="none"
                stroke="#3d8b3d"
                strokeWidth="8"
                opacity="0.5"
              >
                <animate
                  attributeName="d"
                  values="M50 340 Q250 290 450 340;M50 350 Q250 300 450 350;M50 340 Q250 290 450 340"
                  dur="7s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M50 380 Q250 330 450 380"
                fill="none"
                stroke="#2d772d"
                strokeWidth="8"
                opacity="0.4"
              >
                <animate
                  attributeName="d"
                  values="M50 380 Q250 330 450 380;M50 390 Q250 340 450 390;M50 380 Q250 330 450 380"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </path>
            </g>

            {/* Animated farm building */}
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 0,-5; 0,0"
                dur="4s"
                repeatCount="indefinite"
              />
              <rect
                x="150"
                y="180"
                width="80"
                height="100"
                fill="#8B4513"
                opacity="0.6"
              >
                <animate
                  attributeName="opacity"
                  values="0.6;0.8;0.6"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </rect>
              <path d="M140 180 L190 120 L240 180" fill="#A52A2A" opacity="0.6">
                <animate
                  attributeName="opacity"
                  values="0.6;0.8;0.6"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
            </g>

            {/* Animated wheat stalks */}
            <g transform="translate(300, 200)">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="-2 300 200;2 300 200;-2 300 200"
                dur="3s"
                repeatCount="indefinite"
              />
              <g transform="rotate(-10)">
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="60"
                  stroke="#B8860B"
                  strokeWidth="3"
                  opacity="0.5"
                >
                  <animate
                    attributeName="opacity"
                    values="0.5;0.7;0.5"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </line>
                {/* ... rest of wheat stalk paths with similar animations ... */}
              </g>
            </g>

            {/* Animated tech element */}
            <g transform="translate(80, 250)">
              <rect
                x="0"
                y="0"
                width="40"
                height="30"
                fill="#333"
                rx="5"
                opacity="0.6"
              >
                <animate
                  attributeName="opacity"
                  values="0.6;0.8;0.6"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </rect>
              <circle cx="20" cy="15" r="8" fill="#0066cc">
                <animate
                  attributeName="opacity"
                  values="0.3;0.7;0.3"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values="8;9;8"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* Enhanced animated sun */}
            <g transform="translate(400, 100)">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 400 100;360 400 100"
                dur="60s"
                repeatCount="indefinite"
              />
              <circle cx="0" cy="0" r="40" fill="#FFD700">
                <animate
                  attributeName="opacity"
                  values="0.2;0.5;0.2"
                  dur="4s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values="40;42;40"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="0" cy="0" r="30" fill="#FFD700">
                <animate
                  attributeName="opacity"
                  values="0.25;0.6;0.25"
                  dur="4s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values="30;32;30"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* Animated floating elements */}
            <g>
              <circle cx="350" cy="150" r="5" fill="#4CAF50">
                <animate
                  attributeName="opacity"
                  values="0.4;0.6;0.4"
                  dur="3s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values="150;145;150"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="370" cy="160" r="3" fill="#4CAF50">
                <animate
                  attributeName="opacity"
                  values="0.4;0.6;0.4"
                  dur="4s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values="160;155;160"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>
        </div>
      </motion.div>

      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-8 sm:py-10 lg:py-12">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left relative z-10">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Empowering Zimbabweans by Transforming Agriculture into a Catalyst
              for Economic Growth.
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Fostering sustainable practices and collaboration to turn
              agriculture into a job creation engine, unlocking opportunities
              and improving livelihoods across communities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <button
                onClick={() => console.log("Book a Demo clicked")}
                className="inline-block bg-white text-black px-5 sm:px-6 py-3 sm:py-4 rounded-full
                         font-medium hover:bg-gray-100 transition-colors duration-300
                         text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Book a Demo
              </button>
            </motion.div>
          </div>

          {/* Spacer div for desktop layout, hidden on mobile */}
          <div className="hidden lg:block lg:w-1/2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
