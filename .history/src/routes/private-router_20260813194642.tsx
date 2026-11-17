import { Loader } from '../pages/loader';

function PrivateRouter ({ children }: { children: Reac} ) {
    const isLoading = true;

    return (
        <>
        {isLoading ?? <Loader />}
        {children}
        </>
    );
};

export { PrivateRouter };