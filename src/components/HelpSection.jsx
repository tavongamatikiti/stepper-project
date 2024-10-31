import { Heart, Handshake, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import HelpCard from "./HelpCard";
import DonationModal from "./donation/DonationModal";
import GetInvolvedModal from "./GetInvolvedModal";
import { useState } from "react";

const HelpSection = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isInvolvedModalOpen, setIsInvolvedModalOpen] = useState(false);

  const cards = [
    {
      icon: DollarSign,
      title: "Donate",
      description: "Support our mission financially",
      color: "text-green-400",
      action: () => setIsDonationModalOpen(true),
    },
    {
      icon: Heart,
      title: "Volunteer",
      description: "Give your time and skills",
      color: "text-red-400",
      action: () => setIsInvolvedModalOpen(true),
    },
    {
      icon: Handshake,
      title: "Partner",
      description: "Collaborate with us",
      color: "text-blue-400",
      action: () => setIsInvolvedModalOpen(true),
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            How You Can Help
          </h2>

          <div className="text-center mb-12">
            <p className="text-lg mb-8 text-gray-300">
              Your support can make a lasting impact on the lives of Zimbabwean
              families. Whether through donations, volunteering, or becoming a
              partner, you have the power to help Honde Valley communities
              thrive.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {cards.map((card, index) => (
                <HelpCard key={index} {...card} />
              ))}
            </div>

            <div className="space-x-4">
              <Button
                onClick={() => setIsDonationModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              >
                Donate Now
              </Button>
              <Button
                onClick={() => setIsInvolvedModalOpen(true)}
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-800"
              >
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </div>

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />

      <GetInvolvedModal
        isOpen={isInvolvedModalOpen}
        onClose={() => setIsInvolvedModalOpen(false)}
      />
    </div>
  );
};

export default HelpSection;
