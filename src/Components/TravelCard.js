import React from "react";
import { Row, Col } from "react-bootstrap";

const TravelCard = ({
  placeImg,
  placeName,
  influName,
  influImg,
  postLocation,
  classname,
}) => {
  return (
    <Col className={`travel-card ${classname}`}>
      <img src={placeImg} alt={placeName} />
      <div className="info-bx ">
        <h5>{placeName}</h5>
        <p>{postLocation}</p>
        <Row className="influ-info">
          <Col xs={8} md={8} lg={8}>
            {influName}
          </Col>
          <Col xs={4} md={4} lg={4} className="influ-img-bx">
            <img src={influImg} alt={influName} />
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default TravelCard;
