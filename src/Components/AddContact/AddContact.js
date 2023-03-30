import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

function AddContact() {
  return (
    <>
      <Container style={{ margin: "40px" }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3">
              <Form.Label>What's your name?</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Salah ben Gaid"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>What's your Last Name ?</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                placeholder="Salah ben Gaid"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="age"
                placeholder="Salah ben Gaid"
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddContact;
