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
      <p style={{textAlign: "center",fontSize: "1rem",fontWeight: "bold",color: "black"}}>Penang is considered a Melting pot of three different asian cuisines - Chinese , Indian and Malay. The food is a mix of all three and is a must try for all food lovers. The street food is a must try and is considered one of the best in the world. The food is a mix of all three and is a must try for all food lovers. The street food is a must try and is considered one of the best in the world. The food is a mix of all three and is a must try for all food lovers. The street food is a must try and is considered one of the best in the world.</p>
      
      <CardsSlider/>
      <div style={{ width: "100%", height: "3px", margin: "1rem 0", background: "linear-gradient(to right, #e82962, #1fc6c6)" }}> </div>
      <IndianFoodSlider/>
      <SkylineImage/>
      
    </div>
  )
}

export default FoodPage
