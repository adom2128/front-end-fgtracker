import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      {/* <NavLink to="/home">Home</NavLink> */}
      <NavLink to="/">Dashboard</NavLink>
      {/* <NavLink to="/admin">Admin</NavLink> */}
      <NavLink to="/completed">Completed</NavLink>
    </nav>
  );
};

export default NavBar;
