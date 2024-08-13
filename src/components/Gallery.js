import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { FaCamera } from 'react-icons/fa';
import Cafe1 from '../assets/Gallery/Cafe1.jpg';
import Cafe2 from '../assets/Gallery/Cafe2.jpg';
import Cafe3 from '../assets/Gallery/Gallery3.jpg';
import Cafe4 from '../assets/Gallery/Cafe4.jpg';
import Cafe5 from '../assets/Gallery/Gallery5.jpg';
import Cafe6 from '../assets/Gallery/Cafe6.jpg';
import Cafe7 from '../assets/Gallery/Cafe7.jpg';
import Cafe8 from '../assets/Gallery/Cafe2.jpg';
import Cafe9 from '../assets/Gallery/Cafe9.jpg';
import Cafe10 from '../assets/Gallery/Cafe10.jpg';
import Cafe11 from '../assets/Gallery/Gallery9.jpg';
import Cafe12 from '../assets/Gallery/Cafe12.jpg';

const images = [Cafe1, Cafe2, Cafe3, Cafe4, Cafe5, Cafe6, Cafe7, Cafe8, Cafe9, Cafe10, Cafe11, Cafe12]; 

const PuzzleGallery = () => {
  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    timeline
      .to('.puzzle-piece', {
        x: () => `${Math.random() * 100 - 50}vw`,
        y: () => `${Math.random() * 100 - 50}vh`,
        scale: 0.5,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      })
      .to('.puzzle-piece', {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      });
  }, []);

  return (
    <div className="bg-[#010B13] min-h-screen flex flex-col items-center p-4">
      <div className="text-center mt-12 mb-8 flex items-center justify-center space-x-4">
        <h1 className="text-4xl font-bold z-20 text-white">Our Café in Pictures</h1>
        <FaCamera className="text-5xl z-20" /> 
      </div>
      <div className="w-full px-4 lg:px-16 mb-8">
        <div className="relative max-w-6xl mx-auto w-full h-[80vh] rounded-lg overflow-hidden bg-[#da6946] shadow-lg"> {/* Added bg color */}
          <div className="grid grid-cols-4 grid-rows-3 gap-1 h-full relative">
            {images.map((image, index) => (
              <div
                key={index}
                className="puzzle-piece absolute"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  gridRow: `${Math.floor(index / 4) + 1} / span 1`,
                  gridColumn: `${(index % 4) + 1} / span 1`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuzzleGallery;
