import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import reviewImage1 from '../assets/Menu/small1.png';
import reviewImage2 from '../assets/Menu/small2.png';
import reviewImage3 from '../assets/Menu/small3.png';

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  useEffect(() => {
    gsap.fromTo('.review-item',
      { opacity: 0, y: 100, scale: 0.7 },
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.3, ease: 'bounce.out' }
    );

    gsap.fromTo('.review-image',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, stagger: 0.3, ease: 'power3.out' }
    );
  }, []);

  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      rating: 5,
      comment: 'Amazing place! The coffee is superb.',
      image: reviewImage1
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 4,
      comment: 'Great ambiance and friendly staff.',
      image: reviewImage2
    },
    {
      id: 3,
      name: 'Alice Johnson',
      rating: 5,
      comment: 'The pastries are to die for!',
      image: reviewImage3
    }
  ];

  return (
    <section className="bg-[#010B13] py-14 px-8">
      <h2 className="text-4xl font-bold text-center mb-28 text-white">What Our Customers Say</h2>
      
      <div className="flex flex-wrap justify-center gap-12">
        {reviews.map((review) => (
          <div key={review.id} className="review-item w-96 rounded-md h-60 bg-white flex flex-col items-center justify-center shadow-lg relative overflow-hidden">
            <div className="review-image w-24 h-24 rounded-full border-4 border-white absolute top-4">
              <img src={review.image} alt={review.name} className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="mt-16 text-center z-10 relative">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">{review.name}</h3>
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
