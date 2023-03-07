import React from 'react';
import './Style3.css'

import ResponsiveBox, {
  Row,
  Col,
  Item,
  Location,
} from 'devextreme-react/responsive-box';
import Header from '../../plugins/client3/pages/Header';
import Menu from '../../plugins/client3/pages/Menu';
import Breadcrumbs from './pages/Breadcrumbs';
import Footer from '../../plugins/client3/pages/Footer';
import 'devextreme/dist/css/dx.light.css';
import '../common/index.css'
import '../common/App.css'
import './Style3.css'

function screen(width) {
  return (width < 700) ? 'sm' : 'lg';
}

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
              col={1}
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
              row={2}
              col={0}
              screen="lg"
            ></Location>
            <Location
              row={2}
              col={0}
              screen="sm"
            ></Location>
            <div className="left-side-bar item">
              <Menu/>
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


