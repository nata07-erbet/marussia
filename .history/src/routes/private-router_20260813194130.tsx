import { Loader } from '../pages/'
function PrivateRouter ({ children } ) {
    const isLoading = true;

    return (
        <>
        {isLoading ?? <Loader />}
        {children}
        </>
    );
};

export { PrivateRouter };