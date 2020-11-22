import { map } from "jquery";
import React from "react";
import "./apartment.scss";
import bedroomIcon from "./../img/bedroom.svg";

export default function ApartmentPage({ settings }) {
  const { address, additionalInformation, apartment1 } = settings;

  return (
    <div id="core" className="page-property-details">
      <div className="page-header">
        <div className="container">
          <div className="page-header-inner clearfix"></div>
        </div>
      </div>
      <div className="main-wrapper-container">
        <div className="container">
          <div id="main-wrapper">
            <div className="main-wrapper">
              <div className="sidebar">
                <aside className="property-location-details">
                  <h3 className="property-location-title d-none d-sm-none d-md-none d-lg-block d-xl-block">
                    {apartment1.title}
                  </h3>
                  <div className="property-map">
                    {/* <iframe src="https://maps.google.com/maps?q=44.828537,14.748109&amp;num=1&amp;ie=UTF8&amp;ll=44.828537,14.748109&amp;spn=0.007843,0.013937&amp;t=m&amp;z=12&amp;output=embed"></iframe> */}
                    <i className="fa fa-search-plus"></i>
                  </div>
                  <div className="property-info">
                    {/* DODAT IF, da ne pokazuje nista ako je prazno */}
                    <h4 className="property-info-title">Details</h4>
                    {address && (
                      <div className="toggle-container property-accomodation">
                        <h5 className="toggle-title">Address</h5>
                        <div className="toggle-content">
                          {address.street}
                          <br />
                          {address.post}
                          <br />
                          {address.country}
                        </div>
                      </div>
                    )}
                    {additionalInformation && (
                      <div className="toggle-container property-accomodation">
                        <h5 className="toggle-title">Addition Information</h5>
                        <div className="toggle-content">
                          <ul className="custom-list">
                            {Object.entries(additionalInformation).map(
                              (entry) => {
                                let [key, value] = entry;

                                if (key === "seaDistance") {
                                  return (
                                    <li>
                                      Distance from sea <strong>{value}</strong>
                                    </li>
                                  );
                                }

                                if (key === "nearestShop") {
                                  return (
                                    <li>
                                      Nearest shop <strong>{value}</strong>
                                    </li>
                                  );
                                }

                                if (key === "restaurantDistance") {
                                  return (
                                    <li>
                                      Distance from restaurant{" "}
                                      <strong>{value}</strong>
                                    </li>
                                  );
                                }

                                if (key === "postOfficeDistance") {
                                  return (
                                    <li>
                                      Post office <strong>{value}</strong>
                                    </li>
                                  );
                                }
                                return "";
                              }
                            )}
                          </ul>
                        </div>
                      </div>
                    )}
                    {apartment1.details.additionalServices && (
                      <ul className="custom-list check-list">
                        {apartment1.details.additionalServices.map((item) => (
                          <li>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </aside>
              </div>
              <div className="content">
                <div className="property-details">
                  <h3 className="property-location-title d-block d-sm-block d-md-block d-lg-none d-xl-none">
                    title
                  </h3>
                  <div className="property-images">
                    <div className="owl-carousel owl-theme">
                      <a href="#" className="image">
                        images
                        {/* <img src="" alt="" /> */}
                      </a>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 col-lg-8">
                      <div className="property-description">
                        <div className="description-text">
                          <h4>{apartment1.description}</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div className="property-panel">
                        <div className="panel-item object-price">
                          {/* DODAT IF, da ne pokazuje nista ako je prazno */}
                          <h4 className="panel-item-title">prices_title</h4>

                          <p className="price">
                            <span>Months</span>
                            <strong>Price</strong> prices_suffix
                          </p>
                        </div>
                        <div className="panel-item object-rating">
                          <h4 className="panel-item-title">Object Rating</h4>
                          <p className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                          </p>
                        </div>
                        <div className="panel-item book-form">
                          <h4 className="panel-item-title">string:book-now</h4>
                          <form
                            className="default-form"
                            action="property-details-book.html"
                          />
                          <p
                            className="alert-message warning validation"
                            style={{ display: "none" }}
                          >
                            <i className="ico fa fa-exclamation-circle"></i>{" "}
                            Please fill all fields!
                          </p>
                          <p className="form-row">
                            <span
                              className="calendar-input input-left"
                              title="Arrival"
                            >
                              <input
                                type="text"
                                name="arrival"
                                className="required"
                                placeholder="string:arrival"
                                data-dateformat="m/d/y"
                              />
                              <i className="fa fa-calendar"></i>
                            </span>
                          </p>
                          <p className="form-row">
                            <span
                              className="calendar-input input-left"
                              title="Departure"
                            >
                              <input
                                type="text"
                                name="departure"
                                className="required"
                                placeholder="string:departure"
                                data-dateformat="m/d/y"
                              />
                              <i className="fa fa-calendar"></i>
                            </span>
                          </p>
                          <p className="form-row">
                            <span
                              className="select-box input-left"
                              title="Adults"
                            >
                              <select
                                name="adults"
                                className="required"
                                data-placeholder="string:adults"
                              >
                                <option />
                                Adults
                                <option value="1" />1
                                <option value="2" />2
                                <option value="3" />3
                                <option value="4" />4
                                <option value="5" />5
                                <option value="6" />6
                                <option value="7" />7
                                <option value="8" />8
                                <option value="9" />9
                              </select>
                            </span>
                          </p>
                          <p className="form-row">
                            <span
                              className="select-box input-right"
                              title="Children"
                            >
                              <select
                                name="children"
                                className="required"
                                data-placeholder="string:children"
                              >
                                <option />
                                Children
                                <option value="1" />1
                                <option value="2" />2
                                <option value="3" />3
                                <option value="4" />4
                                <option value="5" />5
                                <option value="6" />6
                                <option value="7" />7
                                <option value="8" />8
                              </select>
                            </span>
                          </p>
                          <p className="form-row">
                            <span
                              className="select-box input-right"
                              title="Room"
                            >
                              <select name="room" className="required">
                                <option value="standard" />
                                Standard Room ($37)
                                <option value="appartment" />
                                Appartment ($69)
                              </select>
                            </span>
                          </p>
                          <p className="form-row">
                            <button className="button submit-btn">
                              <i className="fa fa-check"></i>{" "}
                              string:make-reservation
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accomodation">
                {Object.entries(apartment1.accomodation).map((entry) => {
                  let [key, value] = entry;
                  let img;

                  if (key === "floor") {
                    key = "Floor Number";
                  }

                  if (key === "bedrooms") {
                    key = "Number of Bedrooms";
                    img = bedroomIcon;
                  }

                  if (key === "bathrooms") {
                    key = "Number of Bathrooms";
                  }

                  if (key === "bbq") {
                    key = "You can use";
                    value = "BBQ";
                  }

                  if (key === "wifi") {
                    key = "Available";
                    value = "WiFi";
                  }

                  if (key === "parkings") {
                    key = "Parking spots";
                  }

                  if (key === "aircon") {
                    key = "Aircon";
                    value = "Available";
                  }

                  if (key === "washingMachine" && value === true) {
                    key = "Washing machine";
                    value = "Available";
                  }

                  return (
                    <div className="accomodation_item">
                      <figure>
                        <img src={img} alt="" />
                        <figcaption>{key}</figcaption>
                      </figure>
                      <h3>{value}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
