function PrivateRouter () {
    return (
        <>
        {isLoading ?? <Loader />}
        {chil}
        </>
    );
};

export { PrivateRouter };