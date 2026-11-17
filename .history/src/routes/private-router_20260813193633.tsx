function PrivateRouter () {
    return (
        <>
        {isLoading ?? <Loader />}
        {childer}
        </>
    );
};

export { PrivateRouter };