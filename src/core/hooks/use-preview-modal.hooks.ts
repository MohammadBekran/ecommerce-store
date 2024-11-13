import { create } from "zustand";

import type IProduct from "@/features/product/core/types";

interface IPreviewModalProps {
  isOpen: boolean;
  data?: IProduct;
  onOpen: (data: IProduct) => void;
  onClose: () => void;
}

const usePreviewModal = create<IPreviewModalProps>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: IProduct) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
