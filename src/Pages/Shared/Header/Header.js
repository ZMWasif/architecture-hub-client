import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import React from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="pages" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="pages" as={Link} to="/contact">
                Contact
              </Nav.Link>

              <Nav.Link className="pages" as={Link} to="/features">
                Features
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="pages" as={Link} to="/about">
                About
              </Nav.Link>
              {user && (
                <>
                  <Nav.Link className="pages" as={Link} to="/adddemo">
                    Add
                  </Nav.Link>
                  <Nav.Link className="pages" as={Link} to="/manage">
                    Manage
                  </Nav.Link>
                </>
              )}
              {user ? (
                <Button className="signout-btn" onClick={handleSignOut}>
                  {" "}
                  Sign Out <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>
                </Button>
              ) : (
                <Nav.Link className="pages" as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              {/*  {user ? (
                <button
                  className="btn btn-link text-white"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              ) : (
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              )} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
