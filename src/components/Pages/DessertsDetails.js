import {React, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

import cakeImg from '../../assets/Menu/Cake.jpg';
import pastriesImg from '../../assets/Menu/Pastries.jpg';
import icecreamImg from '../../assets/Menu/IceCream.jpg';
import brownieImg from '../../assets/Menu/Brownie.jpg';
import puddingImg from '../../assets/Menu/Pudding.jpg';

const Desserts = () => {
  const dessertsItems = [
    { id: 'cake', name: 'Cake', image: cakeImg },
    { id: 'pastries', name: 'Pastries', image: pastriesImg },
    { id: 'icecream', name: 'Ice Cream', image: icecreamImg },
    { id: 'brownie', name: 'Brownie', image: brownieImg },
    { id: 'pudding', name: 'Pudding', image: puddingImg }
  ];

  useEffect(() => {
    gsap.fromTo('.dessert-item', 
      { opacity: 0, y: 100, scale: 0.9 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.3, ease: 'power3.out' }
    );
  }, []);

  return (
    <section className="py-16 text-center bg-[#010B13]">
      <h2 className="text-5xl font-bold mb-12 text-white">Our Desserts Menu</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {dessertsItems.map((item) => (
          <div 
            key={item.id} 
            className="dessert-item w-80 bg-[#ee643a] rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <Link to={`/item/desserts/${item.id}`} className="block">
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

export default Desserts;
