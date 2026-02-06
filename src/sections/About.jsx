import React from 'react';
import myimg from '../images/myimg.png';

export default function About() {
  return (
    <section className="relative w-full min-h-screen bg-[#f2f2f2] flex items-center justify-center overflow-hidden px-6 py-8 md:px-12">
      
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="flex justify-center md:justify-start">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <img
              src={myimg} 
              alt="Photographer Profile" 
              className="w-full h-full object-cover rounded-full shadow-xl grayscale contrast-125"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-8 md:pl-10">
          <h2 className="text-6xl sujoy1 font-bold text-green-800">Visual Alchemist.</h2>
          <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed max-w-md text-right mb-8">
            I don't just cut footage; I orchestrate emotions. With a background in color science and sound design, I treat every frame as a canvas. My workflow mimics the pacing of music—building tension, releasing energy, and finding the perfect beat for every cut.
          </p>

          <a 
            href="#contact" 
            className="group flex items-center gap-4 text-xl font-bold tracking-widest uppercase text-gray-900 hover:text-amber-300 transition-opacity"
          >
            Download cv
            <svg 
              width="80" 
              height="20" 
              viewBox="0 0 100 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current"
            >
              <line x1="0" y1="10" x2="90" y2="10" strokeWidth="1.5" />
              <path d="M85 5L95 10L85 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 select-none leading-none pointer-events-none">
        <h1 className="text-[12vw] font-bold tracking-tighter text-black uppercase bottom-0 right-0">
          About Me
        </h1>
      </div>

    </section>
  );
};
