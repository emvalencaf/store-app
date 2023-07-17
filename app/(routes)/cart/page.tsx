"use client";

// custom hooks
import { useCart } from "@/hooks";

// custom components
import { ClientComponent } from "@/components";

// custom ui components
import { Container } from "@/components/ui";

// custom cart internal components
import { CartItem, Summary } from "./components";

const CartPage: React.FC = () => {
    const cart = useCart();

    return (
        <ClientComponent>
            <div className="bg-white">
                <Container>
                    <div className="px-4 py-16 lg:px-8 sm:px-6">
                        <h1 className="text-3xl font-bold text-black">
                            Shopping Cart
                        </h1>
                        <div className="mt-12 lg:Grid lg:grid-cols-12 lg:items-start gap-x-12">
                            <div className="lg:col-span-7">
                                {cart.items.length === 0 && (
                                    <p className="text-neutral-500">
                                        No items added to cart
                                    </p>
                                )}
                                <ul>
                                    {cart.items.map((item) => (
                                        <CartItem key={item.id} data={item} />
                                    ))}
                                </ul>
                            </div>
                            <Summary />
                        </div>
                    </div>
                </Container>
            </div>
        </ClientComponent>
    );
};

export default CartPage;
