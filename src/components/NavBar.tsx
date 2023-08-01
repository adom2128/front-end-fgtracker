import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/" className="nav-link nav-bar-text">
            Home
          </NavLink>
          <NavLink to="/dashboard" className="nav-link nav-bar-text">
            Dashboard
          </NavLink>
          <NavLink to="/completed" className="nav-link nav-bar-text">
            Completed
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
