import { Heart, ArrowLeft } from "lucide-react";
import PropTypes from "prop-types";

const ConfirmationStep = ({ onBack, onClose }) => (
  <div className="space-y-6 bg-black text-white">
    <div className="relative">
      <button
        onClick={onBack}
        className="absolute left-0 top-0 text-gray-400 hover:text-white m-4"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      {/* Placeholder div to match the image height in DonationForm */}
      <div className="w-full h-48 rounded-t-lg bg-gray-800 opacity-90 flex items-center justify-center">
        <Heart className="h-16 w-16 text-red-500 animate-pulse" />
      </div>

      <div className="p-6 space-y-4 text-center">
        <h2 className="text-xl font-semibold text-white">
          With your help, we could do more
        </h2>
        <p className="text-gray-300">
          Empower farmers with your support. We hope you'll stay to make a
          lasting impact on their lives.
        </p>
        <div className="space-y-3">
          <button
            onClick={onBack}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            I will help
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 bg-gray-800 text-white border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Not today
          </button>
        </div>
      </div>
    </div>
  </div>
);

ConfirmationStep.propTypes = {
  onBack: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ConfirmationStep;
