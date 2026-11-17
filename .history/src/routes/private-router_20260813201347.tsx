import { ReactNode } from 'react';
import { Loader } from '../pages/loader';
import { useGetProfileQuery } from '../services/'



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