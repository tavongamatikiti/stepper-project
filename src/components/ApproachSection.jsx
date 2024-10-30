import { BookOpen, Link as LinkIcon, Factory } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ApproachSection = () => {
  const approaches = [
    {
      title: "Capacity Building",
      description:
        "Through training in sustainable farming and business management, we empower local farmers to maximize yield and efficiency.",
      icon: BookOpen,
      gradientFrom: "from-emerald-500",
      gradientTo: "to-green-500",
    },
    {
      title: "Market Access",
      description:
        "We create connections between farmers and buyers, allowing them to expand reach and earn fair prices for their produce.",
      icon: LinkIcon,
      gradientFrom: "from-blue-500",
      gradientTo: "to-indigo-500",
    },
    {
      title: "Eco-Tourism and Agro-Processing",
      description:
        "By promoting eco-tourism and establishing local processing facilities, we add value to raw agricultural products and open doors to new employment opportunities.",
      icon: Factory,
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500",
    },
  ];

  return (
    <section className="w-full bg-black relative overflow-hidden flex items-center justify-center min-h-[350px] px-2 sm:px-4 lg:px-6">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex flex-col items-center justify-center gap-3 py-6 sm:py-8">
          {/* Header Section */}
          <div className="w-full text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Our Approach
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              BIG STEPPERS brings about change through focused initiatives and
              innovative pilot programs
            </p>
          </div>

          {/* Approach Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {approaches.map((approach) => (
              <Card
                key={approach.title} // Use `title` as key if titles are unique
                className="bg-gray-900 border-gray-800 overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon with gradient background */}
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${approach.gradientFrom} ${approach.gradientTo} 
                                  flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <approach.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200">
                      {approach.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 group-hover:text-gray-300">
                      {approach.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
