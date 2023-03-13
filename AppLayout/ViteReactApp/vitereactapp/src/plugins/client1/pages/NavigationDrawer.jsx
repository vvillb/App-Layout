import React, { useState, useMemo } from 'react';
import Drawer from 'devextreme-react/drawer';
import DocumentsCheck from '../../../pages/DocumentsCheck';
import "devextreme/dist/css/dx.light.css";
import "./NavigationDrawer.css";
import { Toolbar, Item } from "devextreme-react/toolbar";
import IndexPage from '../../../pages/IndexPage';
import NavigationLists from "./NavigationLists";
import { Routes, Route } from 'react-router-dom'; 

const NavigationDrawer = () => {
    const [isOpened, setState] = useState(false);
    const buttonOptions = useMemo(() => {
        return {
            icon: "menu",
            onClick: () => {
                setState(!isOpened);
            }
        };
    }, [isOpened]);
    /*To fix the "Uncaught ReferenceError: renderList is not defined" error, 
    you need to define a function called renderList in the NavigationDrawer 
    component that returns the NavigationList component, like this:*/
    const renderList = () => {
        return <NavigationLists stateHandler={setState} />;
    };
    /*In this code, the renderList function returns the NavigationList component, 
    passing the setState function as a prop. Then, in the Drawer component, the 
    render prop is set to the renderList function.*/

    return (
    <div>
        <Toolbar id="toolbar">
                <Item 
                    widget="dxButton" 
                    options={buttonOptions} 
                    location="before" />
            </Toolbar>
      <Drawer opened={isOpened} render={renderList} revealMode="expand" openedStateMode="overlap" >
      <div id="view">
        <Routes>
            <Route exact path="../../../pages/DocumentsCheck.jsx" element={<DocumentsCheck />} />
            <Route path="../../../pages/IndexPage.jsx" element={<IndexPage />} />
        </Routes>
      </div>

      </Drawer>
    </div>
    );
  };
  
  export default NavigationDrawer;