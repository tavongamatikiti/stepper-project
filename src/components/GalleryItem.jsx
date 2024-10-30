import { motion } from "framer-motion";

const GalleryItem = ({ image, onClick, index }) => {
  if (!image) return null;

  const getImageStyles = (orientation) => {
    if (orientation === "portrait") {
      return "row-span-2 md:col-span-1";
    }
    if (orientation === "landscape-wide") {
      return "md:col-span-2 row-span-1";
    }
    return "row-span-1 md:col-span-1";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`
        relative 
        cursor-pointer 
        overflow-hidden 
        rounded-lg 
        bg-gray-100
        ${getImageStyles(image.orientation)}
        transition-all
        duration-300
        hover:shadow-lg
      `}
      onClick={() => onClick?.(image)}
    >
      <img
        src={image.src}
        alt={image.alt || ""}
        className="w-full h-full object-cover transition-all duration-300"
        loading="lazy"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-0 left-0 right-0 p-4 text-white"
        >
          <h3 className="text-lg font-semibold line-clamp-1">{image.title}</h3>
          <p className="text-sm line-clamp-2 mt-1 text-gray-200">
            {image.caption}
          </p>
        </motion.div>
      </motion.div>

      {image.tags && (
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {image.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 text-xs bg-black/50 text-white rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default GalleryItem;
