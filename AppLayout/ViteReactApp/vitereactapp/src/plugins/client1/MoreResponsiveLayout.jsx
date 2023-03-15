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
import GetScreenSize from '../../components/screenSize/getScreenSize';
import NavigationDrawer from '../../components/Menu/DrawerMenu/NavigationDrawer';
import Menu from './pages/Menu';



/*Let´s implement a function that returns the screen size according to bootsatrap`s sizes
these sizes are: xs,sm,md,lg,xl
we have already the function getScreenSize which will return a string wiht that size */



class MoreResponsiveLayout extends React.Component {
  render() {
    const screenSize = GetScreenSize();

  if (screenSize === 'xs') {
    return <NavigationDrawer>{this.props.children}</NavigationDrawer>;
  }
    return (
      <div id="page">
        <ResponsiveBox
          singleColumnScreen="xs"
          screenByWidth={GetScreenSize}>
          <Row ratio={4}></Row>
          <Row ratio={1}></Row>
          <Row ratio={10}></Row>
          <Row ratio={1}></Row>

          <Col ratio={1}></Col>
          <Col ratio={2} screen="sm"></Col>
          <Col ratio={2} screen="md"></Col>
          <Col ratio={2} screen="lg"></Col>
          <Col ratio={2} screen="xl"></Col>

           <div className='desktop-only'>
            <Menu/>
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
          </div>
        </ResponsiveBox>
      </div>
    );
  }
}

export default MoreResponsiveLayout;


