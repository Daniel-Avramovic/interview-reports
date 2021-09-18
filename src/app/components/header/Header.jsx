import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ logOut }) => {
  return (
    <header>
      <Navbar className="navStyle" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            // className="d-flex justify-content-end"
          >
            <Nav  className="ms-auto">
              <Link to="/" className="float">
                Home
              </Link>
              <Link to="/reports" className="float">
                Reports
              </Link>
              <Link to="/createReport" className="float">
                Create Report
              </Link>
              <button onClick={logOut}>Logout</button>
              {/* <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
