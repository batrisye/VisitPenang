import React from 'react'
// import Navbar from '../components/Navbar'
import FoodVideo from '../components/FoodVideo'
import CardsSlider from '../components/CardsSlider'
import SkylineImage from '../components/SkylineImage'
import IndianFoodSlider from '..components/IndianFoodSlider'
const FoodPage = () => {
  return (
    <div>
      <FoodVideo/>
       <div style={{ width: "100%", height: "3px", margin: "1rem 0", background: "linear-gradient(to right, #e82962, #1fc6c6)" }}> </div>
        <h2 style={{marginTop: "2rem", textAlign: "center",fontSize: "2rem",fontWeight: "bold"}}> Food and Beverages</h2>
      <p> Penang is considered a Melting pot of three different asian cuisines - Chinese , Indian and Malay </p>
      <div style={{ width: "100%", height: "3px", margin: "1rem 0", background: "linear-gradient(to right, #e82962, #1fc6c6)" }}> </div>
      <h2 style={{marginTop: "2rem", textAlign: "center",fontSize: "2rem",fontWeight: "bold"}}> Indian Food </h2>
      <IndianFoodSlider/>
      <CardsSlider/>
      <div style={{ width: "100%", height: "3px", margin: "1rem 0", background: "linear-gradient(to right, #e82962, #1fc6c6)" }}> </div>
      <SkylineImage/>
    </div>
  )
}

export default FoodPage
