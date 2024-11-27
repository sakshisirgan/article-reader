import { Link, useNavigate } from "react-router-dom"; 
import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import { FaSearch } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa'; 
import PropTypes from 'prop-types';

const NavigationBar = ({ user, notifications }) => {
  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.searchInput.value; 
    if (query) {
      navigate(`/article/${query}`); 
    }
  };

  return (
    <Navbar bg="primary" variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Article Reader
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

            <NavDropdown title="Menu" id="basic-nav-dropdown">
 
              <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="ms-3">
            <Nav.Link as={Link} to="/profile">
              <span>Welcome, {user}</span>
            </Nav.Link>
          </Nav>

          <Form className="d-flex" onSubmit={handleSearch}> 
            <FormControl
              type="search"
              name="searchInput" 
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light" type="submit"><FaSearch /></Button>
          </Form>

          <Nav className="ms-3">
            <Nav.Link as={Link} to="/notifications" className="notifications-icon">
              <FaBell size={20} className="text-light" /> 
              {notifications > 0 && <span className="badge bg-danger ms-1">{notifications}</span>} 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


NavigationBar.propTypes = {
  user: PropTypes.string.isRequired,
  notifications: PropTypes.number.isRequired,
};

export default NavigationBar;
