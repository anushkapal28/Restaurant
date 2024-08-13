import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  useEffect(() => {
    
    gsap.fromTo('.contact-heading', 
      { opacity: 0, y: -50, scale: 1.2 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'bounce.out' }
    );

  
    gsap.fromTo('.contact-paragraph', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
    );

    gsap.fromTo('.social-icons div', 
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)', stagger: 0.2, delay: 1 }
    );

  
    gsap.fromTo('.footer', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.5 }
    );
  }, []);

  return (
    <div id = "contact" className="flex flex-col min-h-screen text-white bg-[#010B13]">
      <div className="flex-grow flex flex-col items-center justify-center py-16 relative">
        <h1 className="contact-heading text-4xl font-bold mb-4">Contact Us</h1>
        <p className="contact-paragraph text-lg mb-8 text-center max-w-md">
          We would love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.
        </p>
        
        <div className="social-icons flex space-x-4 mb-8">
          <div className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-200">
            <FaFacebookF className="text-xl" />
          </div>
          <div className="p-2 rounded-full bg-blue-400 hover:bg-blue-500 transition duration-200">
            <FaTwitter className="text-xl" />
          </div>
          <div className="p-2 rounded-full bg-pink-600 hover:bg-pink-700 transition duration-200">
            <FaInstagram className="text-xl" />
          </div>
        </div>
        
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <FaPhoneAlt className="text-2xl" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-2xl" />
            <span>info@yourwebsite.com</span>
          </div>
        </div>
      </div>
      
      <footer className="footer bg-[#ebeae1] py-8 text-center text-sm">
        <div className="mb-4">
          <p>&copy; 2024 Your Website. All rights reserved.</p>
          <p>123 Your Street, Your City, Your Country</p>
        </div>
        <div className="mb-4">
          <p>Support: support@yourwebsite.com</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
