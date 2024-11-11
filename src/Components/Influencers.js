import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import inf1Img from "../assets/inf1.png";
import inf2Img from "../assets/inf2.png";
import inf3Img from "../assets/inf3.png";
const Influencers = () => {
  return (
    <Container className="influencers text-center">
      <h3 className="mb-4">Our Influencers</h3>
      <Row>
        <Col xs={3} className="influ-bx i1">
          <img src={inf1Img} alt="influencer 1" />
        </Col>
        <Col xs={3} className="influ-bx i2">
          <img src={inf2Img} alt="influencer 1" />
        </Col>
        <Col xs={3} className="influ-bx i3">
          <img src={inf3Img} alt="influencer 1" />
        </Col>
        <Col xs={3} className="influ-bx i4">
          <img src={inf1Img} alt="influencer 1" />
        </Col>
      </Row>
    </Container>
  );
};

export default Influencers;
