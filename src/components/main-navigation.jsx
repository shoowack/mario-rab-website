import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function MainNavigation({ scrollWithOffset }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Link
          className="navbar-brand"
          smooth
          to="/#"
          scroll={(el) => scrollWithOffset(el)}
        >
          Mario Rab
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link
              smooth
              className="nav-link"
              activeClassName="active"
              to="/#"
              scroll={(el) => scrollWithOffset(el)}
            >
              Home
            </Link>
            <Link
              smooth
              className="nav-link"
              activeClassName="active"
              to="/rab-island#"
              scroll={(el) => scrollWithOffset(el)}
            >
              Island Rab
            </Link>

            <NavDropdown title="House">
              <Link
                smooth
                className="dropdown-item"
                activeClassName="active"
                to="/about-us#"
              >
                About us
              </Link>
              <Link
                smooth
                className="dropdown-item"
                activeClassName="active"
                to="/contact-us#"
              >
                Contact us
              </Link>
              <Link
                smooth
                className="dropdown-item"
                activeClassName="active"
                to="/house-rules#"
              >
                House rules
              </Link>
              <Link
                smooth
                className="dropdown-item"
                activeClassName="active"
                to="/terms-and-conditions#"
              >
                Terms and Conditions
              </Link>
            </NavDropdown>

            <NavDropdown title="Apartments">
              <Link
                smooth
                className="dropdown-item"
                activeClassName="active"
                to="/apartment/1#"
              >
                Apartment 1
              </Link>
              <Link
                smooth
                className="dropdown-item"
                activeClassName="active"
                to="/apartment/2#"
              >
                Apartment 2
              </Link>
              <Link
                smooth
                className="dropdown-item"
                activeClassName="active"
                to="/apartment/3#"
              >
                Apartment 3
              </Link>
            </NavDropdown>

            <Link
              className="nav-link"
              smooth
              activeClassName="active"
              to="/contact-us#"
              scroll={(el) => scrollWithOffset(el)}
            >
              Contact us
            </Link>

            <NavDropdown title="English">
              <Link
                smooth
                className="dropdown-item"
                activeClassName="active"
                to="/apartment-1#"
              >
                English
              </Link>
              <Link
                smooth
                className="dropdown-item"
                activeClassName="active"
                to="/apartment-2#"
              >
                Croatian
              </Link>
              <Link
                smooth
                className="dropdown-item"
                activeClassName="active"
                to="/apartment-3#"
              >
                Italian
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
