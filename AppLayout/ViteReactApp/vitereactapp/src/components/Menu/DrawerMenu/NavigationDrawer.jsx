import React , { useState, useMemo, useCallback }from "react";
 
import "devextreme/dist/css/dx.light.css";
import "./NavigationDrawer.css";
import { Toolbar, Item } from "devextreme-react/toolbar";

import { Drawer } from "devextreme-react/drawer";
import NavigationList from "./NavigationLists";
import DocumentsCheck from "../../../pages/DocumentsCheck";
import ServicesPage from "../../../pages/ServicesPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../../pages/LoginPage";
import IndexPage from "../../../pages/IndexPage";
import AppRouter from "../../../router/AppRouter";

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
        <div>
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
                <AppRouter/>
                </div>
            </Drawer>
        </div>
    );
}

 
export default NavigationDrawer;