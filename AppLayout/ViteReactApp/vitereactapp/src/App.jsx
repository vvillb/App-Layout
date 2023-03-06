import React, {lazy, Suspense} from 'react'
import Layout from './plugins/client2/Layout'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout/>}/> 
    </Routes>
    </BrowserRouter>
      
    </>
    
  )
}

export default App
