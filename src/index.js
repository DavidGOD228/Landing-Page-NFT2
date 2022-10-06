import React from 'react'
import ReactDOM from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax'

import App from './App'

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <ParallaxProvider> */}
      <App />
    {/* </ParallaxProvider> */}
  </React.StrictMode>
)
