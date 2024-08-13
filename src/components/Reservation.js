import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import plateImage from '../assets/Menu/Pizza.png';
import photo from '../assets/Menu/Table.jpg';

const Reservation = () => {
  const [showCurtain, setShowCurtain] = useState(false);

  const handlePlateClick = () => {
    setShowCurtain(true);
    localStorage.setItem('curtainShown', 'true');
    gsap.to('.curtain', {
      y: '0%',
      duration: 1,
      ease: 'power3.inOut',
    });
  };

  useEffect(() => {
    gsap.fromTo(
      '.plate-left',
      { x: '-150px', y: '-70px', rotation: -360, opacity: 0 },
      {
        x: '0px',
        y: '20px',
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
      }
    );

    gsap.fromTo(
      '.plate-right',
      { x: '150px', y: '-70px', rotation: 360, opacity: 0 },
      {
        x: '0px',
        y: '20px',
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.3,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#010B13]">
      {!showCurtain && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg  mx-auto">
              <p className="text-white text-sm mb-4">Click on PIZZA...</p>
              <div className="text-white text-8xl font-bold relative">
                B
                <span className="inline-block relative plate-container">
                  <img
                    src={plateImage}
                    alt="Plate"
                    className="plate-left cursor-pointer inline-block w-24 h-24"
                    onClick={handlePlateClick}
                  />
                </span>
                <span className="inline-block relative plate-container">
                  <img
                    src={plateImage}
                    alt="Plate"
                    className="plate-right cursor-pointer inline-block w-24 h-24"
                    onClick={handlePlateClick}
                  />
                </span>
                K YOUR TABLE
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`curtain ${showCurtain ? 'curtain-open' : 'curtain-closed'}`}>
        <div className="flex items-center justify-center w-full h-full">
          <div className=" rounded-lg shadow-lg p-8 w-full max-w-3xl">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: `url(${photo})` }}></div>
              <div className="w-full lg:w-1/2 p-8 bg-black text-white flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">Book Your Table</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-lg">Name:</label>
                    <input type="text" id="name" className="w-full p-2 border rounded"/>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-lg">Date:</label>
                    <input type="date" id="date" className="w-full p-2 border rounded"/>
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-lg">Time:</label>
                    <input type="time" id="time" className="w-full p-2 border rounded"/>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-lg">Number of Guests:</label>
                    <input type="number" id="guests" className="w-full p-2 border rounded"/>
                  </div>
                  <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded">Reserve</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;






















































