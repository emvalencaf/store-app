"use client";

// custom components
import { ClientComponent } from "../../components";

// custom ui components
import { PreviewModal } from "../../components/ui";

// interfa

const ModalProvider: React.FC = () => {
    return (
        <>
            <ClientComponent>
                <PreviewModal />
            </ClientComponent>
        </>
    );
};

export default ModalProvider;
