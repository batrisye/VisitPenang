import React from 'react';
import './CardsSlider.css';
import Cendol from '../assets/FoodPics/Cendol.png';
import CharKT from '../assets/FoodPics/CharKT.png';
import HokkienMee from '../assets/FoodPics/HokkienMee.png';
import Laksa from '../assets/FoodPics/Laksa.png';
import TehLimao from '../assets/FoodPics/TehLimao.png';
import TehTarik from '../assets/FoodPics/TehTarik.png';
import Thosai from '../assets/FoodPics/Thosai.png' ;
import Paratha from '../assets/FoodPics/Paratha.png' ;
const CardsSlider = () => {
  const images = [
    { src: Thosai, title: 'Thosai',
      type: 'Breakfast', description: ' "Thosai is a type of pancake made from a fermented batter. It is somewhat similar to a crepe in appearance. Its main ingredients are rice and black gram. It originated in South India,  and is available throughout Malaysia. It can be made to be thick like a pancake, or thin and crispy. "},
    { src: Paratha,title: 'Paratha',
      type: 'Breakfast', description: "Paratha is a layered flatbread made from whole wheat flour. It is a staple food in many parts of the world, including India, Pakistan, Nepal, Sri Lanka, and Bangladesh. Paratha can be eaten as a snack or a meal and served with a variety of accompaniments such as curries, yogurt, and pickles. The dough is made with whole wheat flour, water, and oil. Paratha can be stuffed with a variety of fillings such as spiced potatoes, paneer, or minced meat. It is a popular street food and is often served for breakfast or as a side dish with meals." },
    { src: HokkienMee,title: 'Hokkien Mee',
      type: 'Light meal', description: 'Hokkien Mee is a rich noodle soup that perfectly embodies Penang’s culinary soul. Mee is chinese for noodle and Hokkien is a dialect common in penang. Thick yellow noodles are simmered in a fragrant broth made from prawns and aromatic spices. It is topped with fresh prawns, boiled egg, and a dash of chili paste' },
    { src: Laksa,title: 'Laksa',
      type: 'Spicy soup', description: " Laksa is a spicy noodle soup popular in the Peranakan cuisine of Southeast Asia. Penang's Laksa is a fiery celebration of bold, zesty flavors! This iconic noodle soup is a blend of tangy tamarind, spicy chili, and aromatic herbs, served with thick rice noodles and topped with succulent fish or prawns. Whether you go for the rich and creamy Curry Laksa or the sour and spicy Asam Laksa, each spoonful is a flavor explosion that will leave you craving more." },
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
