import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Layout from './plugins/client1/Layout'
import NavigationDrawer from './components/Menu/DrawerMenu/NavigationDrawer'
import AppRouter from './router/AppRouter'


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
