import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Profile from './Profile';
import LogoutButton from './LogoutButton';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="nav-bar-body">
      <Container>
        <div className="d-flex align-items-center">
          <Navbar.Brand href="/home">
            <img
              src="FGTracker_logo.png"
              className="nav-bar-logo"
              alt="FGTracker logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
        </div>
      </Container>

      <Navbar.Collapse id="nav-bar-nav-links">
        <Container>
          <Nav className="mr-auto">
            <NavLink to="/home" className="nav-link nav-bar-text">
              Home
            </NavLink>
            <NavLink to="/dashboard" className="nav-link nav-bar-text">
              Dashboard
            </NavLink>
            <NavLink to="/completed" className="nav-link nav-bar-text">
              Completed
            </NavLink>
          </Nav>
        </Container>
        <Container>
          <LogoutButton />
        </Container>
      </Navbar.Collapse>

      <Profile />
    </Navbar>
  );
};

export default NavBar;
