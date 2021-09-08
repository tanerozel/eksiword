const AppContent = ({ children }) => {
    return (
        <>
            <main className="d-flex flex-column mt-auto">
                <div className="container-medium text-center">
                    {children}
                </div>
            </main>
        </>
    );
};

export default AppContent;
