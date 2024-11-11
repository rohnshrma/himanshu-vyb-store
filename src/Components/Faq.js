import React from "react";

import { Container, Row, Col, Accordion } from "react-bootstrap";
const Faq = () => {
  return (
    <Container className="faq">
      <Row>
        <Col xs={12} md={6}>
          <h3>FREQUENTLY ASKED QUESTIONS</h3>
          <p>
            Quick to questions you may have. Can't find what <br /> you're
            looking for? <br />
            Check out our documentation
          </p>
        </Col>
        <Col xs={12} md={6}>
          <Accordion defaultActiveKey="0" className="faq-bx">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How much does it cost to set up a store?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What kind of digital products can I sell?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Do I need technical skills to use the platform?
              </Accordion.Header>
              <Accordion.Body>
                No, not at all! Our platform is designed with user-friendliness
                in mind. You can easily navigate and set up your store without
                any technical expertise. It's as simple as a few clicks to get
                started!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Is there a limit to the number of products I can list?
              </Accordion.Header>
              <Accordion.Body>
                No, not at all! Our platform is designed with user-friendliness
                in mind. You can easily navigate and set up your store without
                any technical expertise. It's as simple as a few clicks to get
                started!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                How do I receive payments for my sales?
              </Accordion.Header>
              <Accordion.Body>
                No, not at all! Our platform is designed with user-friendliness
                in mind. You can easily navigate and set up your store without
                any technical expertise. It's as simple as a few clicks to get
                started!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Can I sell internationally on this marketplace?
              </Accordion.Header>
              <Accordion.Body>
                No, not at all! Our platform is designed with user-friendliness
                in mind. You can easily navigate and set up your store without
                any technical expertise. It's as simple as a few clicks to get
                started!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                What support and resources are available for sellers?
              </Accordion.Header>
              <Accordion.Body>
                No, not at all! Our platform is designed with user-friendliness
                in mind. You can easily navigate and set up your store without
                any technical expertise. It's as simple as a few clicks to get
                started!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Is there a review process for uploaded products?
              </Accordion.Header>
              <Accordion.Body>
                No, not at all! Our platform is designed with user-friendliness
                in mind. You can easily navigate and set up your store without
                any technical expertise. It's as simple as a few clicks to get
                started!
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
