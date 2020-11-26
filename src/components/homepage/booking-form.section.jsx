import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./booking-form.scss";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function BookingFormSection() {
  const [form, setForm] = useState({ email: "", arrival: "", departure: "" });

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form })
    })
      .then((res) => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) => {
    setForm((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const { email, arrival, departure } = form;

  return (
    <div id="banner" style={{ height: "500px" }}>
      <Container>
        <Row className="banner-search px-md-5 py-md-4">
          <Form onSubmit={handleSubmit} className="col">
            <Row>
              <Form.Group
                as={Col}
                sm={12}
                md={4}
                className="m-0 px-4 px-md-2 py-2 py-md-0"
              >
                <Form.Label className="ml-2">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                sm={12}
                md={3}
                className="m-0 px-4 px-md-2 py-2 py-md-0"
              >
                <Form.Label className="ml-2">Arrival</Form.Label>
                <Form.Control
                  type="date"
                  name="arrival"
                  value={arrival}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                sm={12}
                md={3}
                className="m-0 px-4 px-md-2 py-2 py-md-0"
              >
                <Form.Label className="ml-2">Departure</Form.Label>
                <Form.Control
                  type="date"
                  name="departure"
                  value={departure}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                sm={12}
                md={2}
                className="m-0 px-4 px-md-2 py-3 py-md-0 text-center"
              >
                <Button type="submit">
                  <i className="fa fa-send"></i> string:make-reservation
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </Row>
      </Container>
    </div>
  );
}
