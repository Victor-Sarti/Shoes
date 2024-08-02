import React, { useState } from 'react';
import cherry from './assets/cherry.png';
import green from './assets/green.png';
import blue from './assets/blue.png';
import arrowR from './assets/arrowR.svg';
import arrowL from './assets/arrowL.svg';
import './styles.css'; // Importe o arquivo CSS personalizado

const Section = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: 'Cherry Dunk',
      image: cherry,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem placeat non odit delectus hic eveniet quos debitis est! Dolore expedita delectus temporibus labore hic placeat.',
    },
    {
      id: 1,
      title: 'Blue Dunk',
      image: blue,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem placeat non odit delectus hic eveniet quos debitis est! Dolore expedita delectus temporibus labore hic placeat.',
    },
    {
      id: 2,
      title: 'Green Dunk',
      image: green,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem placeat non odit delectus hic eveniet quos debitis est! Dolore expedita delectus temporibus labore hic placeat.',
    },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="h-screen relative overflow-hidden">
      <div className="w-3/4 h-full m-auto relative">
        {slides.map((slide, index) => {
          let slideClass = 'slide';
          if (index === activeSlide) {
            slideClass = 'slide slide-active';
          } else if (index === (activeSlide + 1) % slides.length) {
            slideClass = 'slide slide-next';
          } else if (index === (activeSlide - 1 + slides.length) % slides.length) {
            slideClass = 'slide slide-prev';
          }

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-transform duration-500 ${slideClass}`}
            >
              <div className="absolute w-3/5 translate-y-1/3">
                <img className="w-full translate-x-1/4 -rotate-[30deg]" src={slide.image} alt="dunk" />
              </div>
              <div className="absolute h-full w-3/4 right-24 flex flex-col items-end justify-end gap-5">
                <p className="font-semibold">Nike</p>
                <h2 className="text-7xl">{slide.title}</h2>
                <p className="text-neutral-500 text-right max-w-sm">{slide.description}</p>
                <button className="uppercase border-2 border-green-600 mb-10 w-32 h-9 bg-lime-400 rounded-lg text-black pointer">
                  Saiba Mais
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute w-[70vw] top-2/4 left-2/4 -translate-x-2/4 -translate-y-6 flex justify-between">
        <button onClick={handlePrev} className="hover:bg-lime-400 top-2/4 w-12 h-12 border rounded-full cursor-pointer">
          <img className="w-7 mt-2 translate-x-2 -translate-y-1 cursor-pointer" src={arrowL} alt="Arrow-Left" />
        </button>
        <button onClick={handleNext} className="hover:bg-lime-400 top-2/4 w-12 h-12 border rounded-full cursor-pointer">
          <img className="w-7 mt-2 translate-x-2 -translate-y-1 cursor-pointer" src={arrowR} alt="Arrow-right" />
        </button>
      </div>
      <div className="absolute top-2/4 left-2/4 h-48 w-[90vw] -translate-x-2/4 flex flex-col justify-end gap-4">
        <div className="text-5xl font-semibold">{String(activeSlide + 1).padStart(2, '0')}</div>
        <ul className="flex gap-4">
          {slides.map((slide, index) => (
            <li
              key={slide.id}
              className={`w-12 h-1 border rounded-md duration-75 ${
                index === activeSlide ? 'bg-white' : 'bg-lime-400'
              }`}
            ></li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Section;
