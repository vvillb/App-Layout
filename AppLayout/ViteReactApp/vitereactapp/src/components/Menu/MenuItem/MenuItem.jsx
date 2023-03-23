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
   /* const products = [{
        id: '1',
        name: 'Atención e información',
        path:'/docu',
        subItems: [{
          id: '1_1',
          name: 'Catálogo de trámites',
          icon: 'columnchooser',
          path:'/AtencionEInformacion/Catalogo'
        }, {
          id: '1_2',
          name: 'Tablón de anuncios',
          icon: 'key',
          path:'/AtencionEInformacion/Tablon'
        },{
          id: '1_3',
          name: 'Quejas y sugerencias',
          icon: 'group',
          path:'/AtencionEInformacion/Quejas'
        },{
          id: '1_4',
          name: 'Verificación de documentos',
          icon: 'key',
          path:'/AtencionEInformacion/Verificacion'
        },],
      }, {
        id: '2',
        name: 'Carpeta ciudadana',
        path:'/services',
        subItems: [{
          id: '2_1',
          name: 'Mis documentos ',
          icon: 'columnchooser',
          path:'/CarpetaCiudadana/MisDocumentos'
        }, {
          id: '2_2',
          name: 'Mis solicitudes',
          icon: 'key',
          path:'/CarpetaCiudadana/MisSolicitudes'
        },{
          id: '2_3',
          name: 'Mis expedientes',
          icon: 'group',
          path:'/CarpetaCiudadana/MisExpedientes'
        },{
          id: '2_4',
          name: 'Mis notificaciones',
          icon: 'key',
          path:'/CarpetaCiudadana/MisNotificaciones'
        },],
       }];*/

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
                   {/*<Item
                        text= "Atención e información"
                        path="/docu"
                        icon="info"
                    >
                        <Item
                        text= "Catálogo de trámites"
                        path="/AtencionEInformacion/Catalogo"
                        icon="columnchooser"
                        >                          
                        </Item>
                        <Item
                        text= "Tablón de anuncios"
                        path="/AtencionEInformacion/Tablon"
                        icon="key"
                        >                          
                        </Item>
                        <Item
                        text= "Quejas y sugerencias"
                        path="/AtencionEInformacion/Quejas"
                        icon="group"
                        >                          
                        </Item>
                        <Item
                        text= "Verificación de documentos"
                        path="/AtencionEInformacion/Verificacion"
                        icon="key"
                        >                          
                        </Item>
                    </Item>
                    <Item
                        text= "Carpeta ciudadana"
                        path="/services"
                        icon="folder"
                        
                    >
                        <Item
                        text= "Mis documentos"
                        path="/CarpetaCiudadana/MisDocumentos"
                        icon="folder"
                        >                          
                        </Item>
                        <Item
                        text= "Mis solicitudes"
                        path="/CarpetaCiudadana/MisSolicitudes"
                        icon="key"
                        >                          
                        </Item>
                        <Item
                        text= "Mis expedientes"
                        path="/CarpetaCiudadana/MisExpedientes"
                        icon="folder"
                        >                          
                        </Item>
                        <Item
                        text= "Mis notificaciones"
                        path="/CarpetaCiudadana/MisNotificaciones"
                        icon="bell"
                        >                          
                        </Item>
                    </Item>*/}
                </Menu>
            </div>
       
        </div>
    );
}

export default MenuItem
