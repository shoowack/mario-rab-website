import React from "react";
import "./apartment.scss";
import * as accomodationIcons from "./../img/accomodation-icons";
import PageWrapper from "./../components/page-wrapper";
import headerImg from "./../img/headers/page_header_03.jpg";
import headerImage from "./../img/headers/page_header_03.jpg";
import Map from "./../components/map";

export default function ApartmentPage(props) {
  const {
    settings: { address, additionalInformation, apartments },
    match: {
      params: { apartmentNumber }
    }
  } = props;

  if (apartments[apartmentNumber]) {
    return (
      <PageWrapper headerImage={headerImg}>
        {/* <div className="main-wrapper-container"> */}
        {/* <div className="container"> */}
        <div id="main-wrapper">
          <div className="main-wrapper">
            <div className="sidebar">
              <aside className="property-location-details">
                <h3 className="property-location-title d-none d-sm-none d-md-none d-lg-block d-xl-block">
                  {apartments[apartmentNumber].title}
                </h3>
                <div className="property-map">
                  <div
                    style={{
                      display: "block",
                      margin: "0",
                      width: "100%",
                      height: "250px",
                      border: "0"
                    }}
                  >
                    <Map />
                  </div>
                  <a
                    href="https://maps.google.com/maps?ll=44.828537,14.748109&z=12&t=m&hl=en-US&gl=US&mapclient=embed&q=44%C2%B049%2742.7%22N%2014%C2%B044%2753.2%22E@44.828537,14.748109"
                    target="_blank"
                    rel="noreferrer"
                    className="map-btn"
                  >
                    <i className="fa fa-search-plus"></i>
                  </a>
                </div>
                <div className="property-info">
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
                  {apartments[apartmentNumber].details.additionalServices && (
                    <ul className="custom-list check-list">
                      {Object.entries(
                        apartments[apartmentNumber].details.additionalServices
                      ).map((checkListItem, index) => {
                        let [key, value] = checkListItem;

                        if (key === "balcony") {
                          key = "Balcony/Loggia";
                        }
                        if (key === "fridge") {
                          key = "Fridge";
                        }
                        if (key === "grill") {
                          key = "Grill";
                        }
                        if (key === "oven") {
                          key = "Oven";
                        }
                        if (key === "garden") {
                          key = "Garden";
                        }
                        if (key === "seaView") {
                          key = "Sea View";
                        }
                        if (key === "parking") {
                          key = "Parking";
                        }
                        if (key === "internetConnection") {
                          key = "Internet Connection";
                        }
                        if (key === "radioSateliteTv") {
                          key = "Radio/Satelite TV";
                        }
                        if (key === "separateToilet") {
                          key = "Separate Toilet";
                        }
                        if (key === "childrenFriendly") {
                          key = "Children Friendly";
                        }

                        return (
                          <li
                            key={index}
                            className={value === false ? "unchecked" : ""}
                          >
                            {key}
                          </li>
                        );
                      })}
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
                        <h4>{apartments[apartmentNumber].description}</h4>
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
                          <span className="select-box input-right" title="Room">
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
              {Object.entries(apartments[apartmentNumber].accomodation).map(
                (accomodation, index) => {
                  let [key, value] = accomodation;
                  let img;

                  if (key === "floor") {
                    key = "Floor Number";
                    img = accomodationIcons.Steps;
                  }

                  if (key === "bedrooms") {
                    key = "Number of Bedrooms";
                    img = accomodationIcons.Bed;
                  }

                  if (key === "bathrooms") {
                    key = "Number of Bathrooms";
                    img = accomodationIcons.BathTub;
                  }

                  if (key === "bbq") {
                    key = "You can use";
                    value = "BBQ";
                    img = accomodationIcons.BBQ;
                  }

                  if (key === "wifi") {
                    key = "Available";
                    value = "WiFi";
                    img = accomodationIcons.WiFi;
                  }

                  if (key === "parkings") {
                    key = "Parking spots";
                    img = accomodationIcons.ParkingSpot;
                  }

                  if (key === "aircon") {
                    key = "Aircon";
                    value = "Available";
                    img = accomodationIcons.Aircon;
                  }

                  if (key === "washingMachine" && value === true) {
                    key = "Washing machine";
                    value = "Available";
                    img = accomodationIcons.Washer;
                  }

                  return (
                    <div className="accomodation_item" key={index}>
                      <figure>
                        <img src={img} alt="" />
                        <figcaption>{key}</figcaption>
                      </figure>
                      <h3>{value}</h3>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>
      </PageWrapper>
    );
  }
}
