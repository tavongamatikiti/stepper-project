import { X } from "lucide-react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import donationImage from "@/assets/donation.avif";

const DonationForm = ({ onClose, onShowConfirmation }) => {
  const [donationType, setDonationType] = useState("once");
  const [amount, setAmount] = useState("");
  const [showCheers, setShowCheers] = useState(false);

  const predefinedAmounts = [
    { value: "30000", label: "RF 30K" },
    { value: "25000", label: "RF 25K" },
    { value: "20000", label: "RF 20K" },
    { value: "15000", label: "RF 15K" },
  ];

  useEffect(() => {
    if (showCheers) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000); // Close modal after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [showCheers, onClose]);

  const handleDonateClick = () => {
    setShowCheers(true);
  };

  const handleCloseClick = () => {
    onShowConfirmation();
  };

  return (
    <div className="space-y-6 bg-black text-white">
      <div className="relative">
        <button
          onClick={handleCloseClick}
          className="absolute right-0 top-0 text-gray-400 hover:text-white z-10 m-4"
        >
          <X className="h-5 w-5" />
        </button>

        <img
          src={donationImage}
          alt="Donation"
          className="w-full rounded-t-lg opacity-90"
        />

        <div className="p-6 space-y-4">
          {showCheers ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold mb-4">Cheers!</h2>
              <p className="text-gray-300">
                Thank you for your generous donation.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-white">
                Make a Different Kind of Difference
              </h2>
              <p className="text-gray-300">
                You can empower farmers and small business owners around the
                world. Your generous donation will help provide the skills,
                connections, and confidence they need.
              </p>

              <div className="flex gap-2 mb-4">
                <button
                  className={`flex-1 py-2 px-4 rounded-lg border ${
                    donationType === "once"
                      ? "bg-gray-800 border-blue-500 text-white"
                      : "border-gray-700 text-gray-300 hover:bg-gray-800"
                  }`}
                  onClick={() => setDonationType("once")}
                >
                  Give once
                </button>
                <button
                  className={`flex-1 py-2 px-4 rounded-lg border ${
                    donationType === "monthly"
                      ? "bg-gray-800 border-blue-500 text-white"
                      : "border-gray-700 text-gray-300 hover:bg-gray-800"
                  }`}
                  onClick={() => setDonationType("monthly")}
                >
                  Monthly
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {predefinedAmounts.map((preset) => (
                  <button
                    key={preset.value}
                    className={`py-2 px-4 rounded-lg border ${
                      amount === preset.value
                        ? "bg-gray-800 border-blue-500 text-white"
                        : "border-gray-700 text-gray-300 hover:bg-gray-800"
                    }`}
                    onClick={() => setAmount(preset.value)}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              <div className="flex gap-2 items-center border border-gray-700 rounded-lg p-2 bg-gray-900">
                <span className="text-gray-400">RF</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 outline-none bg-transparent text-white"
                  placeholder="Other amount"
                />
                <span className="text-gray-400">RWF</span>
              </div>

              <button
                onClick={handleDonateClick}
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {donationType === "monthly" ? "Donate monthly" : "Donate"}
              </button>

              <div className="flex justify-center gap-4 text-sm text-gray-400">
                <button className="hover:text-white">
                  Is my donation secure?
                </button>
                <span>•</span>
                <button className="hover:text-white">Tax deductible?</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

DonationForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onShowConfirmation: PropTypes.func.isRequired,
};

export default DonationForm;
