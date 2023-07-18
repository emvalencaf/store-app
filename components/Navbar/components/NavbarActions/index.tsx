"use client";

// custom hooks
import { useCart } from "@/hooks";

// ui
import { Button } from "@/components/ui";

// icons
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

// interfaces
export interface INavbarActionsProps {
    title?: string;
}

const NavbarActions: React.FC<INavbarActionsProps> = ({ title = "" }) => {
    const cart = useCart();

    const router = useRouter();

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button
                onClick={() => router.push("/cart")}
                className="flex items-center rounded-full bg-black px-4 py-2"
            >
                <ShoppingBag size={20} color="white" />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    );
};

export default NavbarActions;
