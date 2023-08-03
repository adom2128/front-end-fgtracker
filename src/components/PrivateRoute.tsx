import { Outlet, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from './NavBar';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    console.log(isAuthenticated);
    return <Navigate to="/" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoute;
