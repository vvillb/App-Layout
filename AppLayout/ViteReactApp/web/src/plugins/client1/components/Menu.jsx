import React from 'react'
import NavMenu from '../../../components/Menu/NavMenu/NavMenu'
import { useNavigate } from 'react-router-dom';
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


function Menu(props) {
  return (
    <div className='sm:flex sm:justify-center'>
    <MenuItem orientation={props.orientation} />
    </div>
  )
}


export default Menu