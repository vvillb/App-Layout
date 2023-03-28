import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './router/AppRouter'
import 'devextreme/dist/css/dx.common.css';



// ===== or when using modules =====
/* import themes from "devextreme/ui/themes";
 
themes.current(window.localStorage.getItem("dx-theme") || "material.blue.light"); */


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
