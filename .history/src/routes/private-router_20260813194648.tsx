import { Loader } from '../pages/loader';

function PrivateRouter ({ children }: { children: ReactNone} ) {
    const isLoading = true;

    return (
        <>
        {isLoading ?? <Loader />}
        {children}
        </>
    );
};

export { PrivateRouter };