"use client";

import Gallery from "@/features/product/components/gallery";

import usePreviewModal from "@/core/hooks/use-preview-modal.hooks";
import Modal from "@/components/ui/modal";
import ProductInformation from "@/features/product/components/product-information";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) return null;

  return (
    <div>
      <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
        <div className="w-full grid grid-cols-1 items-start gap-x-6 sm:grid-cols-12 lg:gap-x-8">
          <div className="sm:col-span-4 lg:col-span-5">
            <Gallery images={product.images} />
          </div>
          <div className="sm:col-span-8 lg:col-span-7">
            <ProductInformation product={product} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PreviewModal;
