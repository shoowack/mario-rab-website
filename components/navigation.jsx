import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navigation({ scrollWithOffset }) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = (el) => {
    if (el === undefined) {
      setIsNavCollapsed(true);
    } else if (el.target.className === "navbar-toggler-icon") {
      setIsNavCollapsed(!isNavCollapsed);
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top bg-light navbar-light`} // bg-transparent navbar-dark
    >
      <div className="container">
        <Link
          className="navbar-brand"
          smooth
          to="/#top"
          onClick={() => handleNavCollapse()}
          scroll={(el) => scrollWithOffset(el)}
        ></Link>

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
                to="/#download"
                onClick={() => handleNavCollapse()}
                scroll={(el) => scrollWithOffset(el)}
              >
                Download
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
