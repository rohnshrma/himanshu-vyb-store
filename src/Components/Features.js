import React from "react";
import influencersImg from "../assets/a.png";
import dataImg from "../assets/b.png";
import authPayImg from "../assets/c.png";
import moneyImg from "../assets/d.png";
import { Container, Row, Col } from "react-bootstrap";

const Features = () => {
  return (
    <Container className="features">
      <Row className="main-row">
        <Col xs={12} md={4}>
          <h3 className="text-center">
            From Creation to <br /> Monetization Vyb Store <br /> Has it All
          </h3>
        </Col>
        <Col xs={12} md={8}>
          <Row className="feature-row">
            <Col xs={6} className="feature-bx">
              <div>
                <h4>Trusted By Influencers</h4>
                <p>A trusted platform for influencers to grow and earn.</p>
                <div className="img-bx">
                  <img src={influencersImg} alt="influencer-img" />
                </div>
              </div>
            </Col>
            <Col xs={6} className="feature-bx">
              <div>
                <h4>Secured Data</h4>
                <p>Advanced securely measures to protect your valuable data</p>
                <div className="img-bx">
                  <img src={dataImg} alt="data-img" />
                </div>
              </div>
            </Col>

            <Col xs={6} className="feature-bx">
              <div>
                <h4>Authentic Payment Partner</h4>
                <p>Reliable, fact and secure payments you can trust</p>
                <div className="img-bx">
                  <img src={authPayImg} alt="data-img" />
                </div>
              </div>
            </Col>
            <Col xs={6} className="feature-bx">
              <div>
                <h4>Monetize Your Influence</h4>
                <p>Seeemlessly hurn your influence info consistent revenue.</p>
                <div className="img-bx">
                  <img src={moneyImg} alt="data-img" />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
