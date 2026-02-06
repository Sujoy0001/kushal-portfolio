import React from 'react';
import { motion } from 'framer-motion';
import { FaBehance, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer className="w-full bg-[#111111] text-[#F5F5F5] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl sujoy1 font-bold tracking-tighter mb-20 text-center md:text-left"
        >
          Contact me
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Left Column: Contact Data from image_902be9 & image_903746 */}
          <div className="flex flex-col justify-between space-y-12">
            <div className="space-y-8 text-left">
              <div>
                <p className="text-amber-500 text-xs uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:contact@studio.com" className="text-2xl md:text-4xl font-semibold hover:text-blue-500 transition-colors">
                  contact@studio.com
                </a>
              </div>

              <div>
                <p className="text-amber-500 text-xs uppercase tracking-widest mb-2">Phone</p>
                <p className="text-2xl md:text-4xl font-semibold">(+48) 762 864 075</p>
              </div>

              <div className="flex gap-6 text-2xl">
                <FaBehance className="cursor-pointer hover:text-blue-500 transition-all" />
                <FaInstagram className="cursor-pointer hover:text-blue-500 transition-all" />
                <FaFacebookF className="cursor-pointer hover:text-blue-500 transition-all" />
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <form className="space-y-8 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-bold">First Name (required)</label>
                  <input type="text" className="w-full bg-transparent border-b border-zinc-700 py-3 focus:border-white outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-bold">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-zinc-700 py-3 focus:border-white outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-bold">Email (required)</label>
                <input type="email" className="w-full bg-transparent border-b border-zinc-700 py-3 focus:border-white outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-bold">Message (required)</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-zinc-700 py-3 focus:border-white outline-none transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="bg-[#F5F5F5] text-black font-black uppercase tracking-widest px-12 py-4 hover:bg-blue-600 hover:text-white transition-all">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;