"use client";

// hooks
import { useRouter } from "next/navigation";

// custom hooks
import { usePreviewModal } from "../../../hooks";

// next components
import Image from "next/image";

// custom ui components
import { Currency, IconButton } from "@/components/ui";

// custom components
import {ClientComponent} from "@/components";

// icons
import { Expand, ShoppingCart } from "lucide-react";

// interfaces
import { Product } from "@/types";
import { MouseEventHandler } from "react";

export interface IProductCardProps {
    data: Product;
}

const ProductCard: React.FC<IProductCardProps> = ({ data }) => {

    const previewModal = usePreviewModal();

    const router = useRouter();

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    }

    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    }

    return (
        <div onClick={handleClick} className="bg-white cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images and Actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relativve">
                <Image
                    src={data?.images?.[0]?.url}
                    fill
                    alt="Image"
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={onPreview}
                            icon={<Expand size={20} />}
                            className="text-gray-600"
                        />
                        <IconButton
                            onClick={() => {}}
                            icon={<ShoppingCart size={20} />}
                            className="text-gray-600"
                        />
                    </div>
                </div>
                {/* description */}
                <div>
                    <p className="font-semibold text-lg">{data.name}</p>
                    <p className="text-sm text-gray-500">
                        {data.category?.name}
                    </p>
                </div>
                {/* Price */}
                <div className="flex items-center justify-between">
                    <ClientComponent>
                        <Currency value={data.price} />
                    </ClientComponent>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
