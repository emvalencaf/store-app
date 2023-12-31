"use client";

// next components
import NextImage from "next/image";

// components
import { Tab } from "@headlessui/react";

// custom gallery internal components
import { GalleryTab } from "@/components/Gallery/components";

// interfaces
import { Image as ImageType } from "../../types";

export interface IGalleryProps {
    images?: ImageType[];
}

const Gallery: React.FC<IGalleryProps> = ({ images = [] }) => {
    return (
        <Tab.Group as="div" className="flex flex-col-reverse">
        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
          <Tab.List className="grid grid-cols-4 gap-6">
            {images.map((image) => (
              <GalleryTab key={image.id} image={image} />
            ))}
          </Tab.List>
        </div>
        <Tab.Panels className="aspect-square w-full">
          {images.map((image) => (
            <Tab.Panel key={image.id}>
              <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                <NextImage
                  fill
                  src={image.url}
                  alt="Image"
                  className="object-cover object-center"
                />
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    );
};

export default Gallery;
