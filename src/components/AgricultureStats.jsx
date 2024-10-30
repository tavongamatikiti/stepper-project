import { Crop, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AgricultureStats = () => {
  return (
    <section className="w-full bg-black relative overflow-hidden flex items-center justify-center min-h-[350px] px-2 sm:px-4 lg:px-6">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex flex-col items-center justify-center gap-3 py-6 sm:py-8">
          {/* Header Section */}
          <div className="w-full text-center mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Key Stats & Impact
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Highlighting key data and anticipated project impact in Zimbabwe's
              agricultural sector
            </p>
          </div>

          {/* Stats Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Agricultural Population Card */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="pt-6 px-4 sm:px-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-500/10 p-3 rounded-full mb-4">
                    <Crop className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-4xl font-bold text-blue-500 mb-2">
                    60-70%
                  </h3>
                  <p className="text-gray-400">
                    of Zimbabwe's population relies on agriculture, facing
                    climate challenges
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Job Creation Card */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="pt-6 px-4 sm:px-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-500/10 p-3 rounded-full mb-4">
                    <Users className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-4xl font-bold text-green-500 mb-2">
                    500+
                  </h3>
                  <p className="text-gray-400">
                    sustainable jobs to be created in the next three years
                    through yield improvements
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Growth Rate Card */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="pt-6 px-4 sm:px-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-purple-500/10 p-3 rounded-full mb-4">
                    <TrendingUp className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-4xl font-bold text-purple-500 mb-2">
                    9.7%
                  </h3>
                  <p className="text-gray-400">
                    agricultural growth in Honde Valley, becoming a regional
                    leader
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgricultureStats;
