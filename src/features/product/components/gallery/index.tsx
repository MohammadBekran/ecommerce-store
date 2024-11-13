"use client";

import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

import type IImage from "@/features/images/core/types";
import GalleryTab from "@/features/product/components/gallery/gallery-tab";

const Gallery = ({ images }: { images?: IImage[] }) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images?.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full">
        {images?.map((image) => (
          <TabPanel key={image.id}>
            <div className="relative size-full overflow-hidden aspect-square sm:rounded-lg">
              <Image
                fill
                src={image.url}
                alt="Product image"
                className="object-cover object-center"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
