'use client';

import { Product } from "@/types";
import { NoResults } from "@/components/ui";

// interfaces
export interface IProductListProps {
    title: string;
    items: Product[];
};

const ProductList: React.FC<IProductListProps> = ({ title, items }) => {
    return (
        <div className="space-y-4">
            <h3 className="font-bold text-3xl"> {title} </h3>
            {!items || items.length === 0 && (
                <NoResults />
            )}
        </div>
    );
};

export default ProductList;
