import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import { Container, Row, Col } from "react-bootstrap";
import Map from "./../components/map";
import "./footer.scss";

export default function Footer(props) {
  const {
    location: { pathname },
    scrollWithOffset
  } = props;
  const currentDate = new Date();

  return (
    <footer style={{ flexShrink: 0 }}>
      {pathname === "/contact-us" && (
        <div style={{ height: "400px", width: "100%" }}>
          <Map />
        </div>
      )}
      <section className="footer-info">
        <Container>
          <Row>
            <Col
              sm={12}
              md={9}
              className="align-self-center text-center text-md-left"
            >
              <div className="widget about-widget">
                <div className="widget-content">
                  <h3>Mario Rab</h3>
                  <p className="m-0">Enjoy your holiday the best you can!</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={3} className="text-center text-md-right">
              <div className="widget links-widget">
                <h3 className="widget-title">
                  <span>Quick Links</span>
                </h3>
                <div className="widget-content">
                  <Row>
                    <Col>
                      <ul className="custom-list m-0">
                        <li>
                          <Link
                            smooth
                            to="/#"
                            scroll={(el) => scrollWithOffset(el)}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            smooth
                            to="/rab-island#"
                            scroll={(el) => scrollWithOffset(el)}
                          >
                            Island Rab
                          </Link>
                        </li>
                        <li>
                          <Link
                            smooth
                            to="/#apartments"
                            scroll={(el) => scrollWithOffset(el)}
                          >
                            Apartments
                          </Link>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="copyright">
        <Container>
          <Row>
            <Col>
              <p className="m-0 text-center text-md-left">
                Copyright {currentDate.getFullYear()} &copy; Mario - Rab. All
                rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </footer>
  );
}
