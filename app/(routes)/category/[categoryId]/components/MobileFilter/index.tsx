"use client";

// hooks
import { useState } from "react";

// headless ui component
import { Dialog } from "@headlessui/react";

// custom ui components
import { Button, IconButton } from "@/components/ui";

// icons
import { Plus, X } from "lucide-react";

// interfaces
import { Color, Size } from "@/types";
import { Filter } from "..";

export interface IMobileFilterProps {
    sizes: Size[];
    colors: Color[];
}

const MobileFilter: React.FC<IMobileFilterProps> = ({ sizes, colors }) => {
    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <>
            <Button
                onClick={onOpen}
                className="flex items-center gap-x-2 lg:hidden"
            >
                Filters
                <Plus size={20} />
            </Button>
            {/* Background */}
            <div className="fixed inset-0 bg-black bg-opacity-25" />

            {/* Dialog postion */}
            <div className="fixed inset-0 z-40 flex">
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                    {/* Close button */}
                    <div className="flex items-center justify-end px-4">
                        <IconButton icon={<X size={15} />} onClick={onClose} />
                    </div>

                    <div className="p-4">
                        <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                        <Filter
                            valueKey="colorId"
                            name="Colors"
                            data={colors}
                        />
                    </div>
                </Dialog.Panel>
            </div>
        </>
    );
};

export default MobileFilter;
