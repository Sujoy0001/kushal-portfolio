import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { REELS } from "../data/reels";

export default function CenteredReel() {
  const scrollRef = useRef(null);

  // Automatically scroll to center on mount
  useEffect(() => {
    if (scrollRef.current) {
      const element = scrollRef.current;
      const centerPosition = (element.scrollWidth - element.clientWidth) / 2;
      element.scrollLeft = centerPosition;
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6;
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-black text-white min-h-screen py-12 overflow-hidden font-custom">
            
      {/* Centered Header */}
      <div className="text-left sujoy7 mb-16 px-8">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-semibold tracking-tighter"
        >
          Pro Results. <br />
          <span className="text-emerald-400">Starting from the center.</span>
        </motion.h2>
      </div>

      <div className="relative">
        {/* Edge Blur Overlays */}
        <div className="absolute top-0 left-0 h-full w-24 md:w-48 z-10 bg-linear-to-r from-black via-black/20 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-24 md:w-48 z-10 bg-linear-to-l from-black via-black/20 to-transparent pointer-events-none" />

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-10 px-[10vw] md:px-[30vw] scroll-smooth"
        >
          {REELS.map((item) => (
            <div key={item.id} className="shrink-0 w-[80vw] md:w-[40vw] lg:w-1/2 snap-center group">
              
              {/* 2. Wrapped the motion.div in an anchor tag pointing to the Insta URL */}
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <motion.div 
                  whileHover={{ scale: 0.98 }}
                  className="aspect-[9/16] w-full rounded-[3rem] md:rounded-md overflow-hidden bg-[#161617] relative"
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Optional: Add a subtle play icon overlay here to show it's a video */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 pointer-events-none">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="white" className="drop-shadow-lg">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </motion.div>
              </a>

              <div className="mt-8 text-left px-4">
                <p className="text-lg sujoy7 md:text-xl leading-tight text-emerald-400">
                  <span className="text-white font-semibold block mb-1">{item.title}</span> {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Centered Controls */}
      <div className="mt-10 px-12 flex justify-end gap-6">
        <button 
          onClick={() => scroll("left")}
          className="w-14 h-14 rounded-full cursor-pointer bg-[#1d1d1f] border border-white/5 hover:bg-[#323234] flex items-center justify-center transition-all active:scale-90"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button 
          onClick={() => scroll("right")}
          className="w-14 h-14 rounded-full cursor-pointer bg-[#1d1d1f] border border-white/5 hover:bg-[#323234] flex items-center justify-center transition-all active:scale-90"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}