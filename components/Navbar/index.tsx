// actions
import { getCategories } from "@/actions";

// next components
import Link from "next/link";

// custom components
import { Container } from "@/components/ui";

// custom navbar components
import { MainNav, NavbarActions } from "@/components/Navbar/components";
import ClientComponent from "../ClientComponent";

export const revalidate = 0;

const Navbar: React.FC = async () => {
    const categories = await getCategories();

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl">STORE</p>
                    </Link>
                    <MainNav data={categories} />
                    <ClientComponent>
                        <NavbarActions />
                    </ClientComponent>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
