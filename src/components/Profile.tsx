import { useAuth0 } from '@auth0/auth0-react';
import './Profile.css';
import LogoutButton from './LogoutButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <div className="profile-container">
          {/* <FontAwesomeIcon icon={faUser} className="user-icon"/> */}
          <img src={user!.picture} className="user-picture" />
          <h6 className="user-name">{user!.name}</h6>

          <LogoutButton />
        </div>
      )}
    </>
  );
};

export default Profile;
