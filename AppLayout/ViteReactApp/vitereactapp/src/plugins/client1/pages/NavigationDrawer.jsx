import React , { useState, useMemo, useCallback }from "react";
 
import "devextreme/dist/css/dx.light.css";
import "./NavigationDrawer.css";
import { Toolbar, Item } from "devextreme-react/toolbar";

import { Drawer } from "devextreme-react/drawer";
 
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
                render={ () => <div style={{width: 150 + "px"}}>Drawer content</div> }
                opened={isOpened} 
            >
                <div>View content</div>
            </Drawer>
        </div>
    );
}

 
export default NavigationDrawer;