function PrivateRouter ({ children } ) {
    constt isLoading
    return (
        <>
        {isLoading ?? <Loader />}
        {children}
        </>
    );
};

export { PrivateRouter };