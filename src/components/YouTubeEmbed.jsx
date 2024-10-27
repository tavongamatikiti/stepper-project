import { useState } from "react";

const YouTubeEmbed = ({ videoId }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative aspect-video rounded-xl overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
      />
      <iframe
        className="w-full h-full rounded-xl transform transition-transform duration-500 group-hover:scale-105"
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeEmbed;
