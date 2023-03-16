import React from 'react'
//import Layout from '@client-layout';
//import Drawer from 'devextreme-react/drawer';
import {useTranslation} from 'react-i18next'
import GetScreenSize from '../components/screenSize/getScreenSize';
import MoreResponsiveLayout from '../plugins/client1/MoreResponsiveLayout';

function DocumentsCheck() {
  const{t}=useTranslation('common');
  const screenSize = GetScreenSize();

  if (screenSize === 'xs') {
    return(
      <div>
             <h1>{t('documents.nombre')}</h1>
            <h2>{t('common.test')}</h2>
            <h3>{t('documents.client',{ns:'client'})}</h3>
    </div>
    );
  }
  return (
  
 <MoreResponsiveLayout>
    <div>
             <h1>{t('documents.nombre')}</h1>
            <h2>{t('common.test')}</h2>
            <h3>{t('documents.client',{ns:'client'})}</h3>
    </div>
 </MoreResponsiveLayout>
  )
}

export default DocumentsCheck;
