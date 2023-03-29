import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Catalogo from '../pages/AtencionEInformacion/Catalogo'
import Quejas from '../pages/AtencionEInformacion/Quejas'
import Tablon from '../pages/AtencionEInformacion/Tablon'
import Verificacion from '../pages/AtencionEInformacion/Verificacion'
import MisDocumentos from '../pages/CarpetaCiudadana/MisDocumentos'
import MisExpedientes from '../pages/CarpetaCiudadana/MisExpedientes'
import MisNotificaciones from '../pages/CarpetaCiudadana/MisNotificaciones'
import MisSolicitudes from '../pages/CarpetaCiudadana/MisSolicitudes'
import DocumentsCheck from '../pages/DocumentsCheck'
import IndexPage from '../pages/IndexPage'
import LoginPage from '../pages/LoginPage'
import ServicesPage from '../pages/ServicesPage'


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