import React from 'react'
import { Button } from 'devextreme-react/button';
import { TextBox } from 'devextreme-react/text-box';

function Footer() {
  return (
  <footer className="dx-theme-border-color-as-background-color">
    <div className="container px-5 pt-3 mx-auto">
      <div className="flex flex-wrap md:text-left text-center order-first">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h4 className="mb-3">CATEGORIES</h4>
          <nav className="list-none mb-10">
            <li>
              <a className='dx-theme-text-color'>First Link</a>
            </li>
            <li>
              <a className='dx-theme-text-color'>Second Link</a>
            </li>
            <li>
              <a className='dx-theme-text-color'>Third Link</a>
            </li>
            <li>
              <a className='dx-theme-text-color'>Fourth Link</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h4 className="mb-3">CATEGORIES</h4>
          <nav className="list-none mb-10">
            <li>
              <a className='dx-theme-text-color'>First Link</a>
            </li>
            <li>
              <a className='dx-theme-text-color'>Second Link</a>
            </li>
            <li>
              <a className='dx-theme-text-color'>Third Link</a>
            </li>
            <li>
              <a className='dx-theme-text-color'>Fourth Link</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h4 className="mb-3">CATEGORIES</h4>
          <nav className="list-none mb-10">
            <li>
              <a className='dx-theme-text-color'>First Link</a>
            </li>
            <li>
              <a className='dx-theme-text-color'>Second Link</a>
            </li>
            <li>
              <a className='dx-theme-text-color'>Third Link</a>
            </li>
            <li>
              <a className='dx-theme-text-color'>Fourth Link</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h4 className="mb-3">SUBSCRIBE</h4>
          <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              <label htmlFor="footer-field" className="leading-7 text-sm">Placeholder</label>
              {/* <input type="text" id="footer-field" name="footer-field" className="w-full rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/> */}
              <TextBox placeholder='Email'/>
            </div>
            {/* <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex border-0 py-2 px-6 focus:outline-none  rounded">Button</button> */}
            <Button text="Login" className='lg:mt-4 px-6' type='default'/>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;