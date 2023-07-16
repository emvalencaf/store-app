// actions
import { getBillboard, getProducts } from "@/actions";

// custom components
import { Billboard } from "@/components";

// ui components
import { Container, ProductList } from "@/components/ui";

export const revalidate = 0;

const HomePage: React.FC = async () => {
    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboard("");

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <div className="flex gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    );
};

export default HomePage;
