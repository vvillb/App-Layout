import React from 'react';
import Menu from 'devextreme-react/menu';
import service from './Data.jsx';
import './style.css'

function screen(width) {
  return (width < 700) ? 'horizontal' : 'vertical';
}

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
          && <div id="product-details">
            <img src={currentProduct.icon} />
            <div className="name">{currentProduct.name}</div>
            <div className="price">{`$${currentProduct.price}`}</div>
          </div>
          }
        
        
        </div>
      </div>
    );
  }

  itemClick(e) {
    if (e.itemData.price) {
      this.setState({
        currentProduct: e.itemData,
      });
    }
  }

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

export default NavMenu;
