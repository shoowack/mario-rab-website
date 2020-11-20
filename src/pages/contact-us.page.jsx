import React from "react";
import PageWrapperInnerNav from "../components/page-wrapper-inner-nav";
import "./contact-us.scss";

export default function ContactUsPage(props) {
  return (
    <PageWrapperInnerNav>
      <section className="content-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h2>string:contact-us-house-name</h2>
              <h5>string:contact-us-postal-address</h5>

              <p>
                Lopar 601
                <br />
                51281 LOPAR,
                <br />
                Croatia
              </p>

              <h5>string:contact-us-phone</h5>
              <p>
                <a href="tel:+385989462098">+385 (98) 9462 098</a>
              </p>
            </div>
            <div className="col-sm-7">
              <form
                id="contact-form"
                action="contact-form.php"
                method="post"
                className="default-form"
              >
                <div className="contact-form-container">
                  <h5>string:contact-us-send-us-a-message</h5>

                  <p
                    className="alert-message warning validation"
                    style={{ display: "none" }}
                  >
                    <i className="ico fa fa-exclamation-circle"></i>
                    <strong>All fields are required!</strong>
                  </p>
                  <p
                    className="alert-message warning request"
                    style={{ display: "none" }}
                  >
                    <i className="ico fa fa-exclamation-circle"></i>
                    <strong>Form not sent!</strong>
                    <br />
                    There was a connection problem. Try again later.
                  </p>

                  <div className="row">
                    <div className="col-sm-6">
                      <p>
                        <input
                          type="text"
                          id="field_name"
                          name="field_name"
                          className="required"
                          placeholder="string:name"
                        />
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <p>
                        <input
                          type="text"
                          id="field_email"
                          name="field_email"
                          className="required email"
                          placeholder="string:mail"
                        />
                      </p>
                    </div>
                  </div>
                  <p>
                    <textarea
                      id="field_message"
                      name="field_message"
                      className="required"
                      placeholder="string:textarea"
                    ></textarea>
                  </p>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="form-note">All fields are required</p>
                    </div>
                    <div className="col-sm-12">
                      <p className="form-submit">
                        <button
                          className="button submit-btn"
                          data-loading-label="Sending..."
                        >
                          <i className="fa fa-envelope"></i> string:send-message
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageWrapperInnerNav>
  );
}
