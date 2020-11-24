import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import "./sub-navigation.scss";

export default function SubNavigation() {
  return (
    <nav className="page-header-nav">
      <Link smooth activeClassName="active" to="/about-us">
        About us
      </Link>
      <Link smooth activeClassName="active" to="/contact-us">
        Contact us
      </Link>
      <Link smooth activeClassName="active" to="/house-rules">
        House rules
      </Link>
      <Link smooth activeClassName="active" to="/terms-and-conditions">
        Terms and Conditions
      </Link>
    </nav>
  );
}
