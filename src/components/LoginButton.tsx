import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Modal } from 'react-bootstrap';

interface LoginButtonProps {
  show: boolean;
}

const LoginButton = ({ show }: LoginButtonProps) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Modal show={show} centered >
        <Modal.Header>
          <Modal.Title>Welcome to FGTracker</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src="FGTracker_logo.png"
            className="nav-bar-logo"
            alt="FGTracker logo"
          />
          <p>Log in or sign up below</p>
          <button onClick={() => loginWithRedirect()}>Log In</button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginButton;
