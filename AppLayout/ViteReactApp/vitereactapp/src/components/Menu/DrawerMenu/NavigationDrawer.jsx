import React , { useState, useMemo, useCallback }from "react";
 
import "devextreme/dist/css/dx.light.css";
import "./NavigationDrawer.css";
import { Toolbar, Item } from "devextreme-react/toolbar";

import { Drawer } from "devextreme-react/drawer";
import NavigationList from "./NavigationLists";


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
        <div style={{position: "absolute"}}>
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
            
                </div>
            </Drawer>
        </div>
    );
}

 
export default NavigationDrawer;