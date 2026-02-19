import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";


function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Vivek Portfolio
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/analytics">Analytics</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
