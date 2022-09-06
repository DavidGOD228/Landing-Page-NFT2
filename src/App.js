import React from 'react'

import TopBlock from './components/sections/TopBlock/TopBlock'
import Privacy from './components/sections/Privacy/Privacy'
import FataMorgana from './components/sections/FataMorgana/FataMorgana'
import Footer from './components/sections/Footer/Footer'
import FirstLiveSimulator from './components/sections/FirstLiveSimulator/FirstLiveSimulator'
import LikeHuman from './components/sections/LikeHuman/LikeHuman'
import Freedom from './components/sections/Freedom/Freedom'
import Earn from './components/sections/Earn/Earn'
import YourMorph from './components/sections/YourMorph/YourMorph'

function App() {
  return (
    <>
      <TopBlock/>
      <FirstLiveSimulator/>
      <LikeHuman/>
      <Privacy/>
      <FataMorgana/>
      <Freedom/>
      <Earn/>
      <YourMorph/>
      <Footer/>
    </>
  )
}

export default App
