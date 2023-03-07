import React from 'react'
import {Routes, Route} from 'react-router-dom'
import DocumentsCheck from '../pages/DocumentsCheck'
import IndexPage from '../pages/IndexPage'
import LoginPage from '../pages/LoginPage'
import ServicesPage from '../pages/ServicesPage'

function AppRouter() {
  return (
        <Routes>
            <Route path='/docu' element={<DocumentsCheck/>}/> 
            <Route path='/index' element={<IndexPage/>}/> 
            <Route path='/' element={<LoginPage/>}/> 
            <Route path='/services' element={<ServicesPage/>}/> 
        </Routes>
  )
}

export default AppRouter
