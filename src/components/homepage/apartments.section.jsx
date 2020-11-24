import React from "react";
import { Button } from "react-bootstrap";
import "./apartments.scss";

export default function ApartmentsSection() {
  return (
    <>
      <section id="browse">
        <div className="container">
          <h2 className="textalign-center">string:apartments</h2>
          <br />
          <br />
          string:apartments-info
          <div className="browse-inner">
            <div className="browse-destinations">
              <div className="row">
                <div className="col-sm-4">
                  <div className="top-destination">
                    <img
                      className="destination-thumb"
                      src=".//images/apartman1.jpg"
                      alt=""
                    />
                    <div className="top-destination-inner">
                      <h3>Apartman 1</h3>
                    </div>
                    <a href="apartman1.php"></a>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="top-destination">
                    <img
                      className="destination-thumb"
                      src=".//images/apartman2.jpg"
                      alt=""
                    />
                    <div className="top-destination-inner">
                      <h3>Apartman 2</h3>
                    </div>
                    <a href="apartman2.php"></a>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="top-destination">
                    <img
                      className="destination-thumb"
                      src=".//images/apartman3.jpg"
                      alt=""
                    />
                    <div className="top-destination-inner">
                      <h3>Apartman 3</h3>
                    </div>
                    <a href="apartman3.php"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="apartment1" id="apartments">
        <div className="container">
          <div className="col-md-6">
            <h2>string:apartment 1</h2>
            <p>string:apartment1-description</p>
            <Button variant="primary">string:cta-more</Button>
          </div>
          <div className="col-md-6">
            <a href="#" className="col-md-4">
              <img src="/images/apartman1/01-thumb.jpg" className="gal" />
            </a>
            <a href="#" className="col-md-4">
              <img src="/images/apartman1/02-thumb.jpg" className="gal" />
            </a>
            <a href="#" className="col-md-4">
              <img src="/images/apartman1/03-thumb.jpg" className="gal" />
            </a>
            <a href="#" className="col-md-4">
              <img src="/images/apartman1/04-thumb.jpg" className="gal" />
            </a>
            <a href="#" className="col-md-4">
              <img src="/images/apartman1/05-thumb.jpg" className="gal" />
            </a>
            <a href="#" className="col-md-4">
              <img src="/images/apartman1/06-thumb.jpg" className="gal" />
            </a>
          </div>
        </div>
        <div className="apartment1-bg hero"></div>
      </section>
      <section className="apartment2">
        <div className="apartment2-bg hero"></div>
        <div className="container">
          <div className="col-md-6">
            <div className="col-md-4">
              <img src="/images/apartman2/01-thumb.jpg" className="gal" />
            </div>
            <div className="col-md-4">
              <img src="/images/apartman2/02-thumb.jpg" className="gal" />
            </div>
            <div className="col-md-4">
              <img src="/images/apartman2/03-thumb.jpg" className="gal" />
            </div>
            <div className="col-md-4">
              <img src="/images/apartman2/04-thumb.jpg" className="gal" />
            </div>
            <div className="col-md-4">
              <img src="/images/apartman2/05-thumb.jpg" className="gal" />
            </div>
            <div className="col-md-4">
              <img src="/images/apartman2/06-thumb.jpg" className="gal" />
            </div>
          </div>
          <div className="col-md-6">
            <h2>string:apartment 2</h2>
            <p>string:apartment2-description</p>
            <Button variant="primary">string:cta-more</Button>
          </div>
        </div>
      </section>
      <section className="apartment3">
        <div className="container">
          <div className="col-md-6">
            <h2>string:apartment 3</h2>
            <p>string:apartment3-description</p>
            <Button variant="primary">string:cta-more</Button>
          </div>
          <div className="col-md-6">
            <div className="col-md-4">
              <img src="/images/apartman3/01-thumb.jpg" className="gal" />
            </div>
            <div className="col-md-4">
              <img src="/images/apartman3/02-thumb.jpg" className="gal" />
            </div>
            <div className="col-md-4">
              <img src="/images/apartman3/03-thumb.jpg" className="gal" />
            </div>
            <div className="col-md-4">
              <img src="/images/apartman3/04-thumb.jpg" className="gal" />
            </div>
            <div className="col-md-4">
              <img src="/images/apartman3/05-thumb.jpg" className="gal" />
            </div>
            <div className="col-md-4">
              <img src="/images/apartman3/06-thumb.jpg" className="gal" />
            </div>
          </div>
        </div>
        <div className="apartment3-bg hero"></div>
      </section>
    </>
  );
}
