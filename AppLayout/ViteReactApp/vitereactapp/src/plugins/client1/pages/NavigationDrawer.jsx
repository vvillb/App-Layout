import React from "react";
 
import "devextreme/dist/css/dx.light.css";
import "./NavigationDrawer.css";
 
import { Drawer } from "devextreme-react/drawer";
 
function NavigationDrawer() {
    return (
        <div>
            <Drawer
                minSize={37}
                height={250}
                render={ () => <div style={{width: 150 + "px"}}>Drawer content</div> }
            >
                <div>View content</div>
            </Drawer>
        </div>
    );
}

 
export default NavigationDrawer;