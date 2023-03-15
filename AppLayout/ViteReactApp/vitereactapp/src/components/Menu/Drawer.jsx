import React from 'react';
 
import 'devextreme/dist/css/dx.light.css';
 
import Drawer from 'devextreme-react/drawer';
 
function DrawerContent() {
    return (
        <div style={{ width: 200 }}>
            {/* Declare the drawer's content here */}
        </div>
    )
}
 
export default function Drawer() {
    return (
        <Drawer
            render={DrawerContent}>
            {/* Declare the view's content here */}
        </Drawer>
    );
}