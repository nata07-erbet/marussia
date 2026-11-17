function PrivateRouter ({ children } ) {
    constt isLoading = true;
    
    return (
        <>
        {isLoading ?? <Loader />}
        {children}
        </>
    );
};

export { PrivateRouter };