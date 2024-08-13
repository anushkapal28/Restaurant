import React, { useState, useEffect, useRef } from 'react';
import CafeLogo from '../assets/Gallery/CafeLogo.png';
import VideoBackground from '../assets/Home/BgVideo.mp4';
import { gsap } from 'gsap';
import { Link, animateScroll as scroll } from 'react-scroll'; 
import LoginForm from './Login';  
import SignupForm from './Signup';


const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const sentences = ["Soooo delicious!", "Made with love!", "Taste the magic!"];

  const floatingTextRef = useRef(null);
  const circularPatternsRef = useRef(null);
  const navRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
  
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [sentences.length]);

  useEffect(() => {
  
    gsap.fromTo(navRef.current, 
      { opacity: 0, y: -50 }, 
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(headingRef.current, 
      { opacity: 0, y: -50 }, 
      { opacity: 1, y: 0, duration: 1, delay: 1 }
    );

    gsap.fromTo(paragraphRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, delay: 1.5 }
    );

    gsap.fromTo(circularPatternsRef.current.children, 
      { scale: 0.5, opacity: 0.5 }, 
      { scale: 1, opacity: 0.8, duration: 2, stagger: 0.5, repeat: -1, yoyo: true }
    );
  }, []);
  const handleLoginOpen = () => setIsLoginOpen(true);
  const handleSignupOpen = () => setIsSignupOpen(true);
  const closeModal = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(false);
  };

  return (
    <div className="relative h-auto bg-[#010B13] mb-20 text-white overflow-hidden">
      
      <header ref={navRef} className="w-full flex items-center justify-between px-8 py-0 bg-[#010B13] shadow-md z-50">
        <img src={CafeLogo} alt="Cafe Logo" className="w-32 h-auto" />
        <nav className="flex space-x-8">
          <Link to="home" smooth={true} duration={500} className="nav-link text-lg font-semibold hover:text-[#da6946] cursor-pointer">Home</Link>
          <Link to="about" smooth={true} duration={500} className="nav-link text-lg font-semibold hover:text-[#da6946] cursor-pointer">About</Link>
          <Link to="menu" smooth={true} duration={500} className="nav-link text-lg font-semibold hover:text-[#da6946] cursor-pointer">Menu</Link>
          <Link to="contact" smooth={true} duration={500} className="nav-link text-lg font-semibold hover:text-[#da6946] cursor-pointer">Contact</Link>
        </nav>
        <div className="flex space-x-4">
          <button onClick={handleLoginOpen} className="btn bg-[#da6946] text-white py-2 px-4 rounded-lg hover:bg-[#d65a2b]">Login</button>
          <button onClick={handleSignupOpen} className="btn bg-transparent border-2 border-white text-white py-2 px-4 rounded-lg hover:bg-[#da6946] hover:text-white">Sign Up</button>
        </div>
       
        
      </header>

      <main className="flex flex-col h-auto relative z-10 px-12 py-12">
        <div id="home" className="w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-between">
       
          <div className="w-full md:w-1/2 flex flex-col items-start text-center md:text-left mb-12 md:mb-0">
            <p ref={paragraphRef} className="text-white mb-2">Salutations, food aficionado!</p>
            <h1 ref={headingRef} className="text-7xl font-bold mb-4 leading-tight headline text-[#B43F3F]">
              <span className="cafe-aroma">Cafe' Aroma</span>
            </h1>
            <p className="text-white mb-4 text-3xl">Savor a world of tastes and fragrances in a cozy setting.</p><br />
            <div className="flex gap-4">
              <Link to="menu" smooth={true} duration={500} className="btn bg-[#da6946] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#d65a2b] cursor-pointer">Our menu</Link>
              <Link to="about" smooth={true} duration={500} className="btn bg-gray-100 text-black py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-200 cursor-pointer">About us</Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center relative">
            <div className="relative w-full h-full flex justify-center items-center">
             
              <div className="absolute top-14 left-0 w-[90%] h-[90%] bg-[#da6946] opacity-80 rounded-lg z-10"></div>

              <video
                src={VideoBackground}
                className="relative w-[95%] h-[95%] object-cover rounded-lg shadow-lg z-20"
                autoPlay
                loop
                muted
                playsInline
              />

              
              <div 
                ref={floatingTextRef}
                className="floating-text absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg z-30"
              >
                <span role="img" aria-label="delicious" className="mr-2">😋</span> {sentences[textIndex]}
              </div>

            
              <div ref={circularPatternsRef} className="absolute top-8 left-8 flex flex-col space-y-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full opacity-50 z-10"></div>
                <div className="w-16 h-16 bg-gray-300 rounded-full opacity-50 z-10"></div>
                <div className="w-16 h-16 bg-gray-300 rounded-full opacity-50 z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {isLoginOpen && <LoginForm closeModal={closeModal} />}
      {isSignupOpen && <SignupForm closeModal={closeModal} />}
    </div>
  );
};

export default Home;













