import React from "react";
import Breadcrumbs from "react-router-dynamic-breadcrumbs";
import "./breadcrumbs.scss";

export default function BreadcrumbsComponent(props) {
  const routesList = {
    "/": "Home",
    "/about-us": "About us",
    "/contact-us": "Contact us",
    "/house-rules": "House rules",
    "/terms": "Terms and Conditions"
  };

  return (
    <Breadcrumbs
      mappedRoutes={routesList}
      WrapperComponent={(props) => (
        <ol className="breadcrumb">{props.children}</ol>
      )}
      ActiveLinkComponent={(props) => (
        <li className="breadcrumb-item active">{props.children}</li>
      )}
      LinkComponent={(props) => (
        <li className="breadcrumb-item">{props.children}</li>
      )}
    />
  );
}
