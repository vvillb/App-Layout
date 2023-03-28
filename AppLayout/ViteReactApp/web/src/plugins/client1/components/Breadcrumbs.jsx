import React from 'react'


function Breadcrumbs() {
  return (

<nav className="w-full pl-32 py-2 dx-theme-as-background-color">
  <ol className="list-reset flex">
    <li>
      <a
        href="/"
        className="transition duration-150 ease-in-out dx-theme-text-color"
        >Sede Electrónica</a
      >
    </li>
    <li>
      <span className="mx-2">/</span>
    </li>
    <li>
     <span className='font-semibold'>Inicio</span>
    
    </li>
   {/*  <li>
      <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
    </li>
    <li className="text-neutral-500 dark:text-neutral-400">Data</li> */}
  </ol>
</nav>

    
  )
}

export default Breadcrumbs