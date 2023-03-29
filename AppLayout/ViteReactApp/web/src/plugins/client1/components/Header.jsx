import React from 'react'

function Header() {

  const style = {
    backgroundImage: "url('/imgs/background.jpg')"
  }

  return (
    <header>
      <div className="relative">

          <div className="absolute inset-0" style={style}></div>

           <div className="w-full">
            
              <div className="relative z-1 h-32 mx-auto px-5 max-w-7xl flex items-center justify-between">

                 {/*  <a className="textHeader" href="/">Entidad 1</a>

                  <ul className="flex items-center gap-5">
                      <li><a className="linkHeader" href="">Link 1</a></li>
                      <li><a className="linkHeader" href="">Link 2</a></li>
                      <li><a className="linkHeader" href="">Link 3</a></li>
                  </ul> */}
              </div>
          </div> 
      </div>
    </header>
  )
}

export default Header