import {React, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

import coffeeImg from '../../assets/Menu/Coffee.jpg';
import teaImg from '../../assets/Menu/Tea.jpg';
import juiceImg from '../../assets/Menu/Juice.jpg';
import mojitoImg from '../../assets/Menu/Mojito.jpg';
import smoothieImg from '../../assets/Menu/Smoothie.jpg';

const Drinks = () => {
  const drinksItems = [
    { id: 'coffee', name: 'Coffee', image: coffeeImg },
    { id: 'tea', name: 'Tea', image: teaImg },
    { id: 'juice', name: 'Juice', image: juiceImg },
    { id: 'mojito', name: 'Mojito', image: mojitoImg },
    { id: 'smoothie', name: 'Smoothie', image: smoothieImg }
  ];

  useEffect(() => {
    gsap.fromTo('.drink-item', 
      { opacity: 0, y: 100, scale: 0.9 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.3, ease: 'power3.out' }
    );
  }, []);

  return (
    <section className="py-16 text-center bg-[#010B13]">
      <h2 className="text-5xl font-bold mb-12 text-white">Our Drinks Menu</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {drinksItems.map((item) => (
          <div 
            key={item.id} 
            className="drink-item w-80 bg-[#ee643a] rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <Link to={`/item/drinks/${item.id}`} className="block">
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

export default Drinks;
