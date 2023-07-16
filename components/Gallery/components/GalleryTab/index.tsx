"use client";

// next components
import Image from "next/image";

// components
import { Tab } from "@headlessui/react";

// libs
import { cn } from "@/libs/utils";

// interfaces
import { Image as ImageType } from "@/types";

export interface IGalleryTabProps {
    image: ImageType;
    className?: string;
}

const GalleryTab: React.FC<IGalleryTabProps> = ({ image }) => {
    return (
        <Tab className="relative flex aspect-square cursor-pointer items-center jusitfy-center rounded-md bg-white">
            {({ selected }) => (
                <div>
                    <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                        <Image
                            fill
                            src={image.url}
                            alt=""
                            className="object-cover object-center"
                        />
                    </span>
                    <span className={cn(
                        "absolute inset-0 rounded-md ring-2 ring-offset-2",
                        selected ? "ring-black" : "ring-transparent"
                    )}></span>
                </div>
            )}
        </Tab>
    );
};

export default GalleryTab;
