import { useAuth0 } from '@auth0/auth0-react';
import './LogoutButton.css';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="logout-button btn-primary"
      onClick={() =>
        logout({ logoutParams: { returnTo: 'https://adom2128.github.io/front-end-fgtracker/' } })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
