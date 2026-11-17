import { Loader } from '../pages/loader';

function PrivateRouter ({ children }:  ) {
    const isLoading = true;

    return (
        <>
        {isLoading ?? <Loader />}
        {children}
        </>
    );
};

export { PrivateRouter };