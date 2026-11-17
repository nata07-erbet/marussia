import { Loader } from '../pages/loader';

function PrivateRouter ({ children }: { children: ReactNode} ) {
    const isLoading = true;

    return (
        <>
        {isLoading ?? <Loader />}
        {children}
        </>
    );
};

export { PrivateRouter };