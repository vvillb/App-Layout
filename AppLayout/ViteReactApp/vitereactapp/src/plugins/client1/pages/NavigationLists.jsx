import React, { useCallback } from "react";
import List from "devextreme-react/list";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
 
const navigation = [
    { id: 1, text: "Atención e información", icon: "message", path: "../../../pages/DocumentsCheck.jsx" },
    { id: 2, text: "Carpeta ciudadana", icon: "check", path: "../../../pages/IndexPage.jsx" }
];


/*In React, you can define the types and structure of the props that a component 
receives using the propTypes property or the prop-types library.

The error message ("'stateHandler' is missing in props validation")indicates that 
you have not defined a prop named stateHandler in your propTypes validation.

To fix this error, you need to add the stateHandler prop to your NavigationList component's propTypes validation, like this:*/
NavigationList.propTypes = {
    stateHandler: PropTypes.func.isRequired
  };
/*In this example, we are using the PropTypes object from the prop-types library to define that the stateHandler 
prop is required and should be a function. You can adjust the validation according to your needs.*/



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