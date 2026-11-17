import { Loader } from '../pages/loader';

function PrivateRouter ({ children }: { childre} ) {
    const isLoading = true;

    return (
        <>
        {isLoading ?? <Loader />}
        {children}
        </>
    );
};

export { PrivateRouter };