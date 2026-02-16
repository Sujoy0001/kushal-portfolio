import React from 'react'
import './App.css'
import Landing1 from './sections/Landing1'
import About from './sections/About'
import MainData from './sections/Main'
import VideoSection from './sections/Video'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Reel from './sections/Reel'

function App() {
  return (
    <>
      <div>
        <Landing1 />
        <About />
        <VideoSection />
        <Reel />
        <Skills />
        <Contact />
        {/* <MainData /> */}
      </div>
    </>
  )
}

export default App
