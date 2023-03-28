import React, { useCallback, useEffect, useState } from 'react'
import Menu, { Item } from 'devextreme-react/menu';
import useScreenSize from '../../../hooks/useScreenSize'
import { Link } from 'react-router-dom';
import products from '../NavMenu/Data.jsx'


function MenuItem() {
    //const[click,setClick]=useState(false)
    const toggle=true;
    //const handleClick=()=>setClick(!click)
    //const closeSubMenu=()=>setClick(false)

/*     const renderItem = (data) => {
        console.log(data)
        return (
            <div className="px-6 font-sans text-base font-semibold flex items-center justify-center">
                <span>
                    {data.text}
                </span>
                <i className='dx-icon-spindown ml-2'/>
            </div>
        )
    } */
   
    return (
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
    );
}

export default MenuItem
