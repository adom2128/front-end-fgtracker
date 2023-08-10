import { Outlet, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoute;
