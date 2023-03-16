import React from 'react'
import GetScreenSize from '../../components/screenSize/getScreenSize';
//import Layout from '@client-layout';
import MoreResponsiveLayout from '../../plugins/client1/MoreResponsiveLayout';

function MisSolicitudes() {
  const screenSize = GetScreenSize();

  if (screenSize === 'xs') {
    return(
      <div>
      <h1>Mis solicitudes</h1>
      </div>
    );
  }
  return (
    <MoreResponsiveLayout>
        <div>
         <h1>Mis solicitudes</h1>
        </div>
    </MoreResponsiveLayout>
  )
}

export default MisSolicitudes
