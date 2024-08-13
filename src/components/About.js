import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cafe1 from '../assets/Gallery/Cafe1.jpg';
import Cafe2 from '../assets/Gallery/Cafe2.jpg';
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const locomotiveScroll = new LocomotiveScroll();
    useEffect(() => {
        
        gsap.set('.image1', { opacity: 0, x: '-10%', y: '10%' });
        gsap.set('.image2', { opacity: 0, x: '10%', y: '-10%' });

     
        gsap.to('.image1', {
            opacity: 1,
            x: '0%',
            y: '0%',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.image1',
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true
            }
        });

    
        gsap.to('.image2', {
            opacity: 1,
            x: '0%',
            y: '0%',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.image2',
                start: 'top 70%',
                end: 'bottom 30%',
                scrub: true
            }
        });

        gsap.fromTo('.text-reveal',
            { opacity: 0, y: 50 },
            {
                opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: {
                    trigger: '.text-reveal',
                    start: 'top 80%',
                    end: 'bottom 20%',
                    scrub: true
                }
            }
        );

        gsap.to('.moving-shape', {
            y: () => window.innerHeight * 0.1,
            duration: 3,
            ease: 'none',
            repeat: -1,
            yoyo: true,
            scrollTrigger: {
                trigger: '.moving-shape',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true
            }
        });

        gsap.to('.particle', {
            x: () => window.innerWidth * 0.1,
            duration: 4,
            ease: 'none',
            repeat: -1,
            yoyo: true,
            scrollTrigger: {
                trigger: '.particle',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true
            }
        });

    }, []);

    return (
        <section id = "about" className="relative py-16 text-center bg-[#010B13] overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="moving-shape bg-yellow-400 rounded-full w-48 h-48 opacity-20 absolute" style={{ top: '10%', left: '10%' }}></div>
                <div className="moving-shape bg-blue-400 rounded-full w-64 h-64 opacity-10 absolute" style={{ top: '50%', left: '20%' }}></div>
                <div className="moving-shape bg-pink-400 rounded-full w-40 h-40 opacity-25 absolute" style={{ top: '70%', left: '70%' }}></div>
                <div className="moving-shape bg-green-400 rounded-full w-56 h-56 opacity-20 absolute" style={{ top: '30%', left: '60%' }}></div>
                
                <div className="particle bg-red-500 rounded-full w-8 h-8 opacity-40 absolute" style={{ top: '15%', left: '25%' }}></div>
                <div className="particle bg-teal-500 rounded-full w-6 h-6 opacity-30 absolute" style={{ top: '45%', left: '55%' }}></div>
                
                <div className="particle bg-purple-500 rounded-full w-7 h-7 opacity-40 absolute" style={{ top: '80%', left: '40%' }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-10">
                <div className="flex flex-col lg:flex-row h-auto text-white p-8"> 
                    
                    <div className="w-full lg:w-1/2 relative p-4 flex flex-col items-center justify-center space-y-10">
                        <img src={Cafe1} alt="Cafe Interior" className="w-2/3 lg:w-1/2 absolute left-10 top-10 image1" />
                        <img src={Cafe2} alt="Cafe Lounge" className="w-2/3 lg:w-1/2 absolute top-1/3 right-25 image2" />
                    </div>

                    <div className="w-full lg:w-1/2 p-10 flex z-40">
                        <div className="text-reveal max-w-lg">
                            <h1 className="text-6xl font-bold mb-8 text-white" style={{ fontFamily: "Grey Qo, cursive" }}>About Our Café</h1>
                            <p className="text-lg leading-relaxed text-[#ee643a]" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                Welcome to <span className='text-4xl text-[#deec5b] highlight-text' style={{ fontFamily: "Grey Qo, cursive" }}>Café Aroma</span>, where every visit is a taste adventure! We offer more than just exceptional coffee—we serve a diverse range of delights including fresh juices, craft cocktails, and an array of drinks. Our menu features gourmet pizzas, juicy burgers, delicious pastas, and indulgent pastries, all made with top-quality ingredients.

                                At Café Aroma, enjoy a cozy atmosphere perfect for relaxing or socializing. Whether you're here for a quick coffee, a hearty meal, or a refreshing drink, we have something for everyone. Experience the best of flavor and comfort with us!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;




