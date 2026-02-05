import './App.css'
import myimg from './images/myimg.png'

function App() {
  return (
    <>
      <div className="relative min-h-[90vh] w-full flex items-center justify-center bg-amber-200 overflow-hidden">

        <div className="z-0 flex flex-col items-center text-center">
          <div className="w-full sujoy1 flex justify-between items-center max-w-7xl">
            <h2 className="text-white text-4xl">Visual Storyteller.</h2>
            <h2 className="text-white text-4xl">Kushal Roy</h2>
          </div>

          <div className="sujoy2 leg text-4xl text-white">PORTFOLIO</div>

          <div className="w-full sujoy1 flex justify-end items-center max-w-7xl">
            <h2 className="text-white text-4xl sujoy1">Photo & Video Editor</h2>
          </div>
        </div>

        <div className="absolute inset-0 bottom-0 h-full flex items-end justify-center z-10 pointer-events-none shadow-lg animate-float">
          <img
            src={myimg}
            alt="Kushal Roy"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </>
  )
}

export default App
