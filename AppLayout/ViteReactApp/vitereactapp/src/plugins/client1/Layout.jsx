import React from 'react';
import ResponsiveBox, {
  Row,
  Col,
  Item,
  Location,
} from 'devextreme-react/responsive-box';
import Header from './pages/Header';
import Breadcrumbs from './pages/Breadcrumbs';
import Footer from './pages/Footer';
import 'devextreme/dist/css/dx.light.css';
import '../common/index.css'
import '../common/App.css'
import './Style1.css'
//import NavigationDrawer from './pages/NavigationDrawer';

function screen(width) {
  return (width < 700) ? 'sm' : 'lg';
}
/* The error message suggests that the children prop is not defined in the props validation of the Layout component. 
You can add the following code to validate the children prop
Layout.propTypes = {
  children: PropTypes.node
};
/*This code imports the PropTypes library and adds a propTypes static property to the Layout class that 
defines the children prop as a node type. The node type is a special type that allows any valid React 
node to be passed as a prop, including other components, text, and elements.    */

class Layout extends React.Component {
  render() {
    return (
      <div id="page">
        <ResponsiveBox
          singleColumnScreen="sm"
          screenByWidth={screen}>
          <Row ratio={4}></Row>
          <Row ratio={1}></Row>
          <Row ratio={10}></Row>
          <Row ratio={1}></Row>

          <Col ratio={1}></Col>
          <Col ratio={2} screen="lg"></Col>
          
          <Item>
            <Location
              row={0}
              col={0}
              colspan={3}
              screen="lg"
            ></Location>
            <Location
              row={0}
              col={0}
              colspan={2}
              screen="sm"
            ></Location>
            <div className="header item">
              <Header/>
            </div>
          </Item>
          <Item>
            <Location
              row={2}
              col={0}
              colspan={3}
              screen="lg"
            ></Location>
            <Location
              row={3}
              col={0}
              colspan={2}
              screen="sm"
            ></Location>
            <div className="content item">
              {this.props.children}
            </div>
          </Item>
          
          <Item>
            <Location
              row={1}
              col={0}
              colspan={3}
              screen="lg"
            ></Location>
            <Location
              row={1}
              col={1}
              screen="sm"
            ></Location>
            <div className="right-side-bar item">
              <Breadcrumbs/>
            </div>
          </Item>
          <Item>
            <Location
              row={3}
              col={0}
              colspan={3}
              screen="lg"
            ></Location>
            <Location
              row={3}
              col={0}
              colspan={2}
              screen="sm"
            ></Location>
            <div className="footer item">
              <Footer/>
            </div>
          </Item>
        </ResponsiveBox>
      </div>
    );
  }
}

export default Layout;


