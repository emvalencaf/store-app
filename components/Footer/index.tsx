// interfaces
export interface IFooterProps {
    title?: string;
}

const Footer: React.FC<IFooterProps> = ({ title = "" }) => {
    return (
        <footer className="bg-white border-t">
            <div className="mx-auto py-10">
                <p className="text-center text-xs text-black">
                    &copy; 2023 FakeStoreNameA, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
