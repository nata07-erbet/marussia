import { ReactNode, useEffect, useState } from 'react';
import { Loader } from '../pages/loader';
import { useGetProfileQuery } from '../services/user-api';

function PrivateRouter({ children }: { children?: ReactNode }) {
  const { data, error, isLoading } = useGetProfileQuery();
  const [ isAuthenticated, setIsAuthenticated ] = useState< boolean | undefined >();


  useEffect(() => {
    if(!isLoading) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [data, error, isLoading ]);

  useEffect (() => {
    if(isAuthenticated === unde)
  })

  return (
    <>
      {isLoading && <Loader />}
      {children}
    </>
  );
}

export { PrivateRouter };
