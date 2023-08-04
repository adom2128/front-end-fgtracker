import { useAuth0 } from '@auth0/auth0-react';
import './Profile.css';
import LogoutButton from './LogoutButton';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <div className="profile-container">
          <img src={user!.picture} className="user-picture" alt="user"/>
          <h6 className="user-name">{user!.name}</h6>
          <LogoutButton />
        </div>
      )}
    </>
  );
};

export default Profile;
