import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full fixed top-4 left-0 z-50">
      <div className="max-w-md mx-auto px-4">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-7 py-5 flex items-center justify-between shadow-lg hover:scale-105 transition-transform duration-500">

          {/* <h2 className="text-amber-900 text-2xl sujoy1 italic tracking-wider lowercase">
            kush.pords
          </h2> */}

          <div className="flex items-center gap-4 text-white/70">
            <a href="#" className="hover:text-blue-500 transition">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="hover:text-zinc-700 transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <BsInstagram size={18} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <FaEnvelope size={18} />
            </a>
          </div>

          <button className="w-auto px-6 py-3 sujoy1 cursor-pointer rounded-full bg-white/10 backdrop-blur-md border border-white/30">
            <a href="mailto:sujoygarai89@gmail.com" className="flex items-center justify-center">
              <span className="text-xs text-white/70">Contact</span>
              <ArrowRight className="ml-2 text-white/70" size={12} />
            </a>
          </button>

        </div>
      </div>
    </header>
  );
}
