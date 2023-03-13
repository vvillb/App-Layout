import React from 'react'

import { useTranslation } from "react-i18next";

function Header() {
  const { t  } = useTranslation();
  return (
    <div>
      <h1>Header cliente 1</h1>
      <ul>
      <li>{t('save')}</li>
        <li>{t('cancel')}</li>
        <li>{t('delete')}</li>
        <li>{t('error')}</li>
      </ul>
    </div>
  )
}

export default Header;