import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>__|__
      <NavLink to="/dashboard">Dashboard</NavLink>__|__ 
      <NavLink to="/completed">Completed</NavLink> 
    </nav>
  );
};

export default NavBar;
