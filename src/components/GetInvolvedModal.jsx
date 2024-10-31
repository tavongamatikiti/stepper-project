import PropTypes from "prop-types";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const GetInvolvedModal = ({ isOpen, onClose }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-xl p-6 bg-black border border-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-6">Get Involved</h2>

      <div className="space-y-6">
        <div className="p-4 border border-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
          <p className="text-gray-300 mb-4">
            Share your skills and time to make a direct impact in our
            communities.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Sign Up as Volunteer
          </Button>
        </div>

        <div className="p-4 border border-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Partner With Us</h3>
          <p className="text-gray-300 mb-4">
            Organizations can collaborate with us to create lasting change.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Submit Partnership Inquiry
          </Button>
        </div>

        <div className="p-4 border border-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Become an Advocate</h3>
          <p className="text-gray-300 mb-4">
            Help spread awareness about our mission and impact.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Access Resources
          </Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

GetInvolvedModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default GetInvolvedModal;
