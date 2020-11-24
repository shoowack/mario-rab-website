import React, { useRef } from "react";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import "./../slick.scss";
import "./../slick-theme.scss";
import "./testimonials.scss";

export default function TestimonialsSection() {
  const slider = useRef(null);

  return (
    <div id="testimonials">
      <div className="container">
        <div className="testimonials-inner">
          <div className="testimonial-list">
            <Slider
              ref={slider}
              infinite
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              initialSlide={0}
              arrows={false}
            >
              <div className="testimonial">
                <p className="portrait">
                  <img src="./dummies/portrait_01_200.jpg" alt="Jenny" />
                </p>
                <blockquote className="quote">
                  <p>
                    I had the best time of my life!! It’s so amazing, everyone
                    should visit!
                  </p>
                  <footer>
                    <cite>Jenny - Toronto, Canada</cite>
                  </footer>
                </blockquote>
              </div>
              <div className="testimonial">
                <p className="portrait">
                  <img src="./dummies/portrait_02_200.jpg" alt="Jenny" />
                </p>
                <blockquote className="quote">
                  <p>
                    I had the best time of my life!! It’s so amazing, everyone
                    should visit!
                  </p>
                  <footer>
                    <cite>Jenny - Toronto, Canada</cite>
                  </footer>
                </blockquote>
              </div>
              <div className="testimonial">
                <p className="portrait">
                  <img src="./dummies/portrait_03_200.jpg" alt="Jenny" />
                </p>
                <blockquote className="quote">
                  <p>
                    I had the best time of my life!! It’s so amazing, everyone
                    should visit!
                  </p>
                  <footer>
                    <cite>Jenny - Toronto, Canada</cite>
                  </footer>
                </blockquote>
              </div>
            </Slider>

            <div className="navigation">
              <Button onClick={() => slider.current.slickPrev()}>
                <i className="fa fa-chevron-left"></i>
              </Button>
              <Button
                className="ml-2"
                onClick={() => slider.current.slickNext()}
              >
                <i className="fa fa-chevron-right"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
