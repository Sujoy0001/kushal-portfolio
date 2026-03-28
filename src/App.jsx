import React from 'react'
import './App.css'
import Landing1 from './sections/Landing1'
import About from './sections/About'
import MainData from './sections/Main'
import VideoSection from './sections/Video'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Reel from './sections/Reel'
import PortraitVideoEditor from './sections/mobile'
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <>
      <div>
        <Landing1 />
        <About />
        <div className="hidden lg:block">
         <VideoSection />
        </div>
        <div className="lg:hidden">
          <PortraitVideoEditor />
        </div>
        <Reel />
        <Skills />
        <Contact />
        {/* <MainData /> */}
      </div>
      <Analytics />
    </>
  )
}

export default App
