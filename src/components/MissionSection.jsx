import { Leaf } from "lucide-react";
import community from "@/assets/community.jpg";

const MissionSection = () => {
  return (
    <div className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-400 mb-8">
              We're on a mission to transform agriculture into a powerful engine
              for job creation, economic growth, and community resilience in
              Zimbabwe.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center mr-4">
                  <Leaf className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white">
                    Sustainable Practices
                  </h3>
                  <p className="text-gray-400">
                    Implementing eco-friendly farming methods that preserve our
                    environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-zinc-800">
              <img
                src={community}
                alt="Farming Community"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-zinc-900 rounded-xl p-8 border border-zinc-800">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-green-500 mb-1">
                    50+
                  </div>
                  <div className="text-sm text-gray-400">Farmers Helped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-500 mb-1">
                    30%
                  </div>
                  <div className="text-sm text-gray-400">Yield Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
