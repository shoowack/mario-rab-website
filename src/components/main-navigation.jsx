import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function MainNavigation({ scrollWithOffset }) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  // const [dropdownCollapse, setDropdownCollapse] = useState({
  //   1: false,
  //   2: false,
  //   3: false
  // });

  // const toggleCollapse = (e, dropdown) => {
  //   e.preventDefault();
  //   setDropdownCollapse({
  //     ...dropdownCollapse,
  //     [dropdown]: !dropdownCollapse[dropdown]
  //   });
  // };

  const handleNavCollapse = (el) => {
    if (el === undefined) {
      setIsNavCollapsed(true);
    } else if (el.target.className === "navbar-toggler-icon") {
      setIsNavCollapsed(!isNavCollapsed);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top bg-dark navbar-dark" // bg-transparent navbar-dark
    >
      <div className="container">
        <Link
          className="navbar-brand"
          smooth
          to="/#"
          onClick={() => handleNavCollapse()}
          scroll={(el) => scrollWithOffset(el)}
        >
          Mario Rab
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={(el) => handleNavCollapse(el)}
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                smooth
                to="/#"
                onClick={() => handleNavCollapse()}
                scroll={(el) => scrollWithOffset(el)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                smooth
                to="/rab-island#"
                onClick={() => handleNavCollapse()}
                scroll={(el) => scrollWithOffset(el)}
              >
                Island Rab
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                House
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Apartments
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
              </div>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                smooth
                to="/contact-us#"
                onClick={() => handleNavCollapse()}
                scroll={(el) => scrollWithOffset(el)}
              >
                Contact us
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                English
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
