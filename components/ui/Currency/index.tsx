'use client';

import { formatter } from "@/libs/utils";

// interfaces
export interface ICurrencyProps {
    value?: string | number;
};

const Currency: React.FC<ICurrencyProps> = ({ value, }) => {
    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    );
};

export default Currency;
