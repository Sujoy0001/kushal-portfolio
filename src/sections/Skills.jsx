import React from 'react';
import { motion } from 'framer-motion';
import dn from '../assets/img/DaVinci.png';
import cp from '../assets/img/capcut.png';
import pp from '../assets/img/pp.png';
import canva from '../assets/img/canva.png';

const Skills = () => {
  const skills = [
    "Intermediate Colorist and Editor", "Basic Motion Graphics", "Sound Designer", "Video Editor", "Photo Editor", "Content Creator", "Visual Storyteller", "Creative Collaborator", "Problem Solver", "Adaptable Learner"
  ];

  const softwareIcons = [
    { name: "Davinci Resolve", url: dn },
    { name: "CapCut PC", url: cp },
    { name: "premiere pro", url: pp },
    { name: "Canva", url: canva },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#001d3d] text-white flex flex-col items-center py-12 px-6 overflow-hidden">
      
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start mb-14">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold leading-none mb-4 tracking-tighter"
          >
            ALL YOUR <br />
            <span className="italic font-medium serif text-5xl md:text-7xl">design needs</span>
          </motion.h1>
        </div>

        <div className="mt-8 md:mt-0 md:text-right">
          <p className="text-sm md:text-base sujoy1 opacity-90 max-w-[250px] mb-6 leading-relaxed">
            All types of services in one place with the assurance of highest excellence and usability.
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl flex flex-wrap justify-center gap-10 mb-20">
        {softwareIcons.map((sw, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="w-auto h-24 bg-white/10 cursor-pointer backdrop-blur-md rounded-2xl p-3 flex items-center justify-center border border-white/20 shadow-xl"
          >
            <img src={sw.url} alt={sw.name} className="w-full h-full object-contain brightness-110" />
          </motion.div>
        ))}
      </div>

      <div className="relative w-full max-w-5xl flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="px-8 py-4 text-amber-200 rounded-full border border-zinc-200 text-lg font-medium shadow-lg cursor-pointer transition-colors duration-300 glass"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;