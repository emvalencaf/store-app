"use client";

// hooks
import { useRouter } from "next/navigation";

// custom hooks
import { useCart, usePreviewModal } from "@/hooks";

// next components
import Image from "next/image";

// custom ui components
import { Currency, IconButton } from "@/components/ui";

// custom components
import { ClientComponent } from "@/components";

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

    const cart = useCart();

    const router = useRouter();

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        cart.addItem(data);
    };

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    };

    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
        >
            {/* Image & actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    src={data.images?.[0]?.url}
                    alt=""
                    fill
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={onPreview}
                            icon={
                                <Expand size={20} className="text-gray-600" />
                            }
                        />
                        <IconButton
                            onClick={onAddToCart}
                            icon={
                                <ShoppingCart
                                    size={20}
                                    className="text-gray-600"
                                />
                            }
                        />
                    </div>
                </div>
            </div>
            {/* Description */}
            <div>
                <p className="font-semibold text-lg">{data.name}</p>
                <p className="text-sm text-gray-500">{data.category?.name}</p>
            </div>
            {/* Price & Reiew */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price} />
            </div>
        </div>
    );
};

export default ProductCard;
