import React from "react";
import { Container, Row } from "react-bootstrap";
import TravelCard from "./TravelCard";
import mountain from "../assets/mountain.png";
import data from "../data";

const TravelSection = () => {
  return (
    <div className="travel">
      <Container className="mid-nav mb-4">
        <p> Travel </p>
        <p>Digital </p>
        <p>Brand</p>
        <p>Merch</p>
      </Container>
      <Container>
        <div className="travel-header">
          <h2>TRAVEL</h2>
          <p>
            Turn your travel experience into itinerary. <br />
            travel package with VYB Store and share it
            <br />
            with your true followers.
          </p>
        </div>
        <div className="travel-body">
          <h3 className="mb-5">Explore Our Curated Travel Itineraries</h3>
          <Row>
            {data.map((cardObj) => {
              return (
                <TravelCard
                  placeImg={cardObj.placeImg}
                  placeName={cardObj.placeName}
                  influName={cardObj.influName}
                  postLocation={cardObj.postLocation}
                  influImg={cardObj.influImg}
                />
              );
            })}
          </Row>
        </div>
        <div className="travel-footer">
          <h4>How To List?</h4>
          <div className="info-bx">
            <h3> Your Curated Experience, We Make It Happen</h3>
          </div>
          <img alt="mountain" src={mountain} />
        </div>
      </Container>
    </div>
  );
};

export default TravelSection;
