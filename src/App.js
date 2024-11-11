// App.js
import React from "react";
import CustomNavbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TravelSection from "./Components/TravelSection";
import Features from "./Components/Features";
import Influencers from "./Components/Influencers";
import Faq from "./Components/Faq";

function App() {
  return (
    <div>
      <CustomNavbar />
      <Hero />
      <TravelSection />
      <Features />
      <Influencers />
      <Faq />
      {/* <TravelSection />
      <SignupForm /> */}
    </div>
  );
}

export default App;
