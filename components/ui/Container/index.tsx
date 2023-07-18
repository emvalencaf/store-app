// interfaces
export interface IContainerProps {
    children: React.ReactNode;
};

const Container: React.FC<IContainerProps> = ({ children }) => {
    return (
        <div className="mx-auto max-w-7xl">
        {children}
      </div>
    );
};

export default Container;
