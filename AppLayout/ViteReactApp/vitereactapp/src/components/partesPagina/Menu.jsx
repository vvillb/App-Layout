import React from 'react'
import NavMenu from '../Menu/NavMenu/NavMenu'
import { useNavigate } from 'react-router-dom';
import MenuItem from '../Menu/MenuItem/MenuItem';


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
    <MenuItem/>
  )
}


export default Menu