import React from "react";
// import { HashLink as Link } from "react-router-hash-link";
import Map from "./../components/map";
import "./footer.scss";

export default function Footer(props) {
  const currentDate = new Date();

  return (
    <footer style={{ flexShrink: 0 }}>
      {props.location.pathname === "/contact-us" && (
        <div style={{ height: "400px", width: "100%" }}>
          <Map />
        </div>
      )}
      <section className="footer-info">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="widget about-widget">
                <div className="widget-content">
                  <h3>Mario Rab</h3>
                  <p>Enjoy your holiday the best you can!</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 text-right">
              <div className="widget links-widget">
                <h3 className="widget-title">
                  <span>Quick Links</span>
                </h3>
                <div className="widget-content">
                  <div className="row">
                    <div className="col">
                      <ul className="custom-list">
                        <li>
                          <a href="index.php">Home</a>
                        </li>
                        <li>
                          <a href="island.php">Island</a>
                        </li>
                        <li>
                          <a href="index.php#apartments">Apartments</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="m-0">
                Copyright {currentDate.getFullYear()} &copy; Mario - Rab. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
