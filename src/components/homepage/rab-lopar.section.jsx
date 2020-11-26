import React from "react";
import { Button } from "react-bootstrap";
import rabBg from "./../../img/rab.jpg";
import loparBg from "./../../img/lopar.jpg";
import "./rab-lopar.scss";

export default function RabLoparSection(props) {
  const { rabSection, loparSection } = props;

  return (
    <>
      {rabSection && (
        <section className="rab py-3 py-md-5">
          <div className="container">
            <div className="col-md-8">
              <h2>Rab</h2>
              Island of Rab is one of the greenest islands in the Adriatic and
              probably one of the most magical. It is covered with pine forests
              and has beautiful sandy beaches. It is well known for its mild
              climate which differs from the mainland. The reason for this is
              that three ridges are present which protect the island from cold
              winds from the Velebit mountains. The main resort, Rab Town, is
              full of medieval buildings, built during the Venetian rule, which
              occurred since the 13th century. The old town walls are still
              visible in some places. Other than the small town of Rab, there
              are 7 idyllic places on the island situated on different parts of
              the island: Barbat, Banjol, Palit, Kampor, Mundanije, Supetarska
              Draga and 
              <strong>Lopar</strong>.
              <br />
              <br />
              <Button>rab_cta_read_more</Button>
            </div>
          </div>
          <div className="hero" style={{ background: `url(${rabBg})` }}></div>
        </section>
      )}
      {loparSection && (
        <section className="lopar py-3 py-md-5">
          <div className="hero" style={{ background: `url(${loparBg})` }}></div>
          <div className="container">
            <div className="col-md-8 offset-md-4">
              <h2>Lopar</h2>
              Only 12 kilometers from the town of Rab lies Lopar, otherwise
              known as Sandy Paradise, due to numerous natural sandy beaches in
              Lopar ( which are quite rare in the Adriatic) and a lot of
              romantic, hidden away coves to spend your holidays at. 22 of them,
              with 3 being nudist beaches (
              <a
                href="http://www.rab-visit.com/hr/aktivnosti/plaze/ciganka-421/421"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ciganka
              </a>
              , 
              <a
                href="http://www.rab-visit.com/hr/aktivnosti/plaze/sahara-419/419"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sahara
              </a>
               and 
              <a
                href="http://www.rab-visit.com/hr/aktivnosti/plaze/stolac-422/422"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stolac
              </a>
              ). The largest and the most famous is "
              <a
                href="http://www.rab-visit.com/hr/aktivnosti/plaze/rajska-plaza/413"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rajska plaža-paradise beach
              </a>
              " which is 1,5 kilometers long with the most important tourist
              facilities. In 2003 it was awarded "The blue flag", international
              symbol of quality and preservation of environment, as well as
              safety of bathers. It takes ten minutes to get to Lopar by
              ferry-line 
              <a
                href="http://www.rapska-plovidba.hr/plovni_en.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stinica-Mišnjak
              </a>
              . You can also use ferry line 
              <a
                href="http://www.jadrolinija.hr/jadro-valbiska/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Valbiska (island of Krk)-Lopar
              </a>
              , which has recently become more interesting to many guests
              because of nearness to Rijeka and its airport. This especially
              attractive drive lasts approximately 90 minutes. Coming by car
              from direction of Rab first thing we see is a sign which reminds
              us of St.Marin, stone-cutter and founder of republic of San
              Marino, who was born in Lopar in the 4th century. In his honor,
              hotel settlement and motor camp bear name "San Marino".
              <br />
              <br />
              <Button>lopar_cta_read_more</Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
