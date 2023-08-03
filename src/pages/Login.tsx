import LoginButton from '../components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  if (isLoading) {
    return null;
  }

  if (isAuthenticated) {
    navigate('/home');
  }

  return <>{!isAuthenticated && <LoginButton />}</>;
};

export default Login;
