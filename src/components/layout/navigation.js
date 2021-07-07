import { Link ,NavLink} from "react-router-dom";
import { Navbar,Nav } from "react-bootstrap";

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
          <NavLink to="/todo">Todos</NavLink>
            
          <NavLink to="/login">
          Login
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
