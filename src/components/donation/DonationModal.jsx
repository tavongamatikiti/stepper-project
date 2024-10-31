import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import DonationForm from "./DonationForm";
import ConfirmationStep from "./ConfirmationStep";
import PropTypes from "prop-types";

const DonationModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState("donationForm");

  const handleShowConfirmation = () => {
    setStep("confirmationStep");
  };

  const handleBack = () => {
    setStep("donationForm");
  };

  const handleExit = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl p-0 bg-black border border-gray-800 text-white">
        {step === "donationForm" && (
          <DonationForm
            onClose={onClose}
            onShowConfirmation={handleShowConfirmation}
          />
        )}
        {step === "confirmationStep" && (
          <ConfirmationStep onBack={handleBack} onClose={handleExit} />
        )}
      </DialogContent>
    </Dialog>
  );
};

DonationModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default DonationModal;
