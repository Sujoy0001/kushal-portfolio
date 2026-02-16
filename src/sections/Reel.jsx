import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const REELS = [
  { id: 1, title: "Low-light photography.", description: "Capture sharp images in the dark.", image: "https://images.unsplash.com/photo-1616423641454-da96366596e1?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "All 48MP cameras.", description: "Detailed images at every zoom.", image: "https://images.unsplash.com/photo-1534126511673-b6899157e84a?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Ultra Wide lens.", description: "Dramatic perspectives and macro.", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, title: "Action Mode.", description: "Smooth handheld video tech.", image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1000&auto=format&fit=crop" },
  { id: 5, title: "Cinematic 4K.", description: "Pro-level video in your pocket.", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop" },
];

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
          Pro results. <br />
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
            <div key={item.id} className="shrink-0 w-[80vw] md:w-1/2 snap-center group">
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="aspect-[9/16] w-full rounded-[3rem] md:rounded-md overflow-hidden bg-[#161617] relative"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

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