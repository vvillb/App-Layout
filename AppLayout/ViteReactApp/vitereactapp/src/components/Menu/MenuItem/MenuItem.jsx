import React, { useCallback } from 'react'
import 'devextreme/dist/css/dx.light.css';
import Menu, { Item } from 'devextreme-react/menu';
import { useNavigate} from 'react-router-dom';
import products from '../NavMenu/Data.jsx'


function MenuItem() {
    const toggle=true;
    const navigate=useNavigate();

    const handleClick=useCallback((e)=>{
        const subItem=e.itemData;
        if (subItem&&subItem.path){
            navigate(subItem.path)
        }
    })
    
    return (
        
        
        <div>
            <div id="container">
                <Menu  
                    adaptivityEnabled={toggle}
                    onItemClick={handleClick}
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
