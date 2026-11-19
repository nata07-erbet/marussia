import { ReactNode } from 'react';
import { Loader } from '../pages/loader';
import { useGetProfileQuery } from '../services/user-api';

function PrivateRouter({ children }: { children?: ReactNode }) {
  const { data, error, isLoading } = useGetProfileQuery();

  use

  return (
    <>
      {isLoading && <Loader />}
      {children}
    </>
  );
}

export { PrivateRouter };
