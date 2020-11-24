import React from "react";
import BreadcrumbsComponent from "./../components/breadcrumbs";
import headerImg from "./../img/headers/page_header_03.jpg";
import SubNavigation from "./sub-navigation";

export default function PageWrapperInnerNav({ children }) {
  return (
    <div>
      <div
        className="page-header has-nav"
        style={{ background: `url(${headerImg})` }}
      >
        <div className="container">
          <div className="page-header-inner">
            <BreadcrumbsComponent />
            <SubNavigation />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
