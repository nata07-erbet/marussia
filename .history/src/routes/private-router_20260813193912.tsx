function PrivateRouter ({ chi}) {
    return (
        <>
        {isLoading ?? <Loader />}
        {children}
        </>
    );
};

export { PrivateRouter };