import React from 'react'
import Layout from '@client-layout';
import { Button } from 'devextreme-react/button';
import { TextBox } from 'devextreme-react/text-box';

function LoginPage() {
  return (
    <Layout>

        <div className="relative py-3 sm:w-96 mx-auto text-center">
          <span className="text-2xl font-light ">Login to your account</span>
          <div className="mt-4 text-left dx-card">
            <div className="h-2 dx-theme-accent-as-background-color rounded-t-md"></div>
            <div className="px-8 py-6 dx-theme-border-color-as-background-color">
              <label className="block"> Usuario </label>
              {/* <input type="text" placeholder="Email" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"/> */}
              <TextBox placeholder='Email' className="dx-field"/>
              <label className="block mt-3"> Contraseña </label>
              <TextBox type="password" placeholder="Password" className="dx-field"/>
                <div className="flex justify-between items-baseline">
                  {/* <button type="submit" className="mt-4 bg-slate-500 text-white py-2 px-6 rounded-md hover:bg-slate-600 ">Login</button> */}
                  <Button text="Login" className='mt-4 px-6' type='default'/>
                  <a href="#" className="text-sm hover:underline">Contraseña olvidada?</a>
                </div>
            </div>
      
        </div>
      </div>

    </Layout>    
  )
}

export default LoginPage;
