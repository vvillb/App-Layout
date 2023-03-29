import React from 'react'

function Header() {

  const style = {
    backgroundImage: "url('/imgs/background.jpg')"
  }

  return (
    <header>

<div className="dx-theme-border-color-as-background-color">
    <div className="container px-5 py-1 mx-auto flex items-center sm:flex-row flex-col ">
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a>
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
       
      </span>
    </div>
  </div>

    <div className="relative">

        <div className="absolute inset-0" style={style}></div>

        <div className="w-full">
          
            <div className="relative z-1 h-32 mx-auto px-5 max-w-7xl flex items-center justify-between">

                <a className="textHeader" href="/">Entidad 2</a>

                <ul className="flex items-center gap-5">
                    <li><a className="linkHeader" href="">Link 1</a></li>
                    <li><a className="linkHeader" href="">Link 2</a></li>
                    <li><a className="linkHeader" href="">Link 3</a></li>
                </ul>
            </div>
        </div>
    </div>
    </header>
  )
}

export default Header