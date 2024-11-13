"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";

import Filter from "@/features/category/components/filter";
import type IColor from "@/features/colors/core/types";
import type ISize from "@/features/sizes/core/types";

import { Button } from "@/components/ui/button";

interface IMobileFiltersProps {
  sizes?: ISize[];
  colors?: IColor[];
}

const MobileFilters = ({ sizes, colors }: IMobileFiltersProps) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
        Filters <Plus className="size-20" />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative ml-auto flex size-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full shadow-xl"
                onClick={onClose}
              >
                <X size={15} />
              </Button>
            </div>
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
