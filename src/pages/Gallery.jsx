import Gallery from "@/components/Gallery";
import { galleryImages } from "@/data/galleryImages";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader.jsx";

const GalleryPage = () => {
  // Add check for galleryImages
  const images = Array.isArray(galleryImages) ? galleryImages : [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50"
    >
      <PageHeader
        title="Gallery"
        description="Noteworthy experiences. Covering everything from major milestones to daily exchanges and fun-filled moments."
      />{" "}
      <Gallery images={images} />
    </motion.div>
  );
};

export default GalleryPage;
