import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Layout from './plugins/client1/Layout'
import NavigationDrawer from './components/Menu/DrawerMenu/NavigationDrawer'
import AppRouter from './router/AppRouter'
import Parent from './plugins/client1/Parent'
import MoreResponsiveLayout from './plugins/client1/MoreResponsiveLayout'


function App() {

  return (
    <>
    <BrowserRouter>
            <NavigationDrawer/>
            <AppRouter/>
        
    </BrowserRouter>
    </>
  )
}
export default App
