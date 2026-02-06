import { useTheme } from "../context/ThemeContext";
import { FaCode } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";

export default function ModeToggle() {
  const { mode, setMode } = useTheme();

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-100">
        <div
            className="relative w-65 h-16.5 p-1 rounded-full flex items-center
            backdrop-blur-xl shadow-2xl overflow-hidden
            bg-neutral-900/90 border border-white/10"
        >

            <div
            className={`absolute top-1 left-1 h-14 w-31 rounded-full transition-all duration-500
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            ${mode === "video" ? "translate-x-0" : "translate-x-31"}`}
            style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0.04))",
                backdropFilter: "blur(12px)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), 0 10px 30px rgba(0,0,0,0.6)",
            }}
            />

            <button
                onClick={() => { setMode("video"); onSwitch(); }}
                className={`relative z-10 w-1/2 h-full italic font-semibold flex items-center justify-center gap-2 transition
                ${mode === "video" ? "text-white" : "text-white/40 cursor-pointer"}`}
            >
                <BsGridFill size={18} strokeWidth={2.5} />
                <span className="text-sm tracking-wide">Editor</span>
            </button>

            <button
                onClick={() => { setMode("web"); onSwitch(); }}
                className={`relative z-10 w-1/2 h-full italic font-semibold flex items-center justify-center gap-2 transition
                ${mode === "web" ? "text-white" : "text-white/40 cursor-pointer"}`}
            >
                <FaCode size={18} strokeWidth={2.5} />
                <span className="text-sm tracking-wide">Dev</span>
            </button>
        </div>
    </div>
  );
}
