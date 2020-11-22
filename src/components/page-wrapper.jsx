import React from "react";
import "./page-wrapper.scss";

export default function PageWrapper({ children, headerImage }) {
  return (
    <div id="core" className="page-property-details">
      <div
        className="page-header"
        style={{ background: `url(${headerImage})` }}
      >
        <div className="container">
          <div className="page-header-inner"></div>
        </div>
      </div>
      <div className="main-wrapper-container">
        <div className="container">
          <div id="main-wrapper">{children}</div>
        </div>
      </div>
    </div>
  );
}
