import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navigation({ scrollWithOffset }) {
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
      </div>
    </nav>
  );
}
