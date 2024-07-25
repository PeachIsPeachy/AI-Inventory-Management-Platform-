import { create } from 'zustand';

interface BookingModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useBookingModal = create<BookingModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useBookingModal;
