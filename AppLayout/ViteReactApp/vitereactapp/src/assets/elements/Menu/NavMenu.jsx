import React from 'react';
import Menu from 'devextreme-react/menu';
import service from './Data.jsx';
import './style.css';
import {
  
  useLocation,
  useNavigate,
  useParams,
  } from "react-router-dom";




function screen(width) {
  return (width < 700) ? 'horizontal' : 'vertical';
}
/*-----------WRAPPER?---------*/
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    const navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params}}
      />
    );
  }

  return ComponentWithRouterProp;
}
/*----------------------------*/
class NavMenu extends React.Component {

  constructor(props) {
    super(props);
    this.products = service.getProducts();
    this.showSubmenuModes = [{
      name: 'onHover',
      delay: { show: 0, hide: 500 },
    }, {
      name: 'onClick',
      delay: { show: 0, hide: 300 },
    }];
    this.state = {
      showFirstSubmenuModes: this.showSubmenuModes[1],
      orientation: screen(window.innerWidth),
      hideSubmenuOnMouseLeave: false,
      currentProduct: null,
    };
    this.itemClick = this.itemClick.bind(this);
    this.showSubmenuModeChanged = this.showSubmenuModeChanged.bind(this);
    this.orientationChanged = this.orientationChanged.bind(this);
    this.hideSubmenuOnMouseLeaveChanged = this.hideSubmenuOnMouseLeaveChanged.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      orientation: screen(window.innerWidth),
    });
  };

  render() {
    const {
      showFirstSubmenuModes, orientation, hideSubmenuOnMouseLeave, currentProduct,
    } = this.state;
    
      
    return (
      <div className="form">
        <div>
          <div className="label">Navegación:</div>
          <Menu dataSource={this.products}
            displayExpr="name"
            showFirstSubmenuMode={showFirstSubmenuModes}
            orientation={orientation}
            hideSubmenuOnMouseLeave={hideSubmenuOnMouseLeave}
            onItemClick={this.itemClick}
          />
          {currentProduct
          && <div id="product-details" >
            <img src={currentProduct.icon} />
            <div className="name">{currentProduct.name}</div>
          </div>
          }
        
        
        </div>
      </div>
    );
  }

  /*-----------error: Cannot read properties of null (reading 'path')-------------------------*/
  itemClick = (props) => {
    const { navigate, currentProduct } = this.state;
    navigate(currentProduct.path); // navigate to the new page
  }
  
/*---------------------------------------*/
  showSubmenuModeChanged(e) {
    this.setState({
      showFirstSubmenuModes: e.value,
    });
  }

  orientationChanged(e) {
    this.setState({
      orientation: e.value,
    });
  }

  hideSubmenuOnMouseLeaveChanged(e) {
    this.setState({
      hideSubmenuOnMouseLeave: e.value,
    });
  }
}

export default withRouter(NavMenu);