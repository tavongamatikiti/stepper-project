import { useState } from "react";
import GalleryModal from "./GalleryModal";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Gallery = ({ images = [] }) => {
  // Add default empty array
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleNext = () => {
    if (!images.length) return;
    const currentIndex = images.findIndex(
      (img) => img.src === selectedImage?.src,
    );
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handlePrev = () => {
    if (!images.length) return;
    const currentIndex = images.findIndex(
      (img) => img.src === selectedImage?.src,
    );
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  // Add check for images array
  if (!Array.isArray(images)) {
    console.warn("Gallery: images prop must be an array");
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full cursor-pointer rounded-lg transition-transform duration-200 hover:scale-105"
              onClick={() => handleImageClick(image)}
            />
          </motion.div>
        ))}
      </div>

      <GalleryModal
        image={selectedImage}
        isOpen={isModalOpen}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
  ),
};

export default Gallery;
