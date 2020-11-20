import React from "react";
// import { HashLink as Link } from "react-router-hash-link";
import GoogleMapReact from "google-map-react";
import "./footer.scss";

export default function Footer(props) {
  const currentDate = new Date();
  const loc = {
    center: {
      lat: 44.828537,
      lng: 14.748109
    },
    marker: {
      lat: 44.828537,
      lng: 14.748109
    },
    zoom: 11
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  let mapOptions = {
    scrollwheel: false,
    mapTypeControlOptions: {
      position: "BOTTOM_RIGHT"
    },
    draggable: false,
    rotateControl: false,
    scaleControl: false,
    streetViewControl: false,
    panControl: false,
    zoomControlOptions: false
  };

  return (
    <footer style={{ flexShrink: 0 }}>
      {props.location.pathname === "/contact-us" && (
        <div style={{ height: "400px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
            defaultCenter={loc.center}
            defaultZoom={loc.zoom}
            options={mapOptions}
          >
            <AnyReactComponent
              lat={loc.marker.lat}
              lng={loc.marker.lng}
              text="My Marker"
            ></AnyReactComponent>
          </GoogleMapReact>
        </div>
      )}
      <section className="footer-info">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="widget about-widget">
                <div className="widget-content">
                  <p>
                    <img
                      src="../img/logo.svg"
                      style={{ height: "30px", margin: "20px 0 30px 0" }}
                      alt=""
                    />
                  </p>
                  {/* <p><img src="./dummies/logo_footer.png" alt="Casa" /></p> */}
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br />
                    Enjoy your holiday the best you can!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="widget links-widget">
                <h3 className="widget-title">
                  <span>Quick Links</span>
                </h3>
                <div className="widget-content">
                  <div className="row">
                    <div className="col-md-6">
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
                    <div className="col-md-6">
                      <ul className="custom-list">
                        <li>Register</li>
                        <li>Login</li>
                        <li>Add Offer</li>
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
