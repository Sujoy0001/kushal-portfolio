import React from "react";
import myimg from '../images/myimg.png';

export default function Landing1() {
  return (
    <>
        <div className="relative min-h-screen w-full flex items-center justify-center bg-amber-200 overflow-hidden">

            <div className="flex flex-col items-center text-center gap-2">
                <div className="w-full sujoy1 flex justify-between items-center max-w-7xl z-15">
                <h2 className="text-amber-800 text-4xl">Visual Storyteller.</h2>
                <h2 className="text-green-950 text-4xl">Kushal Roy</h2>
                </div>

                <div className="sujoy2 leg text-4xl text-white">PORTFOLIO</div>

                <div className="w-full sujoy1 flex justify-end items-center max-w-7xl z-15">
                    <h2 className="text-zinc-900 text-4xl sujoy1">Photo & Video Editor</h2>
                </div>
            </div>

            <div className="absolute inset-0 bottom-0 h-full flex items-end justify-center z-5 pointer-events-none shadow-lg animate-float">
                <img
                src={myimg}
                alt="Kushal Roy"
                className="w-full max-w-lg"
                />
            </div>
            {/* <div className="absolute bottom-0 left-0 w-full h-2/3 bg-linear-to-b from-transparent via-amber-00/20 to-neutral-900 z-10"></div> */}
        </div>
    </>
  );
}