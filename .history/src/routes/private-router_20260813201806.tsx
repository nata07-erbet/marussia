import { ReactNode } from 'react';
import { Loader } from '../pages/loader';
import {  } from '../services/user-api';

function PrivateRouter({ children }: { children?: ReactNode }) {
  const { data, error, isLoading } = useGetProfileQuery();

  return (
    <>
      {isLoading ?? <Loader />}
      {children}
    </>
  );
}

export { PrivateRouter };
