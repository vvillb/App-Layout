import React from 'react';
//this layout will serve as a test to be more responsive
//after finishong, it can be copied into the others
import ResponsiveBox, {
  Row,
  Col,
  Item,
  Location,
} from 'devextreme-react/responsive-box';
import Header from '../../components/partesPagina/Header';
import Menu from '../../components/partesPagina/Menu';
import Breadcrumbs from '../../components/partesPagina/Breadcrumbs';
import Footer from '../../components/partesPagina/Footer';
import 'devextreme/dist/css/dx.light.css';
import '../common/index.css'
import '../common/App.css'
import './Style3.css'
import useScreenSize from '../../hooks/useScreenSize';
import NavigationDrawer from '../../components/Menu/DrawerMenu/NavigationDrawer';

function Layout({children}) {
    


  return (
    <div id="page">
      
      
      <ResponsiveBox
        singleColumnScreen="xs"
        >
       
        <Row ratio={8}></Row>
        <Row ratio={2}></Row>
        <Row ratio={2}></Row>
        <Row ratio={20}></Row>
        <Row ratio={1}></Row>

        <Col ratio={1}></Col>
        <Col ratio={2} screen="sm"></Col>
        <Col ratio={2} screen="md"></Col>
        <Col ratio={2} screen="lg"></Col>
        <Col ratio={2} screen="xl"></Col>


         
       
        <Item>
          <Location
            row={0}
            col={0}
            colspan={3}
            screen="xl"
          ></Location>
          <Location
            row={0}
            col={0}
            colspan={3}
            screen="lg"
          ></Location>
          <Location
            row={0}
            col={0}
            colspan={3}
            screen="md"
          ></Location>
          <Location
            row={0}
            col={0}
            colspan={3}
            screen="sm"
          ></Location>
          <Location
            row={0}
            col={0}
            colspan={2}
            screen="xs"
          ></Location>
          <div className="header item">
            <Header/>
          </div>
        </Item>
        <Item>
          <Location
            row={1}
            col={0}
            colspan={3}
            screen="xl"
          ></Location>
          <Location
            row={1}
            col={0}
            colspan={3}
            screen="lg"
          ></Location>
          <Location
            row={1}
            col={0}
            colspan={3}
            screen="md"
          ></Location>
          <Location
            row={1}
            col={0}
            colspan={3}
            screen="sm"
          ></Location>
          <Location
            row={1}
            col={0}
            colspan={3}
            screen="xs"
          ></Location>
          <div className="menu item">
            <Menu/>
          </div>
        </Item>
        <Item>
        <Location
            row={3}
            col={0}
            colspan={3}
            screen="xl"
          ></Location>
          <Location
            row={3}
            col={0}
            colspan={3}
            screen="lg"
          ></Location>
          <Location
            row={3}
            col={0}
            colspan={3}
            screen="md"
          ></Location>
          <Location
            row={3}
            col={0}
            colspan={3}
            screen="sm"
          ></Location>
          <Location
            row={3}
            col={0}
            colspan={2}
            screen="xs"
          ></Location>
          <div className="content item">
            {children}
          </div>
        </Item>
        
        <Item>
        <Location
            row={2}
            col={0}
            colspan={3}
            screen="xl"
          ></Location>
          <Location
            row={2}
            col={0}
            colspan={3}
            screen="lg"
          ></Location>
          <Location
            row={2}
            col={0}
            colspan={3}
            screen="md"
          ></Location>
          <Location
            row={2}
            col={0}
            colspan={3}
            screen="sm"
          ></Location>
          <Location
            row={1}
            col={1}
            screen="xs"
          ></Location>
          <div className="right-side-bar item">
            <Breadcrumbs/>
          </div>
        </Item>
        <Item>
        <Location
            row={4}
            col={0}
            colspan={3}
            screen="xl"
          ></Location>
          <Location
            row={4}
            col={0}
            colspan={3}
            screen="lg"
          ></Location>
          <Location
            row={4}
            col={0}
            colspan={3}
            screen="md"
          ></Location>
          <Location
            row={4}
            col={0}
            colspan={3}
            screen="sm"
          ></Location>
          <Location
            row={3}
            col={0}
            colspan={2}
            screen="xs"
          ></Location>
          <div className="footer item">
            <Footer/>
          </div>
        </Item>
        
      </ResponsiveBox>
    </div>
  );
}


export default Layout;


