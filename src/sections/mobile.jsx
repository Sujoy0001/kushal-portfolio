import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ph from '../assets/apple-iphone-16-pro-max-2024-medium.png'; // Make sure this is a portrait iPhone mockup
import img1 from '../images/20241203_165446.jpg.jpeg';
import img2 from '../images/20250418_052610.jpg.jpeg';
import img3 from '../images/_DSC0265.jpg.jpeg';
import img4 from '../images/IMG_20241203_100535.jpg.jpeg';
import img5 from '../images/PicsArt_04-12-06.26.23.jpg.jpeg';

gsap.registerPlugin(ScrollTrigger);

const PortraitVideoEditor = () => {
  const triggerRef = useRef(null);
  const timelineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const clips = [
    img1,
    img2,
    img3,
    img4,
    img5
  ];

  useEffect(() => {
    const totalClips = clips.length;
    
    const ctx = gsap.context(() => {
      // 1. PIN THE SECTION & TRACK PROGRESS
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top top",
        end: "+=4000", 
        scrub: 1.5,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress * (totalClips - 1);
          setActiveIndex(Math.round(progress));
        }
      });

      // 2. PRECISION TIMELINE SCROLL (Calculated for portrait width)
      // Using xPercent on the container to slide it based on the number of items
      gsap.to(timelineRef.current, {
        x: `-${(totalClips - 1) * 88}px`, // 80px (w-20) + 8px (gap-2) = 88px offset per item
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=4000",
          scrub: 1.5,
        }
      });
    });

    return () => ctx.revert();
  }, [clips.length]);

  return (
    <div ref={triggerRef} className="bg-[#020202] select-none">
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden p-8">
        
        {/* Ambient background light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />

        {/* PORTRAIT DEVICE CONTAINER */}
        <div className="relative h-[80vh] aspect-9/19 z-10">
          
          {/* iOS Interface Container (The Screen) */}
          {/* Insets are adjusted to fit nicely inside the bezel of a standard phone PNG */}
          <div className="absolute inset-[1.5%] overflow-hidden rounded-[3rem] bg-black">
            
            {/* FULL SCREEN DYNAMIC PREVIEW */}
            <div className="absolute inset-0 w-full h-full">
              {clips.map((src, i) => (
                <div 
                  key={i}
                  className={`absolute inset-0 transition-all duration-1000 ease-out ${
                    activeIndex === i ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
                  }`}
                >
                  <img 
                    src={src} 
                    className="w-full h-full object-cover"
                    alt={`Full Frame ${i}`} 
                  />
                  <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none" />
                </div>
              ))}
              {/* Gradient overlays to make text readable */}
              <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/90 z-20" />
            </div>

            {/* UI LAYER */}
            <div className="absolute inset-0 z-30 flex flex-col justify-between">
              
              {/* TOP HEADER */}
              <div className="p-6 flex justify-between items-start pt-10">
                <div className="flex flex-col gap-1 bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/10 px-3 shadow-lg">
                  <span className="text-white text-[10px] font-bold tracking-tight uppercase italic">Vertical_Edit</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-white/80 text-[8px] font-mono uppercase">9:16 • 4K</span>
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black rounded-full shadow-lg uppercase tracking-wider">
                  Export
                </div>
              </div>

              {/* DYNAMIC EDITING DOCK (BOTTOM) */}
              <div className="w-full pb-8 pt-20 px-4">
                
                {/* Meta details */}
                <div className="flex flex-col items-center mb-6 text-center">
                  <span className="text-white text-xs font-mono tracking-widest uppercase mb-1">
                    {`00:00:1${activeIndex + 1}`}
                  </span>
                  <div className="flex gap-2 text-[8px] font-mono">
                    <span className="text-white/60">PRORES 422</span>
                    <span className="text-blue-500 font-bold">HDR</span>
                  </div>
                </div>

                {/* Scrubber Interface */}
                <div className="relative py-2 overflow-visible border-t border-white/10">
                  
                  {/* Fixed Playhead (White Center Line) */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white z-50 shadow-[0_0_10px_white]">
                    <div className="absolute -top-1 -left-[3px] w-2 h-2 bg-white rounded-full" />
                  </div>
                  
                  {/* THE UNIFORM FILM STRIP */}
                  <div 
                    ref={timelineRef} 
                    className="flex gap-2 px-[50%] items-center pt-2" 
                    style={{ willChange: 'transform' }}
                  >
                    {clips.map((src, i) => (
                      <div 
                        key={i} 
                        className={`relative flex-shrink-0 w-20 h-28 rounded-md overflow-hidden border transition-all duration-500 ${
                          activeIndex === i 
                          ? "border-white opacity-100 z-20 shadow-2xl brightness-110 scale-105" 
                          : "border-white/20 opacity-40 grayscale scale-95"
                        }`}
                      >
                        <img src={src} className="w-full h-full object-cover" alt="clip-mini" />
                        <div className="absolute bottom-1 right-1 text-[8px] font-mono text-white/80 drop-shadow-md">
                          {i+1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Toolbar icons */}
                <div className="flex justify-between items-center mt-6 px-4 pt-4 border-t border-white/10 opacity-70">
                  {['✂️', '🔊', 'Aa', '✨', '⚙️'].map((ico, idx) => (
                    <div key={idx} className="text-lg hover:opacity-100 hover:scale-110 transition-all cursor-pointer">
                      {ico}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* iPhone Frame PNG */}
          <img 
            src={ph} 
            alt="iPhone Frame" 
            className="absolute inset-0 w-full h-full object-fill pointer-events-none z-50 drop-shadow-2xl"
          />

        </div>

      </section>
    </div>
  );
};

export default PortraitVideoEditor;