import React from "react";
import Slider from "react-slick";
import "./slick.scss";
import "./slick-theme.scss";
import "./testimonials.scss";

export default function TestimonialsSection() {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="testimonials-inner">
          <div className="testimonial-list">
            <Slider
              dots
              infinite
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              initialSlide={0}
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
              <button className="button prev">
                <i className="fa fa-chevron-left"></i>
              </button>
              <button className="button next">
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
