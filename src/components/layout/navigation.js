import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import NavbarBrandText from "../ui-components/navigation/headerText";

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">
        <NavbarBrandText title="My Subs"></NavbarBrandText>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <div className="d-flex justify-content-space-between">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div style={{flex:"flex-grow"}}>
              <NavLink to="/home" style={navBarStyle}>
                Subs
              </NavLink>
            </div>
            <div>
              <NavLink className="" to="/login" style={navBarStyle}>
                Login
              </NavLink>
            </div>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

const navBarStyle = {
  padding: "5px",
};

export default NavigationBar;
