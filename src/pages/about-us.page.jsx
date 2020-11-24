import React from "react";
import { Button } from "react-bootstrap";
import PageWrapperInnerNav from "../components/page-wrapper-inner-nav";

export default function AboutUsPage(props) {
  return (
    <PageWrapperInnerNav>
      <div>
        <section className="content-section py-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h2>Lorem ipsum</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Totam sed, praesentium eveniet natus alias, temporibus,
                  voluptate laudantium obcaecati veritatis quibusdam rerum
                  placeat optio exercitationem ad ipsam esse! Asperiores,
                  commodi obcaecati.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.
                  Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus
                  pharetra nulla ac diam.
                </p>
                <Button>
                  <i className="fa fa-heart"></i> Get Started!
                </Button>
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
                  Dolores laborum incidunt suscipit itaque provident, hic
                  nostrum pariatur ut reprehenderit alias? Perferendis
                  doloremque nulla debitis cupiditate temporibus corporis
                  sapiente dignissimos cum?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.
                  Cras vel lorem. Etiam pellentesque aliquet tellus.
                </p>
                <Button>
                  <i className="fa fa-heart"></i> Get Started!
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapperInnerNav>
  );
}
