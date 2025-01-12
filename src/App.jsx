import React from 'react';
import Navbar from './components/Navbar';
// import VideoSection from './components/VideoSection';
// import CardsSlider from './components/CardsSlider';
// import SkylineImage from './components/SkylineImage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import FoodPage from './pages/FoodPage';
import HomePage from './pages/HomePage';
import NaturePage from './pages/NaturePage';
import RecreationPage from './pages/RecreationPage';
import ParkPage from './pages/ParkPage';
import AdventurePage from './pages/AdventurePage';
import HeritagePage from './pages/HeritagePage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/NaturePage" element={<NaturePage />} />
          <Route path="/FoodPage" element={<FoodPage />} />
          <Route path="/RecreationPage" element={<RecreationPage/>}/>
          <Route path='/ParkPage' element={<ParkPage/>}/>
          <Route path='/AdventurePage' element={<AdventurePage/>} />
          <Route path="/HeritagePage" element={<HeritagePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

