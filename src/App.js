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
import Personalize from './components/sections/Personalize/Personalize'
import MorphId from './components/sections/MorphID/MorphID'
import MorphsUnique from './components/sections/MorphsUnique/MorphsUnique'
import Wizard from './components/sections/Wizard/Wizard'
import Foto from './components/sections/Foto/Foto'
import CombinedGame from './components/sections/CombinedGame/CombinedGame'
import Roadmap from './components/sections/Roadmap/Roadmap'
import TypesCards from './components/sections/TypesCards/TypesCards'
import {useWindowWidth} from "./hooks/useWindowWidth";

function App() {
  const isDesktop = useWindowWidth(1024)

  return (
    <>
      <TopBlock/>
      <FirstLiveSimulator/>
      <LikeHuman/>
      {
        !isDesktop && <Privacy/>
      }
      <FataMorgana/>
      <Freedom/>
      <Personalize/>
      <Earn/>
      <MorphId/>
      <TypesCards/>
      <YourMorph/>
      <MorphsUnique/>
      <Roadmap/>
      <Wizard/>
      <Foto/>
      <CombinedGame/>
      <Footer/>
    </>
  )
}

export default App
