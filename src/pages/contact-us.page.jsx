import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import PageWrapperInnerNav from "../components/page-wrapper-inner-nav";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function ContactUsPage(props) {
  const [form, setForm] = useState({ email: "", name: "", message: "" });

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-us", ...form })
    })
      .then((res) => alert("Success!")) // TODO redirect to thank you page
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) => {
    setForm((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const { email, name, message } = form;
  const { address, phone } = props.settings;

  return (
    <PageWrapperInnerNav>
      <section className="content-section py-5">
        <Container>
          <Row>
            <Col sm={4}>
              <h2>string:contact-us-house-name</h2>

              {address && (
                <>
                  <h5>string:contact-us-postal-address</h5>
                  <p>
                    {address.street}
                    <br />
                    {address.post}
                    <br />
                    {address.country}
                  </p>
                </>
              )}

              {phone && (
                <>
                  <h5>string:contact-us-phone</h5>
                  <p>
                    <a href={`tel:${phone.replace(/[\s()]/g, "")}`}>{phone}</a>
                  </p>
                </>
              )}
            </Col>
            <Col sm={7} style={{ borderLeft: "1px solid #e6e6e6" }}>
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

                <Form
                  onSubmit={handleSubmit}
                  className="px-2 py-3 px-md-5 py-md-4 banner-search"
                >
                  <Row>
                    <Form.Group as={Col} sm={6}>
                      <Form.Label className="ml-2">Your name:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        required
                        name="name"
                        value={name}
                        onChange={(e) => handleChange(e)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} sm={6}>
                      <Form.Label className="ml-2">Your Email:</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => handleChange(e)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} sm={12}>
                      <Form.Label className="ml-2">Your message:</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        value={message}
                        onChange={(e) => handleChange(e)}
                      />
                    </Form.Group>
                  </Row>

                  <Row>
                    <Col>
                      <Button type="submit" className="ml-auto">
                        <i className="fa fa-send"></i> string:send
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </PageWrapperInnerNav>
  );
}
