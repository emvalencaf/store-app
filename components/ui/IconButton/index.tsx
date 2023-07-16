'use client';

// libs
import { cn } from "../../../libs/utils";

// interfaces
import { MouseEventHandler } from "react";

export interface IIconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    className?: string;
};

const IconButton: React.FC<IIconButtonProps> = ({ className = '', onClick, icon }) => {
    return (
<button
onClick={onClick}
className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:Scale-110 transtion", className)}
>
{icon}
</button>
    );
};

export default IconButton;
