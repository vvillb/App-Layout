import React , { useState, useMemo, useCallback }from "react";
 
import "devextreme/dist/css/dx.light.css";
import "./NavigationDrawer.css";
import { Toolbar, Item } from "devextreme-react/toolbar";

import { Drawer } from "devextreme-react/drawer";
import NavigationList from "./NavigationLists";
import AppRouter from "../../../router/AppRouter";
import { Route, Routes } from "react-router-dom";
import DocumentsCheck from "../../../pages/DocumentsCheck";
import IndexPage from "../../../pages/IndexPage";
import LoginPage from "../../../pages/LoginPage";
import ServicesPage from "../../../pages/ServicesPage";
import Catalogo from "../../../pages/AtencionEInformacion/Catalogo";
import Quejas from "../../../pages/AtencionEInformacion/Quejas";
import Tablon from "../../../pages/AtencionEInformacion/Tablon";
import Verificacion from "../../../pages/AtencionEInformacion/Verificacion";
import MisDocumentos from "../../../pages/CarpetaCiudadana/MisDocumentos";
import MisExpedientes from "../../../pages/CarpetaCiudadana/MisExpedientes";
import MisNotificaciones from "../../../pages/CarpetaCiudadana/MisNotificaciones";
import MisSolicitudes from "../../../pages/CarpetaCiudadana/MisSolicitudes";




function NavigationDrawer() {
    const [isOpened, setState] = useState(false);
    const buttonOptions = useMemo(() => {
        return {
            icon: "menu",
            onClick: () => {
                setState(!isOpened);
            }
        };
    }, [isOpened]);
    const renderList = useCallback(() => {
        const stateHandler = (newState) => setState(newState);
        return (
            <NavigationList stateHandler={stateHandler} />
        );
    }, []);
    return (
        <div className="test"> 
            <Toolbar id="toolbar">
                <Item 
                    widget="dxButton" 
                    options={buttonOptions} 
                    location="before" />
            </Toolbar>
            <Drawer

                minSize={37}
                height={250}
                render={ renderList }
                opened={isOpened} 
            >
                <div id="view">
               {/*<Routes>
                    <Route path='/docu' element={<DocumentsCheck/>}/> 
                    <Route path='/index' element={<IndexPage/>}/> 
                    <Route path='*' element={<LoginPage/>}/> 
                    <Route path='/services' element={<ServicesPage/>}/> 
                    <Route path='/AtencionEInformacion/Catalogo' element={<Catalogo/>}/>
                    <Route path='/AtencionEInformacion/Quejas' element={<Quejas/>}/>
                    <Route path='/AtencionEInformacion/Tablon' element={<Tablon/>}/>
                    <Route path='/AtencionEInformacion/Verificacion' element={<Verificacion/>}/>
                    <Route path='/CarpetaCiudadana/MisDocumentos' element={<MisDocumentos/>}/>
                    <Route path='/CarpetaCiudadana/MisExpedientes' element={<MisExpedientes/>}/>
                    <Route path='/CarpetaCiudadana/MisNotificaciones' element={<MisNotificaciones/>}/>
                    <Route path='/CarpetaCiudadana/MisSolicitudes' element={<MisSolicitudes/>}/>
    </Routes>*/} 
                </div>
            </Drawer>
        </div>
    );
}

 
export default NavigationDrawer;