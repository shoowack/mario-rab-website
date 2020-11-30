import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function MainNavigation(props) {
  const { scrollWithOffset, settings } = props;

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

            {Object.keys(settings.apartments).length && (
              <NavDropdown title="Apartments">
                {Object.entries(settings.apartments).map((apartment) => {
                  return (
                    <Link
                      smooth
                      className="dropdown-item"
                      activeClassName="active"
                      to={`/apartment/${apartment[0]}#`}
                    >
                      {apartment[1].title}
                    </Link>
                  );
                })}
              </NavDropdown>
            )}

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
