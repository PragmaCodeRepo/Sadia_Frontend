import React from "react";
import "./NavBarr.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../assets/logo_bg.png";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavBarr = () => {
  
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-0" sticky="top">
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                alt=""
                src={Logo}
                width="50"
                height="45"
                className="d-inline-block align-top nav-img"
              />{" "}
              <span id="nav-title">Pragma</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              style={{ width: "50%" }}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    alt=""
                    src={Logo}
                    width="35"
                    height="30"
                    className="d-inline-block align-top nav-img"
                  />{" "}
                  &nbsp;Pragma
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/" id="Home">
                    Home
                  </Nav.Link>
                  <Nav.Link href="/aboutus" id="aboutus">
                    About us
                  </Nav.Link>
                  <Nav.Link href="/contactus" id="contactus">
                    Contact us
                  </Nav.Link>
                  <Nav.Link href="/Partner" id="contactus">
                    Become a partner
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBarr;
