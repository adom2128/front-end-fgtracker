import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Modal } from 'react-bootstrap';
import './LoginButton.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-container">
      <h1>Welcome to FGTracker</h1>
      <img
        src="FGTracker_logo.png"
        alt="FGTracker logo"
        className="login-logo"
      />
      <p>Log in or sign up below</p>

      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
};

export default LoginButton;
