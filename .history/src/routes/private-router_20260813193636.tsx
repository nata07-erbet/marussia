function PrivateRouter () {
    return (
        <>
        {isLoading ?? <Loader />}
        {childe}
        </>
    );
};

export { PrivateRouter };