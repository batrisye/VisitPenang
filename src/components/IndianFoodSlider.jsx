import React from 'react';
import './CardsSlider.css';

import Satay from '../assets/FoodPics/Satay.png';
import NasiLemak from '../assets/FoodPics/NasiLemak.png';

import TehLimao from '../assets/FoodPics/TehLimao.png';
import TehTarik from '../assets/FoodPics/TehTarik.png';
import Thosai from '../assets/FoodPics/Thosai.png' ;
import Paratha from '../assets/FoodPics/Paratha.png' ;
const CardsSlider = () => {
  const images = [
    { src: Thosai, title: 'Thosai',
      type: 'Breakfast', description: "Thosai is a type of pancake made from a fermented batter. It is somewhat similar to a crepe in appearance. Its main ingredients are rice and black gram. It originated in South India,  and is available throughout Malaysia. It can be made to be thick like a pancake, or thin and crispy. " },
    { src: Paratha,title: 'Paratha',
      type: 'Breakfast', description: "Paratha is a layered flatbread made from whole wheat flour. It is a staple food in many parts of the world, including India, Pakistan, Nepal, Sri Lanka, and Bangladesh. Paratha can be eaten as a snack or a meal and served with a variety of accompaniments such as curries, yogurt, and pickles. The dough is made with whole wheat flour, water, and oil. Paratha can be stuffed with a variety of fillings such as spiced potatoes, paneer, or minced meat. It is a popular street food and is often served for breakfast or as a side dish with meals." },
    { src: Satay,title: 'Satay',
      type: 'Snack', description: "Satay is a light traditional malay meal. It is a dish of seasoned, skewered, and grilled meat, served with a sauce. the more authentic version uses skewers from the midrib of the coconut palm frond, although bamboo skewers are often used. These are grilled or barbecued over a wood or charcoal fire, then served with various spicy seasonings. Satay can be served in various sauces, however most often they are served in a combination of soy and peanut sauce." },
    { src: NasiLemak ,title: 'Nasi Lemak',
      type: 'Breakfast', description: " Nasi Lemak is a fragrant rice dish cooked in coconut milk and pandan leaf. It is commonly found in Malaysia, where it is considered the national dish. It is also popular in neighbouring countries such as Singapore; Brunei, and Southern Thailand. Nasi Lemak can be served with a variety of accompaniments, such as fried chicken, hard-boiled eggs, cucumber slices, and sambal. It is often eaten for breakfast, but can also be enjoyed at any time of the day. Nasi Lemak is a versatile dish that can be adapted to suit different tastes and dietary preferences." },
    { src: TehLimao,title: 'Teh Limau',
      type: 'Drink', description: '"The Zesty Refreshment" Escape the heat with a glass of Teh Limau, a refreshing blend of black tea and freshly squeezed lime. This tangy, citrusy drink is perfectly balanced with just the right amount of sweetness. Ideal for quenching your thirst on a hot day or pairing with spicy local dishes, Teh Limau is a quintessential Penang beverage that energizes and refreshes with every sip' },
    { src: TehTarik,title: 'Teh Tarik',
      type: 'Drink', description: "No visit to Penang is complete without experiencing Teh Tarik, Malaysia's famous \"pulled tea.\" Watch as skilled vendors pour this smooth, frothy milk tea from one glass to another. Teh Tarik is the perfect companion to your meals or a satisfying treat on its own. It’s a must-try drink that’s as iconic as Penang itself "},
  ];

  return (
    <div className="cards-slider">
      {images.map((image, index) => (
        <div key={index} className="card">
          <img src={image.src} alt={`Nature ${index + 1}`} />
          <h3>{image.title}</h3>
          <p>{image.description}</p>
          <div className="card-type">{image.type}</div> 
        </div>
      ))}
    </div>
  );
};

export default CardsSlider;
