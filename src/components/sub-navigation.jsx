import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./sub-navigation.scss";

export default function SubNavigation() {
  return (
    <nav className="page-header-nav">
      <ul className="custom-list">
        <li className="menu-item">
          <Link
            smooth
            // activeStyle={{ color: "red" }}
            // activeClassName="active"
            to="/about-us#"
          >
            About us
          </Link>
        </li>
        <li className="menu-item">
          <Link smooth to="/contact-us#">
            Contact us
          </Link>
        </li>
        <li className="menu-item">
          <Link smooth to="/house-rules#">
            House rules
          </Link>
        </li>
        <li className="menu-item">
          <Link smooth to="/terms-and-conditions#">
            Terms and Conditions
          </Link>
        </li>
      </ul>
    </nav>
  );
}
