"use client";

// hooks
import { useSearchParams, useRouter } from "next/navigation";

// query string
import queryString from "query-string";

// custom ui components
import { Button } from "@/components/ui";

// libs
import { cn } from "@/libs/utils";

// interfaces
import { Color, Size } from "@/types";

export interface IFilterProps {
    valueKey: string;
    name: string;
    data: (Size | Color)[];
}

const Filter: React.FC<IFilterProps> = ({ data, name, valueKey }) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey);

    const onClick = (id: string) => {
        const current = queryString.parse(searchParams.toString());

        const query = {
            ...current,
            [valueKey]: id,
        };

        if (current[valueKey] === id) {
            query[valueKey] = null;
        }

        const url = queryString.stringifyUrl(
            {
                url: window.location.href,
                query,
            },
            { skipNull: true }
        );

        router.push(url);
    };

    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold">{name}</h3>
            <hr className="my-4" />
            <div className="flex flex-wrap gap-2">
                {data.map((filter) => (
                    <div key={filter.id} className="flex items-center">
                        <Button
                            className={cn(
                                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                                selectedValue === filter.id &&
                                    "bg-black text-white"
                            )}
                            onClick={() => onClick(filter.id)}
                        >
                            {filter.name}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filter;
