import React, { useCallback } from "react";
import List from "devextreme-react/list";
import { Link } from "react-router-dom";

const navigation = [
    { id: 1, text: "Carpeta ciudadana", icon: "folder", path: "../../../docu" },
    { id: 2, text: "Atención e información", icon: "info", path: "../../../services" }
];
 
function NavigationList(props){
    const closeDrawer = () => {
        props.stateHandler(false);
    }
 
    const renderItem = useCallback((data) => {
        return (
            <div>
                <Link to={'/' + data.path}>
                    <div>
                        <div className="dx-list-item-icon-container">
                            <i className={`dx-icon dx-list-item-icon dx-icon-${data.icon}`}/>
                        </div>
                        <span>{data.text}</span>
                    </div>
                </Link>
            </div>
        );
    }, []);
 
    return (
        <div>
            <List
                items={navigation}
                width={200}
                selectionMode="single"
                onSelectionChanged={closeDrawer}
                itemRender={renderItem}
            />
        </div>
    );
 
}
 
export default NavigationList;