import React from 'react';
import VideoSection from '../components/VideoSection';
import CardsSlider from '../components/CardsSlider';
import SkylineImage from '../components/SkylineImage';
import Nature from "../components/Nature";

const HomePage = () => {
  return (
    <div>
      <VideoSection />
      <div style={{ width: "100%", height: "3px", margin: "1rem 0", background: "linear-gradient(to right, #e82962, #1fc6c6)" }}> </div>
      <h2 style={{ marginTop: "2rem", textAlign: "center", fontSize: "3rem", fontWeight: "bold" }}>Nature</h2>
      <h3 style={{ marginTop: "2rem", textAlign: "center", fontSize: "1rem", fontWeight: "bold" }}>Embrace the tranquility of nature's beauty, where every path leads to serenity. </h3>
      <Nature/>
      <div style={{ width: "100%", height: "3px", margin: "1rem 0", background: "linear-gradient(to right, #e82962, #1fc6c6)" }}> </div>
      <h2 style={{ marginTop: "2rem", textAlign: "center", fontSize: "2rem", fontWeight: "bold" }}>Heritage</h2>
      <div style={{ width: "100%", height: "3px", margin: "1rem 0", background: "linear-gradient(to right, #e82962, #1fc6c6)" }}> </div>
      <h2 style={{ marginTop: "2rem", textAlign: "center", fontSize: "2rem", fontWeight: "bold" }}>Penang's Food and beverages</h2>
      <h3 style={{ marginTop: "2rem", textAlign: "center", fontSize: "1rem", fontWeight: "bold" }}>A melting pot of three cuisines </h3>
      <CardsSlider />
      <div style={{ width: "100%", height: "3px", margin: "1rem 0", background: "linear-gradient(to right, #e82962, #1fc6c6)" }}> </div>
      <SkylineImage />
    </div>
  );
};

export default HomePage;
