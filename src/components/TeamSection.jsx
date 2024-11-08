import { useState } from "react";
import { X } from "lucide-react";
import Mika from "@/assets/HOP_2770.jpg";
import Tavonga from "@/assets/HOP_2771.jpg";
import Yves from "@/assets/HOP_2772.jpg";
import Keza from "@/assets/HOP_2773.jpg";
import Grace from "@/assets/HOP_2774.jpg";
import Shamila from "@/assets/HOP_2775.jpg";

const teamMembers = [
  {
    name: "Michaella Karangwa Kamikazi",
    role: "Executive Director",
    bio:
      "Kamikazi Karangwa Michaella, a Software Engineering student at the African Leadership University, is dedicated to building a strong foundation in coding and software development. Aspiring to become a certified programmer, Michaella focuses on mastering the technical skills essential for innovative software solutions. As Head of Digital Solutions and Technology, she leverages her expertise to integrate cutting-edge technology into agriculture, developing digital tools and platforms that enhance productivity and accessibility for Zimbabwe’s agricultural communities.\n" +
      "\n",
    image: Mika, // Replace with the actual path to the image
  },
  {
    name: "Sharmilla Ingabire",
    role: "Executive Director",
    bio:
      "Ingabire Sharmilla, a Business Entrepreneurial Leadership student at the African Leadership University, brings a unique blend of business acumen and agricultural focus to the team. Her commitment to innovating sustainable practices in agriculture drives her work, aiming to tackle global food challenges while supporting rural economies. As the Director of Innovation and Sustainable Agriculture, Sharmilla leverages her expertise to design impactful solutions that integrate entrepreneurial strategies with agricultural best practices, fostering resilience and growth within food systems.\n" +
      "\n",
    image: Shamila, // Replace with the actual path to the image
  },
  {
    name: "Tavonga Matikiti",
    role: "Executive Director",
    bio:
      "Tavonga Matikiti is dedicated to combating food insecurity throughout Southern Africa, with a focus on empowering local farmers and building resilient food systems. Driven by a passion for sustainable agricultural practices and innovative technology, Tavonga leads efforts to enhance food security and address resource scarcity across the region. As Director of Agricultural Innovation and Sustainability, he applies a strategic, forward-thinking approach to create impactful, scalable solutions that uplift communities and foster a self-sustaining African food network. His vision is rooted in the belief that transformative change in agriculture can elevate entire regions and improve countless lives.\n" +
      "\n",
    image: Tavonga, // Replace with the actual path to the image
  },
  {
    name: "Yves Mugabo Ntwari",
    role: "Executive Director",
    bio:
      "Yves Mugabo Ntwari, a Rwandan entrepreneur and creative professional, is committed to driving social change through the power of graphic design and software development. Pursuing a Bachelor’s degree in Entrepreneurship Leadership at the African Leadership University, Yves combines his passion for innovation, teamwork, and adaptability to craft visual narratives that resonate and empower communities. As the Creative Director of Visual Communication and Technology, he applies his skills to address pressing social issues, developing impactful, visually compelling solutions that inspire and engage audiences across Africa.\n" +
      "\n",
    image: Yves, // Replace with the actual path to the image
  },
  {
    name: "Rosalba Keza",
    role: "Executive Director",
    bio:
      "Keza Rosalba, a Bachelor’s student in Entrepreneurial Leadership at the African Leadership University, is on a mission to revolutionize healthcare access in Rwanda. Passionate about integrating digital technologies to enhance healthcare systems, Keza aims to lead initiatives that improve efficiency, accessibility, and quality of care for all. As Director of Health and Digital Transformation, she brings a visionary approach to healthcare innovation, crafting solutions that not only support Rwandans but also contribute to a healthier, more interconnected African continent. Her work underscores the belief that technology, when purposefully applied, can truly transform lives.\n" +
      "\n",
    image: Keza, // Replace with the actual path to the image
  },
  {
    name: "Grace Uwamahoro",
    role: "Executive Director",
    bio:
      "Grace Uwamahoro, currently studying Business and Entrepreneurship Leadership at the African Leadership University, is committed to driving transformation within the agricultural sector. With a vision to create global impact, Grace is passionate about using innovative business practices to tackle core agricultural challenges. As Chief Strategist for Agricultural Development, she brings strategic insights to the team, focusing on sustainable growth and lasting, positive change that empowers communities and advances the agricultural landscape.\n" +
      "\n",
    image: Grace, // Replace with the actual path to the image
  },
];

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleOpenModal = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our dedicated experts bring together diverse skills to drive
            positive change in Zimbabwe's agricultural landscape.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
              onClick={() => handleOpenModal(member)}
            >
              <div className="relative mx-auto w-56 h-56 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-blue-500 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black">
                    <img
                      src={member.image} // Updated to use member-specific image
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-400 mb-3">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 p-4"
          onClick={handleCloseModal} // Closes modal when clicking outside
        >
          <div
            className="bg-white max-w-md w-full rounded-lg overflow-hidden shadow-lg p-6 relative"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal content
          >
            <button
              onClick={handleCloseModal}
              className="text-gray-500 hover:text-gray-700 focus:outline-none absolute top-4 right-4"
            >
              <X className="w-6 h-6" /> {/* Close icon from lucide-react */}
            </button>
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-2xl font-bold text-center mb-2">
              {selectedMember.name}
            </h3>
            <p className="text-center text-gray-700 mb-4">
              {selectedMember.role}
            </p>
            <p className="text-gray-600 mb-4">{selectedMember.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamSection;
