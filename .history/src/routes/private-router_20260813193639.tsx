function PrivateRouter () {
    return (
        <>
        {isLoading ?? <Loader />}
        {child}
        </>
    );
};

export { PrivateRouter };