"use client";

import { Toaster } from "react-hot-toast";
import { ClientComponent } from "../../components";

const ToasterProvider: React.FC = () => {
    return (
        <ClientComponent>
            <Toaster />
        </ClientComponent>
    );
};

export default ToasterProvider;
