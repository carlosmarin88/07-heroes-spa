import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeoroesApp } from './HeoroesApp'
import { BrowserRouter } from "react-router-dom"
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <HeoroesApp />
    </BrowserRouter>
  </React.StrictMode>,
)
