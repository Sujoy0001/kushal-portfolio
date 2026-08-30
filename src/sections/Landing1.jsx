import React from "react";
// import myimg from '../images/myimg.png';
import img1 from '../assets/img/kushal.png'

export default function Landing1() {
  return (
    <>
        <div className="relative min-h-screen bg-color w-full flex items-center justify-center overflow-hidden px-8">

            <div className="flex flex-col items-center text-center gap-2 p-6 mb-56 md:mb-0">
                <div className="w-full sujoy1 flex flex-col lg:flex-row justify-between items-start text-left lg:items-center lg:max-w-7xl z-15">
                <h2 className="text-amber-700 text-4xl">Visual Storyteller.</h2>
                <h2 className="text-yellow-600 text-4xl">Portfolio</h2>
                </div>

                <div className="sujoy2 leg text-6xl text-white hidden lg:block">KUSHAL ROY</div>
                <div className="sujoy2 text-[15vh] md:text-[25vh] md:mb-40 text-white lg:hidden">KUSHAL ROY</div>

                <div className="w-full sujoy1 flex justify-end items-center max-w-7xl z-15">
                    <h2 className="text-lime-500 text-4xl sujoy1">Cinematographer & Editor</h2>
                </div>
            </div>

            <div className="absolute inset-0 bottom-0 h-full flex items-end justify-center z-5 pointer-events-none shadow-lg animate-float">
                <img
                src={img1}
                alt="Kushal Roy"
                className="w-full max-w-lg"
                />
            </div>
            {/* <div className="absolute bottom-0 left-0 w-full h-2/3 bg-linear-to-b from-transparent via-amber-00/20 to-neutral-900 z-10"></div> */}
        </div>
    </>
  );
}
