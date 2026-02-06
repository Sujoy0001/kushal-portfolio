import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ph from '../assets/iphone.png';

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const triggerRef = useRef(null);
  const timelineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const clips = [
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200",
    "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?q=80&w=1200",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200",
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

      // 2. PRECISION TIMELINE SCROLL
      // x: -92% (approx) ensures the last unified frame stops at the center playhead
      gsap.to(timelineRef.current, {
        x: `-${(totalClips - 1) * 23.1}%`, 
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
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Ambient background light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[200px] rounded-full" />

        <div className="relative w-[92vw] max-w-[1200px] aspect-[19.5/9] z-10">
          
          {/* iOS Interface Container */}
          <div className="absolute inset-[2.4%] w-[72vw] ml-4 overflow-hidden rounded-[5rem] bg-black">
            
            {/* FULL SCREEN DYNAMIC PREVIEW */}
            <div className="absolute inset-0 w-full h-full">
              {clips.map((src, i) => (
                <div 
                  key={i}
                  className={`absolute inset-0 transition-all duration-1000 ease-out ${
                    activeIndex === i ? "opacity-100 scale-100 z-10" : "opacity-0 scale-100 z-0"
                  }`}
                >
                  <img 
                    src={src} 
                    className="w-full h-full object-cover"
                    alt={`Full Frame ${i}`} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-20" />
            </div>

            {/* UI LAYER */}
            <div className="absolute inset-0 z-30 flex flex-col justify-between">
              
              <div className="p-8 flex justify-between items-start">
                <div className="flex items-center gap-4 bg-black/40 backdrop-blur-2xl p-2 rounded-2xl border border-white/5 px-4 shadow-2xl">
                  <div className="flex flex-col">
                    <span className="text-white text-[11px] font-bold tracking-tight uppercase italic">Cinematic_Edit_01</span>
                    <span className="text-blue-500 text-[9px] font-mono animate-pulse uppercase">Rec ● 4k 60fps</span>
                  </div>
                </div>
                <div className="px-6 py-2 bg-blue-600 text-white text-[10px] font-black rounded-full shadow-lg uppercase tracking-widest">
                  Export
                </div>
              </div>

              {/* DYNAMIC EDITING DOCK */}
              <div className="w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-28 pb-6 px-12">
                
                <div className="flex justify-between items-center mb-4 text-white/50 text-[10px] font-mono tracking-widest uppercase">
                  <span>{`00:00:1${activeIndex + 1}`}</span>
                  <div className="flex gap-4">
                    <span className="text-white">PRORES 422</span>
                    <span className="text-blue-500 font-bold">HDR</span>
                  </div>
                </div>

                {/* Scrubber Interface */}
                <div className="relative py-4 overflow-visible border-t border-white/10">
                  
                  {/* Fixed Playhead (White Center Line) */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white z-50 shadow-[0_0_15px_white]">
                    <div className="absolute -top-1 -left-[4px] w-2.5 h-2.5 bg-white rounded-full ring-2 ring-black" />
                  </div>
                  
                  {/* THE UNIFORM FILM STRIP */}
                  <div 
                    ref={timelineRef} 
                    className="flex gap-4 px-[50%] items-center" 
                    style={{ willChange: 'transform' }}
                  >
                    {clips.map((src, i) => (
                      <div 
                        key={i} 
                        className={`relative flex-shrink-0 w-36 h-20 md:w-44 md:h-24 rounded-lg overflow-hidden border transition-all duration-500 ${
                          activeIndex === i 
                          ? "border-white opacity-100 z-20 shadow-2xl brightness-110" 
                          : "border-white/10 opacity-30 grayscale"
                        }`}
                      >
                        <img src={src} className="w-full h-full object-cover" alt="clip-mini" />
                        <div className="absolute bottom-1 right-2 text-[7px] font-mono text-white/50">
                          SC_{i+1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Toolbar icons */}
                <div className="flex justify-around items-center mt-4 pt-4 border-t border-white/5 opacity-40">
                  {['✂️', '🔊', 'Aa', '✨', '⚙️'].map((ico, idx) => (
                    <div key={idx} className="text-lg hover:opacity-100 hover:scale-125 transition-all cursor-pointer">{ico}</div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* iPhone Frame PNG */}
          <img 
            src={ph} 
            alt="iPhone Frame" 
            className="absolute inset-0 w-full h-full object-contain pointer-events-none z-50 drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]"
          />

        </div>

      </section>
    </div>
  );
};

export default Video;