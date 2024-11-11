// components/Hero.js
import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import heroImg from "../assets/iamge.png";
function Hero() {
  return (
    <div className="hero-section">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1 className="hero-title">
              <span className="bg-white">One</span>
              <span className="bg-white">Stop</span> <br />
              <span className="bg-white">Marketplace</span> <br />
              <span className="bg-white">For</span>
              <span className="bg-green">Influencers</span>
            </h1>
            <p className="hero-subtitle body1">
              "Unleash Your Influence: Sell <br /> Itineraries, Build Your
              Brand,
              <br />
              Create Merch, and Share <br />
              Content – All in One Hub."
            </p>
            <div className="hero-buttons">
              <Button variant="success" className="cta me-2">
                Demo Store
              </Button>
              <Button variant="outline-light" className="cta">
                Join Waitlist
              </Button>
            </div>
          </Col>
          <Col>
            <img src={heroImg} alt="hero" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
