import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from '../plugins/client2/Layout'

function AppRouter() {
  return (
    <Routes>
    <Route path='/' element={<Layout/>}/> 
    </Routes>
  )
}

export default AppRouter
