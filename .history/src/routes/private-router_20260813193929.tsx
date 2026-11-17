function PrivateRouter ({ children } ) {
    return (
        <>
        {isLoading ?? <Loader />}
        {children}
        </>
    );
};

export { PrivateRouter };