import React from "react";

export default function Footer() {
    return (
        <footer className="h-auto w-full bg-[#111111] text-neutral-200 overflow-hidden">

            <div className="max-w-7xl mx-auto flex justify-between items-start py-8">
                <span className="text-xl sujoy1 tracking-widest uppercase text-neutral-400">Portfolio</span>

                <nav className="flex gap-8 text-md uppercase tracking-wider text-neutral-400">
                    <a href="#" className="hover:text-white transition">Home</a>
                    <a href="#" className="hover:text-white transition">About</a>
                    <a href="#" className="hover:text-white transition">Project</a>
                    <a href="#" className="hover:text-white transition">Contact</a>
                </nav>
            </div>

            <div className="-bottom-2 w-full text-center pointer-events-none">
                <h1 className="text-[16vw] font-black leading-none tracking-tight text-neutral-100 opacity-90">
                    Kush.prods
                </h1>
            </div>

        </footer>
    );
}