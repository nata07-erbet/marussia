import { Loader } from '../pages/loader';

function PrivateRouter ({ children }: { ch} ) {
    const isLoading = true;

    return (
        <>
        {isLoading ?? <Loader />}
        {children}
        </>
    );
};

export { PrivateRouter };