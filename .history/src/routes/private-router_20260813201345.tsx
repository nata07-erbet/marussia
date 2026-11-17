import { ReactNode } from 'react';
import { Loader } from '../pages/loader';
import { useGetProfileQuery } from '../ser'



function PrivateRouter ({ children }: { children?: ReactNode} ) {
    const isLoading = true;

    return (
        <>
        {isLoading ?? <Loader />}
        {children}
        </>
    );
};

export { PrivateRouter };