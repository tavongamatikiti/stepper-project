import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const TeamMemberModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMember(null);
    setIsModalOpen(false);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={closeModal}>
      {selectedMember && (
        <DialogContent className="bg-zinc-900 border-zinc-800">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold mb-2 text-white">
              {selectedMember.name}
            </DialogTitle>
            <DialogDescription>
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                  <img
                    src={`/api/placeholder/300/300`} // This can be replaced with the member's image URL, e.g., selectedMember.image
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white text-sm">{selectedMember.position}</p>
                  <p className="text-zinc-400 text-xs">{selectedMember.email}</p>
                </div>
              </div>
              <p className="text-zinc-300 mb-4">{selectedMember.description}</p>
            </DialogDescription>
          </DialogHeader>
          <button
            onClick={closeModal}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close
          </button>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default TeamMemberModal;
