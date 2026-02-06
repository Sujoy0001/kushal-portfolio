import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Film, Code, Play, ExternalLink, Github, 
  Scissors, Monitor, Sparkles, Database,
  Cpu, Aperture, Layers, ArrowRight, X, Maximize2,
  User, Mail, Linkedin, Twitter, CheckCircle,
  Youtube, Instagram, Palette, Clock, Briefcase, TrendingUp, Globe,
  Sun, Moon, Mic, Music, Sliders, FileText, Award, Terminal, Send
} from 'lucide-react';

// --- UTILS ---
const lerp = (start, end, factor) => start + (end - start) * factor;

/**
 * GRAIN ENGINE
 */
const GlobalFilters = () => (
  <svg className="fixed w-0 h-0 pointer-events-none">
    <defs>
      <filter id="noiseFilter">
        <feTurbulence 
          type="fractalNoise" 
          baseFrequency="0.8" 
          numOctaves="3" 
          stitchTiles="stitch" 
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <filter id="liquidWarp">
        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
      </filter>
      {/* Chromatic Aberration Filter for Video Cards */}
      <filter id="chromatic">
        <feOffset in="SourceGraphic" dx="2" dy="0" result="red"/>
        <feOffset in="SourceGraphic" dx="-2" dy="0" result="blue"/>
        <feBlend mode="screen" in="red" in2="blue"/>
      </filter>
    </defs>
  </svg>
);

/**
 * MELT TRANSITION
 */
const MeltTransition = ({ isTransitioning }) => (
  <div 
    className={`fixed inset-0 z-[60] pointer-events-none transition-opacity duration-700 ease-in-out
      ${isTransitioning ? 'opacity-100' : 'opacity-0'}
    `}
    style={{
      backdropFilter: 'blur(20px) contrast(150%)',
      filter: 'url(#liquidWarp)',
      background: 'rgba(0,0,0,0.1)'
    }}
  />
);

/**
 * BACKGROUND ENGINE
 */
const DynamicBackground = ({ mode }) => {
  const isDark = true;

  return (
    <div className={`fixed inset-0 -z-10 transition-colors duration-1000 ${isDark ? 'bg-[#0a0510]' : 'bg-slate-50'}`}>
      <div 
        className={`absolute inset-0 bg-gradient-to-br transition-all duration-1000
          ${isDark 
            ? (mode === 'video' ? 'from-orange-950 via-purple-950 to-rose-950' : 'from-slate-950 via-cyan-950 to-indigo-950')
            : (mode === 'video' ? 'from-orange-50 via-rose-50 to-white' : 'from-blue-50 via-cyan-50 to-white')
          }
        `} 
      />
      <div 
        className={`absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[8000ms] transition-colors duration-1000
          ${isDark 
            ? (mode === 'video' ? 'bg-orange-500/20' : 'bg-cyan-500/20')
            : (mode === 'video' ? 'bg-orange-300/30' : 'bg-blue-300/30')
          }
        `} 
      />
      <div 
        className={`absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full blur-[120px] mix-blend-screen transition-colors duration-1000
          ${isDark
            ? (mode === 'video' ? 'bg-rose-500/20' : 'bg-blue-500/20')
            : (mode === 'video' ? 'bg-rose-300/30' : 'bg-cyan-300/30')
          }
        `} 
      />
      <div 
        className={`absolute inset-0 pointer-events-none mix-blend-overlay ${isDark ? 'opacity-[0.07]' : 'opacity-[0.4]'}`}
        style={{ filter: 'url(#noiseFilter)' }}
      />
    </div>
  );
};

/**
 * CONTACT SECTION
 */
