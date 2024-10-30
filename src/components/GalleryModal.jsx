import PropTypes from "prop-types";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GalleryModal = ({ image, isOpen, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        />
        {/* Modal Container */}
        <div className="relative z-10 mx-auto max-h-[90vh] w-full max-w-4xl">
          {/* Close button wrapper */}
          <div className="absolute -right-2 -top-2 z-[60]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {/* Image and Caption Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center justify-center px-12"
          >
            <div className="relative max-h-[75vh] overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt || "Gallery image"}
                className="h-auto max-h-[75vh] w-auto object-contain"
                style={{ maxWidth: "100%" }}
              />
            </div>
            {/* Caption */}
            {(image.caption || image.title) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4 max-w-2xl text-center"
              >
                {image.title && (
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {image.title}
                  </h3>
                )}
                {image.caption && (
                  <p className="text-sm text-gray-200">{image.caption}</p>
                )}
              </motion.div>
            )}
          </motion.div>
          {/* Navigation buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// PropTypes for prop validation
GalleryModal.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string,
    caption: PropTypes.string,
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export default GalleryModal;
