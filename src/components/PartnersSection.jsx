import P1 from "@/assets/p1.png";
import P2 from "@/assets/p2.png";
import P3 from "@/assets/p3.png";
import P4 from "@/assets/p4.svg";

const partners = [
  {
    name: "Zimbabwe Agricultural Society",
    image: P1,
  },
  {
    name: "Green Future Initiative",
    image: P2,
  },
  {
    name: "KUMINDA",
    image: P3,
  },
  {
    name: "ARDA",
    image: P4,
  },
];

const PartnersSection = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Partners</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="h-16 mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
