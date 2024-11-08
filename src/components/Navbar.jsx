import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavLink = ({ to, children }) => {
  return (
    <Link to={to} className="relative group">
      <span>{children}</span>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-white origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black text-white z-50 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Animated Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.span
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="text-2xl font-semibold"
          >
            BS
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/solution">CHALLENGES</NavLink>
          <NavLink to="/gallery">GALLERY</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <Link
            to="/contact"
            className="border border-white/80 text-white hover:bg-white hover:text-black transition-colors duration-300 px-6 py-2 rounded-full font-medium backdrop-blur-sm"
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </motion.button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black z-40"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
              <motion.div
                className="flex flex-col space-y-8 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  { to: "/", text: "HOME" },
                  { to: "/solution", text: "CHALLENGES" },
                  { to: "/gallery", text: "GALLERY" },
                  { to: "/about", text: "ABOUT US" },
                ].map((item, index) => (
                  <motion.div
                    key={item.to}
                    variants={itemVariants}
                    custom={index}
                  >
                    <Link
                      to={item.to}
                      className="text-2xl font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.text}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants} custom={4}>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-block border border-white text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-transparent transition-all duration-300 px-8 py-3 rounded-full text-xl font-medium"
                  >
                    CONTACT US
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

export default Navbar;
