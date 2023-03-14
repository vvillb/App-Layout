import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Layout from './plugins/client1/Layout'
import NavigationDrawer from './plugins/client1/pages/navigation/NavigationDrawer'


function App() {
  return (
    <>
    <BrowserRouter>
      <Layout>
        <NavigationDrawer/>
      </Layout>
    </BrowserRouter>
    </>
  )
}
export default App
