import React, { useCallback, useEffect, useState } from 'react'
import 'devextreme/dist/css/dx.light.css';
import Menu, { Item } from 'devextreme-react/menu';
import useScreenSize from '../../../hooks/useScreenSize'
import { Link } from 'react-router-dom';
import CheckBox from 'devextreme-react/check-box';




function MenuItem() {
    //const[click,setClick]=useState(false)
    const [toggle, setToggle] = useState(false);
    //const handleClick=()=>setClick(!click)
    //const closeSubMenu=()=>setClick(false)
    
    /*const ScreenSize={useScreenSize}
    const onScreenChange=()=>{
        if (ScreenSize==="xs"){
            setToggle(true);}
            else{
                setToggle(false);
            }
        };*/
        //prueba del toggle
        
       
        ///////
        const onValueChanged = useCallback((e) => {
                setToggle(e.value);
            }, []);
        /*
    useEffect(()=>{
        onScreenChange();
    },[]);*/
    return (
        
        
        <div>
            <div id="container">
                <Menu  
                   // onItemClick={handleClick}
                    adaptivityEnabled={toggle}
                    >
                
                    <Item
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
                    </Item>
                </Menu>
            </div>
            <CheckBox
                text="Enable adaptivity"
                onValueChanged={onValueChanged}
            >
            </CheckBox>
        </div>
    );
}

export default MenuItem
