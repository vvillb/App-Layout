import React from 'react'
import Breadcrumbs from 'devextreme-react/breadcrumbs';

function Migas() {
    return(
    <div>
      <Breadcrumbs
        items={[
          { text: 'Home', href: '#' },
          { text: 'Products', href: '#' },
          { text: 'Mobile Phones', href: '#' },
          { text: 'Apple', href: '#' },
          { text: 'iPhone 13 Pro Max', href: '#' },
        ]}
      />
      // other content of your page
    </div>
  )
}

export default Migas
