import { Loader } from '../pages/loader';

function PrivateRouter ({ children }: { children: React} ) {
    const isLoading = true;

    return (
        <>
        {isLoading ?? <Loader />}
        {children}
        </>
    );
};

export { PrivateRouter };