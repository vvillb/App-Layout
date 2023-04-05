import React from 'react'
import Layout from '@client-layout';
import {GetPost } from '../../models/components/GetPost'

function Quejas() {

    return (
      <Layout>
          <div>
         <h1>Quejas y sugerencias</h1>
         <GetPost/>
        </div>
      </Layout>
    )
  }
  
  export default Quejas;
  