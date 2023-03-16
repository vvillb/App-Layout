import React from 'react'
//import Layout from '@client-layout';
import MoreResponsiveLayout from '../plugins/client1/MoreResponsiveLayout';
import GetScreenSize from '../components/screenSize/getScreenSize';

function LoginPage() {
  const screenSize = GetScreenSize();

  if (screenSize === 'xs') {
    return(
      <div>
      <h1>Inicio</h1>
      </div>
    );
  }
  return (
    <MoreResponsiveLayout>
      <div>
      <h1>Inicio</h1>
    </div>
    </MoreResponsiveLayout>  
  )
}

export default LoginPage;
