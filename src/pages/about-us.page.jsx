import React from "react";
import BreadcrumbsComponent from "./../components/breadcrumbs";
import "./about-us.scss";
import headerImg from "./../img/headers/page_header_03.jpg";

export default function AboutUsPage(props) {
  return (
    <div>
      <div
        className="page-header has-nav"
        style={{ background: `url(${headerImg})` }}
      >
        <div className="container">
          <div className="page-header-inner">
            <h1>Page Title</h1>
            <BreadcrumbsComponent />
            <nav className="page-header-nav">
              <ul className="custom-list">
                <li className="menu-item active">
                  <a title="About us" href="/about-us/">
                    About us
                  </a>
                </li>
                <li className="menu-item">
                  <a title="Contact us" href="/contact-us/">
                    Contact us
                  </a>
                </li>
                <li className="menu-item">
                  <a title="House rules" href="/house-rules/">
                    House rules
                  </a>
                </li>
                <li className="menu-item">
                  <a title="Terms and Conditions" href="/terms-and-conditions/">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <section className="content-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h2>Lorem ipsum</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
                sed, praesentium eveniet natus alias, temporibus, voluptate
                laudantium obcaecati veritatis quibusdam rerum placeat optio
                exercitationem ad ipsam esse! Asperiores, commodi obcaecati.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin
                nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras
                vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra
                nulla ac diam.
              </p>
              <p className="cta-button">
                <a href="#" className="button">
                  <i className="fa fa-heart"></i> Get Started!
                </a>
              </p>
            </div>
            <div className="col-sm-6">
              <p>
                <img
                  src="<?php echo get_stylesheet_directory_uri(); ?>/_ostalo/dummies/content_img_01.jpg"
                  alt=""
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section text-right py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 offset-sm-7">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores laborum incidunt suscipit itaque provident, hic nostrum
                pariatur ut reprehenderit alias? Perferendis doloremque nulla
                debitis cupiditate temporibus corporis sapiente dignissimos cum?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin
                nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras
                vel lorem. Etiam pellentesque aliquet tellus.
              </p>
              <p className="cta-button">
                <a href="#" className="button">
                  <i className="fa fa-heart"></i> Get Started!
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
