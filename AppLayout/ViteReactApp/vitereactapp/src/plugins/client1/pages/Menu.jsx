import React from 'react'
import NavMenu from '../../../components/Menu/NavMenu'
import { useNavigate } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();
  const updateRoute = (path) => {
    navigate(path);
  };
  return <NavMenu updateRoute={updateRoute} />;
}

export default Menu