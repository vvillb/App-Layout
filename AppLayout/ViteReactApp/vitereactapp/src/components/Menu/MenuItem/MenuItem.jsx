import React, { useCallback, useEffect, useState } from 'react'
import 'devextreme/dist/css/dx.light.css';
import Menu, { Item } from 'devextreme-react/menu';
import useScreenSize from '../../../hooks/useScreenSize'
import { Link } from 'react-router-dom';
import products from '../NavMenu/Data.jsx'


function MenuItem() {
    //const[click,setClick]=useState(false)
    const toggle=true;
    //const handleClick=()=>setClick(!click)
    //const closeSubMenu=()=>setClick(false)
   
    return (
        
        
        <div>
            <div id="container">
                <Menu  
                   // onItemClick={handleClick}
                    adaptivityEnabled={toggle}
                    >
                    {products.map((item) => (
                        <Item key={item.id} text={item.name} path={item.path} icon={item.icon}>
                        {item.subItems && item.subItems.map((subItem) => (
                        <Item key={subItem.id} text={subItem.name} path={subItem.path} icon={subItem.icon} />
                        ))}
                        </Item>
                    ))}
                   
                </Menu>
            </div>
       
        </div>
    );
}

export default MenuItem
