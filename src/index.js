import React from 'react'
import ReactDOM from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax'
import { BrowserRouter } from "react-router-dom";
import App from './App'

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
     <ParallaxProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
     </ParallaxProvider>
  </React.StrictMode>
)
