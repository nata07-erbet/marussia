import { ReactNode, useEffect, useState } from 'react';
import { Loader } from '../pages/loader';
import { useGetProfileQuery } from '../services/user-api';
import { useNavigate } from 'react-router';

function PrivateRouter({ children }: { children?: ReactNode }) {
  const { data, error, isLoading } = useGetProfileQuery();
  const [ isAuthenticated, setIsAuthenticated ] = useState< boolean | undefined >();

  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoading) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [data, error, isLoading ]);

  useEffect (() => {
    if (isAuthenticated === undefined) return;

    if(!isAuthenticated) {
      alert ("User is not authenticated"); 
    } else {
      navigate(App)
    }
  })

  return (
    <>
      {isLoading && <Loader />}
      {children}
    </>
  );
}

export { PrivateRouter };
