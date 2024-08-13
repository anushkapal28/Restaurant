import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

import burgerImg from '../../assets/Menu/Burger.jpg';
import pizzaImg from '../../assets/Menu/Piz (1).jpg';
import pastaImg from '../../assets/Menu/Pasta.jpg';
import chowmeinImg from '../../assets/Menu/Chowmein.jpg';
import croissantImg from '../../assets/Menu/Croissant.jpg';


const Food = () => {
  const foodItems = [
    { id: 1, name: 'Burger', image: burgerImg },
    { id: 2, name: 'Pizza', image: pizzaImg },
    { id: 3, name: 'Pasta', image: pastaImg },
    { id: 4, name: 'Chowmein', image: chowmeinImg },
    { id: 5, name: 'Croissant', image: croissantImg }
  ];

  useEffect(() => {
    gsap.fromTo('.food-item', 
      { opacity: 0, y: 100, scale: 0.9 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.3, ease: 'power3.out' }
    );
  }, []);

  return (
    <section className="py-16 text-center bg-[#010B13]">
      <h2 className="text-5xl font-bold mb-12 text-white">Our Food Menu</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {foodItems.map((item) => (
          <div 
            key={item.id} 
            className="food-item w-80 bg-[#ee643a] opacity-5 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Link to={`/item/food/${item.id}`} className="block">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.name}</h3>
                <p className="text-white">Click for more details</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Food;

