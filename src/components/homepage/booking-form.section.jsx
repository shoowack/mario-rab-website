import React from "react";
import "./booking-form.scss";

export default function BookingFormSection() {
  return (
    <div id="banner" style={{ height: "500px" }}>
      <div className="banner-search">
        <div className="container">
          <div className="banner-search-inner">
            <div className="custom-list tab-content-list">
              <div className="tab-content active default-form">
                <form
                // action=""
                // method="post"
                // enctype="multipart/form-data"
                // name="form1"
                // id="form1"
                >
                  <span className="email-input">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your mail"
                      className="required email"
                    />
                  </span>

                  <span className="calendar-input input-left" title="Arrival">
                    <input
                      type="text"
                      name="arrival"
                      placeholder="Arrival"
                      data-dateformat="m/d/y"
                    />
                    <i className="fa fa-calendar"></i>
                  </span>

                  <span
                    className="calendar-input input-right"
                    title="Departure"
                  >
                    <input
                      type="text"
                      name="departure"
                      placeholder="Departure"
                      data-dateformat="m/d/y"
                    />
                    <i className="fa fa-calendar"></i>
                  </span>

                  <span className="select-box" title="Adults">
                    <select name="adults" data-placeholder="Adults">
                      <option />
                      Adults
                      <option value="1" />1
                      <option value="2" />2
                      <option value="3" />3
                      <option value="4" />4
                      <option value="5" />5
                    </select>
                  </span>

                  <span className="select-box" title="Children">
                    <select name="children" data-placeholder="Children">
                      <option />
                      Children
                      <option value="1" />1
                      <option value="2" />2
                      <option value="3" />3
                      <option value="4" />4
                      <option value="5" />5
                    </select>
                  </span>

                  <span className="submit-btn">
                    <button
                      type="submit"
                      name="submit"
                      id="posalji"
                      className="btn btn-primary"
                    >
                      <i className="fa fa-search"></i> Send
                    </button>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
