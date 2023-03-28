import React from 'react'
import Layout from '@client-layout';
import {useTranslation} from 'react-i18next'

function DocumentsCheck() {
  const{t}=useTranslation('common');

  return (
  <Layout>
    <div>
        <h1>Consulta de documentos</h1>
        <h1>{t('documents.nombre')}</h1>
        <h2>{t('common.test')}</h2>
        <h3>{t('documents.client',{ns:'client'})}</h3>
    </div>
  </Layout>
  )
}

export default DocumentsCheck;
