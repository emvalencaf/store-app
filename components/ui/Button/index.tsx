'use client';

import { forwardRef } from "react";
import { cn } from "../../../libs/utils";

// interfaces
export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {};

const Button: React.FC<IButtonProps> = forwardRef<HTMLButtonElement, IButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
        className={cn(`
            w-auto
            rounded-full
            bg-black
            border-transparent
            px-5
            py-3
            disabled:cursor-not-allowed
            disabled:opacity-50
            text-white
            font-semibold
            hover:opacity-75
            transition
        `, className)}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = "Button";

export default Button;
