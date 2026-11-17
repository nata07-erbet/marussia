import { Loader } from '../pages/loader';

function PrivateRouter ({ children }: { children: R} ) {
    const isLoading = true;

    return (
        <>
        {isLoading ?? <Loader />}
        {children}
        </>
    );
};

export { PrivateRouter };