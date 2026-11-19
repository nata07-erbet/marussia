import { ReactNode, useEffect, useState } from 'react';
import { Loader } from '../pages/loader';
import { useGetProfileQuery } from '../services/user-api';

function PrivateRouter({ children }: { children?: ReactNode }) {
  const { data, error, isLoading } = useGetProfileQuery();
  const [ isAuthenticated, setisAuthenticated ] = useState()

  useEffect(() => {
    if(!isLoading) {

    }

  }, [data, error, isLoading ]);

  return (
    <>
      {isLoading && <Loader />}
      {children}
    </>
  );
}

export { PrivateRouter };
