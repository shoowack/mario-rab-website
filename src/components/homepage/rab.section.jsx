import React from "react";
import "./lopar-rab.scss";

export default function RabSection() {
  return (
    <section className="rab">
      <div className="container">
        <div className="col-md-8">
          <h2>Rab</h2>
          Island of Rab is one of the greenest islands in the Adriatic and
          probably one of the most magical. It is covered with pine forests and
          has beautiful sandy beaches. It is well known for its mild climate
          which differs from the mainland. The reason for this is that three
          ridges are present which protect the island from cold winds from the
          Velebit mountains. The main resort, Rab Town, is full of medieval
          buildings, built during the Venetian rule, which occurred since the
          13th century. The old town walls are still visible in some places.
          Other than the small town of Rab, there are 7 idyllic places on the
          island situated on different parts of the island: Barbat, Banjol,
          Palit, Kampor, Mundanije, Supetarska Draga and <strong>Lopar</strong>.
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