const ContactSection = ({ mode }) => {
  const isDark = true;
  const isVideo = mode === 'video';

  const cardBg = isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white/40 shadow-xl';
  const textColor = isDark ? 'text-white' : 'text-slate-900';
  const subTextColor = isDark ? 'text-white/50' : 'text-slate-500';
  const inputBg = isDark ? 'bg-black/20 focus:bg-black/40' : 'bg-white border border-slate-200 focus:border-slate-400';
  const accentColor = isVideo ? 'text-orange-500' : 'text-cyan-500';
  const btnGradient = isVideo 
    ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:shadow-orange-500/20' 
    : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:shadow-cyan-500/20';

  return (
    <div className="max-w-5xl mx-auto px-6 mb-40 relative z-20">
      <div className={`relative rounded-[3rem] overflow-hidden border backdrop-blur-2xl transition-all duration-500 ${cardBg}`}>
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT */}
          <div className={`p-10 md:p-14 flex flex-col justify-between relative ${isDark ? 'bg-white/5' : 'bg-slate-50/50'}`}>
            <div className="space-y-6">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border ${isDark ? 'border-white/10 text-white/40' : 'border-slate-200 text-slate-400'}`}>
                <Mail size={12} /> Contact
              </div>
              <h2 className={`text-4xl md:text-5xl font-black tracking-tight leading-tight ${textColor}`}>
                Let's start a <br/>
                <span className={accentColor}>Project together.</span>
              </h2>
              <p className={`text-lg leading-relaxed max-w-sm ${subTextColor}`}>
                Have an idea? I'm currently available for freelance work.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'}`}>
                    <Mail size={18} className={subTextColor} />
                  </div>
                  <div>
                    <div className={`text-xs uppercase font-bold tracking-wider ${subTextColor}`}>Email Me</div>
                    <div className={`text-lg font-medium ${textColor}`}>hello@alexcreator.com</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                {[Linkedin, Twitter, Instagram, Github].map((Icon, i) => (
                  <a key={i} href="#" className={`p-3 rounded-xl border transition-all hover:scale-110 ${isDark ? 'border-white/10 hover:bg-white/10 text-white/60 hover:text-white' : 'border-slate-200 hover:bg-white text-slate-400 hover:text-slate-900'}`}>
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="p-10 md:p-14">
            <form className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className={`text-xs font-bold uppercase tracking-wider ml-1 ${subTextColor}`}>Name</label>
                    <input type="text" placeholder="John Doe" className={`w-full px-4 py-3 rounded-xl outline-none transition-all placeholder:text-white/20 ${inputBg} ${isDark ? 'text-white' : 'text-slate-900'}`} />
                  </div>
                  <div className="space-y-2">
                    <label className={`text-xs font-bold uppercase tracking-wider ml-1 ${subTextColor}`}>Email</label>
                    <input type="email" placeholder="john@example.com" className={`w-full px-4 py-3 rounded-xl outline-none transition-all placeholder:text-white/20 ${inputBg} ${isDark ? 'text-white' : 'text-slate-900'}`} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className={`text-xs font-bold uppercase tracking-wider ml-1 ${subTextColor}`}>Message</label>
                  <textarea rows={4} placeholder="Tell me about your project..." className={`w-full px-4 py-3 rounded-xl outline-none transition-all resize-none placeholder:text-white/20 ${inputBg} ${isDark ? 'text-white' : 'text-slate-900'}`} />
                </div>
              </div>
              <button className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 ${btnGradient}`}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * ABOUT ME SECTION
 */
const AboutMeSection = ({ mode }) => {
  const isDark = true;
  const Folder = Layers; 
  
  const content = {
    video: {
      title: "Visual Alchemist.",
      subtitle: "Crafting Rhythm from Chaos",
      desc: "I don't just cut footage; I orchestrate emotions. With a background in color science and sound design, I treat every frame as a canvas. My workflow mimics the pacing of music—building tension, releasing energy, and finding the perfect beat for every cut.",
      stats: [
        { label: "Hours Rendered", value: "10k+", icon: Clock },
        { label: "Commercials", value: "50+", icon: Briefcase },
        { label: "Awards", value: "12", icon: Award }
      ]
    },
    web: {
      title: "System Architect.",
      subtitle: "Building the Future Web",
      desc: "I bridge the gap between heavy engineering and fluid design. Obsessed with performance, accessibility, and clean architecture.",
      stats: [
        { label: "Commits", value: "8.5k", icon: Terminal },
        { label: "Projects", value: "100+", icon: Folder },
        { label: "Uptime", value: "99.9%", icon: TrendingUp }
      ]
    }
  };

  const current = mode === 'video' ? content.video : content.web;

  return (
    <div className="max-w-5xl mx-auto px-6 mb-32 relative group">
      <div className={`absolute inset-0 blur-3xl opacity-20 -z-10 rounded-full
         ${mode === 'video' ? 'bg-orange-500/30' : 'bg-cyan-500/30'}
      `} />

      <div className={`
        relative rounded-[2.5rem] p-8 md:p-12 overflow-hidden border shadow-2xl transition-all duration-500
        ${isDark 
          ? 'bg-white/5 border-white/10' 
          : 'bg-white/70 border-white/60 backdrop-blur-xl'
        }
      `}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border
              ${isDark ? 'bg-white/5 border-white/10 text-white/50' : 'bg-slate-100 border-slate-200 text-slate-500'}
            `}>
              <User size={12} /> About Me
            </div>
            <div>
              <h2 className={`text-4xl md:text-5xl font-black tracking-tight mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{current.title}</h2>
              <p className={`text-xl font-medium ${isDark ? 'text-white/60' : 'text-slate-500'}`}>{current.subtitle}</p>
            </div>
            <p className={`leading-relaxed text-lg ${isDark ? 'text-white/50' : 'text-slate-600'}`}>{current.desc}</p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all hover:scale-105 ${mode === 'video' ? 'bg-gradient-to-r from-orange-500 to-rose-500 text-white' : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'}`}>
                <FileText size={18} /> Download CV
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {current.stats.map((stat, i) => (
              <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl border transition-all hover:translate-x-2 ${isDark ? 'bg-black/20 border-white/5' : 'bg-white/50 border-slate-100'}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${isDark ? 'bg-white/10 text-white' : 'bg-white text-slate-900'}`}><stat.icon size={24} /></div>
                <div>
                  <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</div>
                  <div className={`text-xs uppercase tracking-wider font-semibold ${isDark ? 'text-white/40' : 'text-slate-400'}`}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * TILT CARD (Web Mode)
 */
const TiltCard = ({ title, category, icon: Icon, color, onClick, index }) => {
  const isDark = true;
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 20; 
    const rotateX = ((y / rect.height) - 0.5) * -20; 
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => setRotation({ x: 0, y: 0 });

  return (
    <div 
      className="sticky w-full max-w-4xl mx-auto"
      style={{ top: `${140 + index * 40}px`, marginBottom: '60px', zIndex: index }}
    >
      <div 
        ref={cardRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-[320px] rounded-[2rem] cursor-pointer animate-float-slow"
        style={{ perspective: '1000px', transformStyle: 'preserve-3d', animationDelay: `${index * 0.2}s` }}
      >
        <div 
          className={`absolute inset-0 rounded-[2rem] transition-transform duration-200 ease-out border overflow-hidden
            ${isDark ? 'border-white/10 bg-white/5' : 'border-white/60 bg-white/60'}
          `}
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            boxShadow: `${-rotation.y}px ${rotation.x}px 50px ${isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.1)'}`,
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className={`absolute inset-0 ${isDark ? 'bg-black/40' : 'bg-white/20'}`}>
             <div className={`absolute inset-0 bg-gradient-to-b ${color} ${isDark ? 'opacity-20' : 'opacity-10'} group-hover:opacity-40 transition-opacity duration-500`} />
          </div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, transparent 54%)', backgroundSize: '200% 200%', backgroundPosition: '100% 0' }} />
          <div className="relative h-full p-8 flex flex-col justify-between z-10" style={{ transform: 'translateZ(40px)' }}>
            <div className="flex justify-between items-start">
              <div className={`w-12 h-12 rounded-2xl backdrop-blur-md border flex items-center justify-center transition-transform group-hover:scale-110 ${isDark ? 'bg-white/5 border-white/10 text-white/80' : 'bg-white/50 border-white/20 text-slate-700'}`}>
                <Icon size={20} />
              </div>
              <div className={`px-3 py-1 rounded-full backdrop-blur-md border text-xs font-medium uppercase tracking-wider ${isDark ? 'bg-black/20 border-white/5 text-white/60' : 'bg-white/40 border-white/20 text-slate-600'}`}>
                {category}
              </div>
            </div>
            <div>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
              <div className={`flex items-center gap-2 text-sm transition-colors ${isDark ? 'text-white/50 group-hover:text-white/80' : 'text-slate-500 group-hover:text-slate-800'}`}>
                View Details <Maximize2 size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * ZOOM CARD COMPONENT (Updated: Active "Playing" State & Blur Fix)
 */
const ZoomCard = ({ project, z, yOffset, mode, onClick }) => {
  const isDark = true;
  const opacity = z < 100 ? 0.2 + (z / 100) * 0.8 : z > 900 ? 1 - (z - 900) / 100 : 1;
  const scale = 0.4 + (z / 1200) * 0.6; 
  
  // "Active" state is when card is close to the camera (sweet spot)
  const isActive = z > 800 && z < 1000;

  // FIX: Blur is 0 for anything close to camera (Z > 850), otherwise scales up with distance
  const blurRadius = z > 850 ? 0 : Math.max(0, (850 - z) / 40);
  
  if (z < 0 || opacity <= 0) return null;

  return (
    <div 
      className="absolute top-1/2 left-1/2 w-[85%] aspect-video rounded-xl cursor-pointer transition-colors duration-300 origin-center will-change-transform"
      style={{
        transform: `translate(-50%, calc(-50% + ${yOffset}px)) scale(${scale})`,
        opacity: opacity,
        zIndex: Math.floor(z),
        filter: `blur(${blurRadius}px)`,
      }}
      onClick={onClick}
    >
      <div 
        className={`w-full h-full rounded-xl overflow-hidden border shadow-2xl relative group transition-all duration-500
           ${isDark ? 'border-white/10 bg-white/5' : 'border-white/60 bg-white/60'}
           ${isActive ? 'ring-2 ring-orange-500/50 scale-[1.02]' : ''}
        `}
      >
        {/* Active Glow */}
        {isActive && (
          <div className="absolute inset-0 bg-orange-500/10 animate-pulse pointer-events-none" />
        )}

        {/* Play Icon */}
        {isActive && (
          <div className="absolute top-4 right-4 z-20 bg-red-600/90 text-white text-[10px] font-bold px-2 py-1 rounded animate-pulse shadow-lg flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full" /> REC
          </div>
        )}

        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <div className={`
             mb-4 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md shadow-lg transition-transform duration-500
             ${isDark ? 'bg-white/10 text-white' : 'bg-white text-slate-900'}
             ${isActive ? 'scale-110 bg-orange-500 text-white' : ''}
          `}>
             <project.icon size={24} />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">{project.category}</span>
          <h3 className={`text-2xl md:text-4xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
        </div>
      </div>
    </div>
  );
};

/**
 * INFINITE ZOOM PORTAL (Updated: Fixed Frame Alignment)
 */
const InfiniteZoomPortal = ({ mode, projects, onProjectSelect }) => {
  const isDark = true;
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);

  const landscapeFrame = "iP15ProMax no screen_Web.png";

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const offset = -rect.top;
        targetScroll.current = Math.max(0, offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    let rafId;
    const animate = () => {
      currentScroll.current = lerp(currentScroll.current, targetScroll.current, 0.05);
      setScrollProgress(currentScroll.current);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: '500vh' }} className="relative"> 
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-1000">
        
        <div className="relative z-20 transition-all duration-700 ease-in-out w-[98vw] md:w-[1300px] aspect-[19.5/9]">
           {/* FRAME IMAGE - On TOP */}
           <img 
             src={landscapeFrame}
             className="absolute inset-0 w-full h-full object-contain pointer-events-none z-50 drop-shadow-2xl"
             alt="Phone Frame"
           />
           
           {/* SCREEN CONTENT - Refined to match iPhone 15 Pro Max bezel width & curvature */}
           {/* Adjusted to fit perfectly behind the frame mask */}
           <div className="absolute bg-black overflow-hidden top-[2.1%] bottom-[2.1%] left-[2.5%] right-[2.5%] rounded-[42px] z-10">
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="relative w-full h-full perspective-1000">
                 
                 <div className={`absolute inset-0 opacity-50 bg-gradient-to-br 
                   ${isDark ? 'from-purple-900 to-black' : 'from-orange-100 to-white'}
                 `} />

                 <div className="absolute inset-0 animate-pulse opacity-20"
                      style={{
                        backgroundImage: `radial-gradient(${isDark ? 'white' : 'black'} 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        transform: `scale(${1 + (scrollProgress * 0.0005) % 0.5})` 
                      }}
                 />

                 {projects.map((project, i) => {
                   const spacing = 450;
                   const loopLength = projects.length * spacing;
                   const offset = i * spacing;
                   let rawZ = (scrollProgress + offset) % loopLength;
                   const visualZ = (rawZ / loopLength) * 1200;
                   const yOffset = -1 * ((1200 - visualZ) * 0.25);

                   return (
                     <ZoomCard 
                        key={project.id}
                        project={project}
                        z={visualZ}
                        yOffset={yOffset}
                        mode={mode}
                        onClick={() => onProjectSelect(project)}
                     />
                   );
                 })}

               </div>
               
               <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent z-40 flex flex-col justify-end pb-6 px-12">
                  <div className="flex justify-between items-end mb-2 text-white/50 text-[10px] font-mono">
                    <span>00:00:00:00</span>
                    <span className="text-orange-500 font-bold">
                        00:{Math.floor(scrollProgress/100).toString().padStart(2,'0')}:{Math.floor(scrollProgress%100).toString().padStart(2,'0')}
                    </span>
                    <span>END</span>
                  </div>
                  
                  <div className="relative h-12 w-full overflow-hidden flex gap-1 items-center opacity-80">
                     <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-500 z-50 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                     
                     <div className="flex gap-1 absolute top-2 bottom-2 left-1/2" 
                          style={{ transform: `translateX(${-scrollProgress * 0.5}px)` }}>
                        {Array.from({ length: 100 }).map((_, i) => (
                          <div key={i} 
                            className={`
                              rounded-sm border-l border-white/10
                              ${i % 2 === 0 ? 'bg-blue-600/40 w-16' : 'bg-purple-600/40 w-24'}
                              ${i % 5 === 0 ? 'bg-orange-600/40 w-12' : ''}
                            `} 
                          />
                        ))}
                     </div>
                  </div>
               </div>

             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const ModeSwitcher = ({ mode, setMode, onSwitch }) => {
  const isDark = true;
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]">
      <div className={`relative p-1 rounded-full border shadow-2xl backdrop-blur-xl w-[280px] h-[70px] flex items-center justify-between overflow-hidden
        ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-white/40'}
      `}>
        <div 
          className={`absolute top-1 bottom-1 w-[48%] rounded-full shadow-lg transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) z-0
            ${mode === 'video' ? 'left-1' : 'left-[51%]'}
          `}
          style={{
            background: isDark ? 'linear-gradient(180deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))' : 'linear-gradient(180deg, #fff, #f1f5f9)',
            backdropFilter: 'blur(10px)',
            borderTop: isDark ? '1px solid rgba(255,255,255,0.3)' : '1px solid white',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}
        />
        <button onClick={() => { setMode('video'); onSwitch(); }} className={`relative z-10 w-1/2 h-full flex items-center justify-center gap-2 transition-all duration-300 ${mode === 'video' ? (isDark ? 'text-white' : 'text-slate-900') : (isDark ? 'text-white/40' : 'text-slate-400')}`}>
          <Film size={20} strokeWidth={2.5} />
          <span className="text-sm font-semibold tracking-wide">Editor</span>
        </button>
        <button onClick={() => { setMode('web'); onSwitch(); }} className={`relative z-10 w-1/2 h-full flex items-center justify-center gap-2 transition-all duration-300 ${mode === 'web' ? (isDark ? 'text-white' : 'text-slate-900') : (isDark ? 'text-white/40' : 'text-slate-400')}`}>
          <Code size={20} strokeWidth={2.5} />
          <span className="text-sm font-semibold tracking-wide">Dev</span>
        </button>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  const isDark = true;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity animate-in fade-in" onClick={onClose} />
      <div 
        className={`relative w-full max-w-4xl border rounded-3xl overflow-hidden shadow-2xl transform transition-all animate-in zoom-in-95 duration-300
          ${isDark ? 'bg-black/40 border-white/10' : 'bg-white/80 border-white/40'}
        `}
      >
        <div className={`h-64 w-full bg-gradient-to-br ${project.color} relative`}>
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 transition-colors border border-white/10"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-6 left-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg">
                <project.icon size={20} className="text-white" />
              </div>
              <span className="text-white/80 font-medium tracking-wide uppercase text-sm">{project.category}</span>
            </div>
            <h2 className="text-4xl font-bold text-white">{project.title}</h2>
          </div>
        </div>
        <div className={`p-8 space-y-6 backdrop-blur-3xl ${isDark ? 'bg-black/20' : 'bg-white/40'}`}>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
            This project represents a deep dive into {project.category.toLowerCase()} workflows.
          </p>
          <div className="pt-6 flex gap-4">
            <button className={`flex-1 py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform ${isDark ? 'bg-white text-black' : 'bg-slate-900 text-white'}`}>
              Launch Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillBadge = ({ icon: Icon, label }) => (
  <div className={`px-4 py-2 rounded-full border backdrop-blur-sm flex items-center gap-2 text-sm transition-colors bg-white/5 border-white/10 text-white/80 hover:bg-white/10`}>
    <Icon size={14} />
    <span>{label}</span>
  </div>
);

// Icon Wrappers
const Zap = (props) => <Sparkles {...props} />;
const Layout = (props) => <Monitor {...props} />;

export default function MainData() {
  const [mode, setMode] = useState('video');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleModeSwitch = () => {
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const projects = {
    video: [
      { id: 1, title: "Neon Nights", category: "Documentary", icon: Film, color: "from-purple-500 to-black" },
      { id: 2, title: "Nike Air", category: "Commercial", icon: Zap, color: "from-orange-500 to-black" },
      { id: 3, title: "Travel Vlog", category: "Social Media", icon: Play, color: "from-rose-500 to-black" },
      { id: 7, title: "YouTube", category: "Channel", icon: Youtube, color: "from-red-600 to-black" },
      { id: 8, title: "Viral Reels", category: "Instagram", icon: Instagram, color: "from-pink-500 to-black" },
      { id: 10, title: "Latest Work", category: "Release", icon: Clock, color: "from-amber-500 to-black" },
    ],
    web: [
      { id: 4, title: "Fintech App", category: "Web App", icon: Database, color: "from-cyan-500 to-black" },
      { id: 5, title: "Luxury Shop", category: "Shopify", icon: Layout, color: "from-emerald-500 to-black" },
      { id: 6, title: "AI Gen", category: "SaaS", icon: Cpu, color: "from-blue-500 to-black" },
      { id: 12, title: "Open Source", category: "Community", icon: Github, color: "from-slate-500 to-black" },
      { id: 15, title: "Global CDN", category: "Infra", icon: Globe, color: "from-sky-500 to-black" }
    ]
  };

  const isDark = true;

  return (
    <div className={`min-h-screen font-sans selection:bg-white/20 text-slate-200`}>
      <GlobalFilters />
      <DynamicBackground mode={mode} />
      <MeltTransition isTransitioning={isTransitioning} />

      <main className="relative z-10">

        {/* HERO TITLE (Above Fold) */}
        <div className="pt-40 text-center space-y-6 mb-12 transition-opacity duration-500" style={{ opacity: isTransitioning ? 0 : 1 }}>
          <h1 className={`text-5xl md:text-7xl font-bold tracking-tight pb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40`}>
            {mode === 'video' ? 'Visual Storyteller.' : 'Full Stack Developer.'}
          </h1>
          <p className={`text-lg max-w-xl mx-auto text-white/50`}>
            Scroll to dive into the work.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {mode === 'video' ? (
              <>
                <SkillBadge icon={Scissors} label="Adobe Premiere" />
                <SkillBadge icon={Layers} label="After Effects" />
                <SkillBadge icon={Aperture} label="DaVinci Resolve" />
              </>
            ) : (
              <>
                <SkillBadge icon={Code} label="React.js" />
                <SkillBadge icon={Database} label="Node.js" />
                <SkillBadge icon={Cpu} label="WebGL" />
              </>
            )}
          </div>
        </div>

        {/* NEW: ABOUT ME SECTION */}
        <div className="transition-all duration-700" style={{ opacity: isTransitioning ? 0 : 1, transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)' }}>
          <AboutMeSection mode={mode} />
        </div>

        {/* CONTENT SWITCHER */}
        <div className="transition-all duration-700" style={{ opacity: isTransitioning ? 0 : 1 }}>
           {mode === 'video' ? (
             <InfiniteZoomPortal 
               mode={mode} 
               projects={projects.video}
               onProjectSelect={setSelectedProject}
             />
           ) : (
             <div className="pb-40">
                <div className="mb-12 flex items-center gap-4 max-w-4xl mx-auto px-6">
                   <div className={`h-px flex-1 bg-white/10`}></div>
                   <span className={`uppercase tracking-widest text-sm font-semibold text-white/40`}>Featured Projects</span>
                   <div className={`h-px flex-1 bg-white/10`}></div>
                </div>
                
                <section className="flex flex-col items-center">
                  {projects.web.map((p, index) => (
                    <TiltCard 
                      key={p.id}
                      index={index}
                      {...p}
                      onClick={() => setSelectedProject(p)}
                    />
                  ))}
                </section>
             </div>
           )}
        </div>

        {/* NEW: CONTACT SECTION */}
        <div className="transition-all duration-700" style={{ opacity: isTransitioning ? 0 : 1 }}>
          <ContactSection mode={mode} />
        </div>

      </main>

      <ModeSwitcher mode={mode} setMode={setMode} onSwitch={handleModeSwitch} />
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}