import { Sprout, Heart, Globe } from "lucide-react";

const features = [
  {
    icon: <Sprout className="w-8 h-8" />,
    title: "Sustainable Growth",
    description:
      "We believe in fostering agricultural practices that benefit both communities and the environment.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Community Care",
    description:
      "Our approach centers on empowering local communities through education and resources.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Impact",
    description:
      "While we act locally, our vision encompasses creating lasting change on a broader scale.",
  },
];

const AboutHero = () => {
  return (
    <section className="pt-20 sm:pt-24 bg-black flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-8 sm:py-10 lg:py-12">
        <div className="flex flex-col items-center">
          <div className="w-full text-center relative z-10">
            <h1 className="text-5xl font-bold text-white mb-4 sm:mb-6">
              Growing Together for a Better Future
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8">
              BIG STEPPERS is revolutionizing agricultural practices in
              Zimbabwe, creating sustainable opportunities for communities to
              thrive.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-xl p-8 transform hover:-translate-y-1 transition-transform duration-300 border border-zinc-800"
              >
                <div className="text-green-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
