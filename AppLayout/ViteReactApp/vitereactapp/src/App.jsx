import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import AppRouter from './router/AppRouter'
import GetScreenSize from './assets/elements/Menu/GetScreenSize'

function App() {
  return (
    <>
    
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
      
    </>
    
  )
}

export default App
