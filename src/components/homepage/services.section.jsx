import React from "react";

export default function ServicesSection() {
  return (
    <section className="content-section services" id="island">
      <div className="container">
        <div className="row">
          {/* map through services here */}
          <div className="col-12 col-sm-6 col-md-4">
            <div className="wrapper">
              <p
                className="service-icon"
                style={{ background: "url() #01CD9E center no-repeat" }}
                // add url pic here
              ></p>
              <h3 className="service-title">service_title</h3>
              <p className="info">service_description</p>
              <p>
                <a href="<?php echo $buttonLink ?>" className="button">
                  Button
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
