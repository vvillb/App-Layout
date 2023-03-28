import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Catalogo from '../components/pages/AtencionEInformacion/Catalogo'
import Quejas from '../components/pages/AtencionEInformacion/Quejas'
import Tablon from '../components/pages/AtencionEInformacion/Tablon'
import Verificacion from '../components/pages/AtencionEInformacion/Verificacion'
import MisDocumentos from '../components/pages/CarpetaCiudadana/MisDocumentos'
import MisExpedientes from '../components/pages/CarpetaCiudadana/MisExpedientes'
import MisNotificaciones from '../components/pages/CarpetaCiudadana/MisNotificaciones'
import MisSolicitudes from '../components/pages/CarpetaCiudadana/MisSolicitudes'
import DocumentsCheck from '../components/pages/DocumentsCheck'
import IndexPage from '../components/pages/IndexPage'
import LoginPage from '../components/pages/LoginPage'
import ServicesPage from '../components/pages/ServicesPage'


function AppRouter() {
  return (
        <Routes>
            <Route path='/docu' element={<DocumentsCheck/>}/> 
            <Route path='/index' element={<IndexPage/>}/> 
            <Route path='*' element={<LoginPage/>}/> 
            <Route path='/services' element={<ServicesPage/>}/> 
            <Route path='/AtencionEInformacion/Catalogo' element={<Catalogo/>}/>
            <Route path='/AtencionEInformacion/Quejas' element={<Quejas/>}/>
            <Route path='/AtencionEInformacion/Tablon' element={<Tablon/>}/>
            <Route path='/AtencionEInformacion/Verificacion' element={<Verificacion/>}/>
            <Route path='/CarpetaCiudadana/MisDocumentos' element={<MisDocumentos/>}/>
            <Route path='/CarpetaCiudadana/MisExpedientes' element={<MisExpedientes/>}/>
            <Route path='/CarpetaCiudadana/MisNotificaciones' element={<MisNotificaciones/>}/>
            <Route path='/CarpetaCiudadana/MisSolicitudes' element={<MisSolicitudes/>}/>
        </Routes>
  )
}

export default AppRouter