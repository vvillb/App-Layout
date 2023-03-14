import React from 'react'
import Layout from '@client-layout';
import Drawer from 'devextreme-react/drawer';
import {useTranslation} from 'react-i18next'

function DocumentsCheck() {
  const{t,i18n}=useTranslation('common');
  return (
  
  //<Layout>
    <div>
      <h1>Carpeta ciudadana</h1>
      <h1>{t('documents.nombre')}</h1>
      <h2>{t('common.test')}</h2>
      <h3>{t('docuements.client',{ns:'client'})}</h3>
    </div>
  //</Layout>
  )
}

export default DocumentsCheck;
