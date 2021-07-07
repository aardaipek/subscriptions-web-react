import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">React App</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <NavLink to="/todo" style={navBarStyle}>Todos</NavLink>
          <NavLink to="/login" style={navBarStyle}>Login</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const navBarStyle = {
  'padding':'5px'
};

export default NavigationBar;
