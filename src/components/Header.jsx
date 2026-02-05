import { FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-2 z-50 w-full glass sujoy1 flex justify-between items-center max-w-7xl mx-auto rounded-full px-8 py-4">
      
      {/* Left Brand */}
      <h2 className="text-white text-4xl tracking-wide">
        Kush.prods
      </h2>

      {/* Right Social Icons */}
      <div className="flex gap-6 text-white text-xl">
        <a href="https://linkedin.com" target="_blank" className="hover:text-cyan-400 transition">
          <FaLinkedinIn />
        </a>
        <a href="https://twitter.com" target="_blank" className="hover:text-sky-400 transition">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" className="hover:text-pink-400 transition">
          <FaInstagram />
        </a>
        <a href="mailto:your@email.com" className="hover:text-red-400 transition">
          <FaEnvelope />
        </a>
      </div>

    </header>
  );
}
