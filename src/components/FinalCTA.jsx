import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <div className="relative bg-gradient-to-r from-zinc-900 to-zinc-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-8">Join Our Mission</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Together, we can create sustainable change and empower communities across Zimbabwe.
        </p>
        <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center hover:bg-green-700 transition-colors text-lg">
          Get Involved
          <ArrowRight className="ml-2 w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default FinalCTA;
