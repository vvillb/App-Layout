import React from 'react'
import MenuItem from '../../../components/Menu/MenuItem/MenuItem';


/*
function Menu() {
  const navigate = useNavigate();
  const updateRoute = (path) => {
    navigate(path);
  };
  return <NavMenu updateRoute={updateRoute} />;
}
*/


function Menu() {
  return (
    <div className='sm:flex sm:justify-center dx-theme-border-color-as-background-color dx-theme-accent-as-text-color'>
    <MenuItem/>
    </div>
  )
}


export default Menu