import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Reservation from './components/Reservation';
import Specials from './components/Specials';
import Food from './components/Pages/FoodDetails'; 
import Desserts from './components/Pages/DessertsDetails'; 
import Drinks from './components/Pages/DrinksDetails'; 
import ThreeItems from './components/Pages/FoodItems';
import Review from './components/Review';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="bg-[#010B13]"><Home /><About /><Specials /><Gallery /><Reservation /><Review/><ContactUs /></div>} />
        <Route path="/about" element={<div><About /></div>} />
        <Route path="/menu" element={<div><Specials /></div>} />
        <Route path="/food" element={<div><Food /></div>} />
        <Route path="/desserts" element={<div><Desserts /></div>} />
        <Route path="/drinks" element={<div><Drinks /></div>} />
        <Route path="/menu/:category/:id" element={<div><ThreeItems /></div>} />
      </Routes>
    </Router>
  );
}

export default App;




