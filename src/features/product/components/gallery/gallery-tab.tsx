import Image from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/core/utils";
import { IImage } from "@/core/types";

const GalleryTab = ({ image }: { image: IImage }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute size-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt="Product image"
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "rind-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
