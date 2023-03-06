import React from 'react'
import {Routes, Route} from 'react-router-dom'
import DocumentsCheck from '../pages/DocumentsCheck'
import IndexPage from '../pages/IndexPage'
import LoginPage from '../pages/LoginPage'
import ServicesPage from '../pages/ServicesPage'
import Layout from '../plugins/client1/Layout'

function AppRouter() {
  return (
    <Layout>
        <Routes>
            <Route path='/docu' element={<DocumentsCheck/>}/> 
            <Route path='/index' element={<IndexPage/>}/> 
            <Route path='/login' element={<LoginPage/>}/> 
            <Route path='/services' element={<ServicesPage/>}/> 
        </Routes>
    </Layout>
  )
}

export default AppRouter
