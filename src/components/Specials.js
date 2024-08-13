
import React from 'react';
import { Link } from 'react-router-dom'; 
import photo1 from '../assets/Menu/Food.jpg';
import photo2 from '../assets/Menu/Drinks.jpg';
import photo3 from '../assets/Menu/Desserts.jpg';
import { gsap } from 'gsap'; 

const Specials = () => {
  const specialsData = [
    {
      id: 1,
      title: 'Food',
      image: photo1,
      description: 'VIEW MENU',
      link: '/food' 
    },
    {
      id: 2,
      title: 'Drinks',
      image: photo2,
      description: 'VIEW MENU',
      link: '/drinks'
    },
    {
      id: 3,
      title: 'Treats',
      image: photo3,
      description: 'VIEW MENU',
      link: '/desserts' 
    },
  ];

  React.useEffect(() => {
    gsap.fromTo('.special-card', 
      { x: '-100%', opacity: 0 }, 
      { 
        x: '0%', 
        opacity: 1, 
        duration: 1, 
        ease: 'power2.out',
        stagger: {
          amount: 1,
          start: 1,
          from: 'end'
        }
      }
    );
  }, []);

  return (
    <section id = "menu" className="bg-[#010B13] py-16 text-center">
      <h2 className="text-4xl font-bold text-white mb-8">Delight in Exquisite Food</h2>
      <p className="text-[#da6946] mb-16 mx-auto w-1/2">
        Discover our menu: indulge in hearty Food, satisfy your sweet tooth with Desserts, and enjoy refreshing Drinks crafted to perfection.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {specialsData.map((special, index) => (
          <div 
            key={special.id} 
            className={`special-card flex flex-col items-center w-80`} 
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">{special.title}</h3>
            <div className="relative bg-black rounded-lg overflow-hidden w-full h-80">
              <img
                src={special.image}
                alt={special.title}
                className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-black bg-opacity-75 text-white">
                <Link to={special.link}>
                  <button className="specials-button bg-[#da6946] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#da6946] focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-transform duration-300">
                    {special.description}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;












































