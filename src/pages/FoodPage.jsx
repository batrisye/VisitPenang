import React from 'react'
// import Navbar from '../components/Navbar'
import FoodVideo from '../components/FoodVideo'
import CardsSlider from '../components/CardsSlider'
import SkylineImage from '../components/SkylineImage'
import IndianFoodSlider from '../components/IndianFoodSlider'
const FoodPage = () => {
  return (
    <div>
      <FoodVideo/>
      <div style={{ width: "100%", height: "5px", margin: "1rem 0", background: "linear-gradient(to right, #e82962, #1fc6c6)" }}> </div>
      <h2 style={{marginTop: "3rem", textAlign: "center",fontSize: "2rem",fontWeight: "bold"}}> Food and Beverages</h2>
      <p style={{textAlign: "center",fontSize: "1rem",fontWeight: "bold",color: "black"}}>Penang is considered a Melting pot of three different asian cuisines - Chinese , Indian and Malay.</p>
      
      <div style={{
        padding: "2rem",
        margin: "1rem auto",
        maxWidth: "800px",
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
      }}>
        <p style={{
          textAlign: "center",
          fontSize: "1rem",
          lineHeight: "1.6",
          color: "#555"
        }}>
          The food is a mix of all three and is a must try for all food lovers. The street food is a must try and is considered one of the best in the world. The food is a mix of all three and is a must try for all food lovers. The street food is a must try and is considered one of the best in the world. The food is a mix of all three and is a must try for all food lovers. The street food is a must try and is considered one of the best in the world.
        </p>
      </div>
      <CardsSlider/>
      <div style={{ width: "100%", height: "4px", margin: "1rem 0", background: "linear-gradient(to right, #e82962, #1fc6c6)" }}> </div>
      <h2 style={{marginTop: "2rem", textAlign: "center",fontSize: "2rem",fontWeight: "bold"}}> Breakfast and other light dishes</h2>
      <p style={{textAlign: "center",fontSize: "1rem",fontWeight: "bold",color: "black"}}>  Thosai , Satay and the iconic coconut rise dish - Nasi Lemak are some of the must try dishes in Penang. </p>
      <IndianFoodSlider/>
       container with text for best restaurants in Penang with good 
      <div style={{
        padding: "2rem",
        margin: "2rem auto",
        maxWidth: "800px",
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
      }}>
        <p style={{
          textAlign: "center",
          fontSize: "1.1rem",
          lineHeight: "1.6",
          color: "#555"
        }}>
          Penang offers an incredible variety of dining experiences, from traditional hawker centers to fine dining establishments. Some notable restaurants include Kebaya Dining Room for Peranakan cuisine, Tek Sen Restaurant for authentic Chinese dishes, and Kapitan Restaurant for delicious Indian food. The hawker centers at Gurney Drive and New Lane are also must-visit destinations for local street food.
        </p>
      </div>
      <div style={{ width: "100%", height: "4px", margin: "1rem 0", background: "linear-gradient(to right, #e82962, #1fc6c6)" }}> </div>

      <SkylineImage/>
      
    </div>
  )
}

export default FoodPage
