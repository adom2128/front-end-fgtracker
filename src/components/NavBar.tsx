import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Profile from './Profile';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar expand="xl" className="nav-bar-body">
      <div className="d-flex align-items-center">
        <Navbar.Brand>
          <img
            src="FGTracker_logo.png"
            className="nav-bar-logo"
            alt="FGTracker logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
      </div>

      <Navbar.Collapse>
        <Container className="collapse-container">
          <Container className="nav-links-container">
            <Nav className="nav-links">
              <NavLink to="/home" className="nav-link nav-bar-text">
                Home
              </NavLink>
              <NavLink to="/dashboard" className="nav-link nav-bar-text">
                Dashboard
              </NavLink>
              <NavLink to="/completed" className="nav-link nav-bar-text">
                Completed
              </NavLink>
              <NavLink to="/payments" className="nav-link nav-bar-text">
                Payments
              </NavLink>
            </Nav>
          </Container>
          <Container className="profile-container">
            <Profile />
          </Container>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
