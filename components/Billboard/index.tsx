"use client";

import { cn } from "../../libs/utils";
// interfaces
import { Billboard as BillboardType } from "../../types";

export interface IBillboardProps {
    data: BillboardType;
}

const Billboard: React.FC<IBillboardProps> = ({ data }) => {
    console.log(data.labelColor);
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
            <div
                style={{ backgroundImage: `url(${data?.imageUrl})` }}
                className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
            >
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div
                        className={cn(
                            "font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs"
                        )}
                        style={{
                            color: data.labelColor,
                        }}
                    >
                        <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            {data.label}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billboard;
