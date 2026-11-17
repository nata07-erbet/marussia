function PrivateRouter ({ children } ) {
    constt is
    return (
        <>
        {isLoading ?? <Loader />}
        {children}
        </>
    );
};

export { PrivateRouter };