import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "./booking-form.scss";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function BookingFormSection() {
  const [modalShow, setModalShow] = useState(false);
  const [form, setForm] = useState({
    email: "",
    arrival: "",
    departure: ""
  });

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "booking-info", ...form })
    })
      .then(() => setModalShow(true))
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
        <Form
          onSubmit={handleSubmit}
          className="px-2 py-3 px-md-5 py-md-4 banner-search"
        >
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
                placeholder="Enter your email"
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
                as={DatePicker}
                placeholderText="Choose arrival date"
                selected={arrival && new Date(arrival)}
                required
                showPopperArrow={false}
                minDate={new Date()}
                onChange={(date) => {
                  handleChange({
                    target: {
                      name: "arrival",
                      value: date.toDateString()
                    }
                  });
                }}
                selectsStart
                startDate={arrival && new Date(arrival)}
                endDate={departure && new Date(departure)}
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
                as={DatePicker}
                placeholderText="Choose departure date"
                selected={departure && new Date(departure)}
                required
                showPopperArrow={false}
                onChange={(date) => {
                  handleChange({
                    target: { name: "departure", value: date.toDateString() }
                  });
                }}
                selectsEnd
                startDate={arrival && new Date(arrival)}
                endDate={departure && new Date(departure)}
                minDate={arrival && new Date(arrival)}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              sm={12}
              md={2}
              className="m-0 px-4 px-md-2 py-3 py-md-0 text-center align-self-end"
            >
              <Button type="submit">
                <i className="fa fa-send"></i> string:inquiry
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </Container>
      <Modal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          setForm({
            email: "",
            arrival: "",
            departure: ""
          });
        }}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Inquiry received
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            We have successfully received your booking inquiry for these dates:
            <br />
            <br />
            <strong>Arrival:</strong> {arrival && arrival}
            <br />
            <strong>Departure:</strong> {departure && departure}
            <br />
            <br />
            We will get back to you at <strong>{email && email}</strong> as soon
            as possible.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setModalShow(false);
              setForm({
                email: "",
                arrival: "",
                departure: ""
              });
            }}
          >
            string:close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
