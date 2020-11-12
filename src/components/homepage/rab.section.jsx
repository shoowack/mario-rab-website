import React from "react";
import "./lopar-rab.scss";

export default function RabSection() {
  return (
    <section className="rab">
      <div className="container">
        <div className="col-md-8">
          rab_text
          <p className="cta-button">
            <a href="rab_cta_read_more_link" className="button">
              rab_cta_read_more
            </a>
          </p>
        </div>
      </div>
      <div className="onama-bg hero"></div>
    </section>
  );
}
