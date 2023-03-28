import React from 'react';
import Menu from 'devextreme-react/menu';
import service from './Data.jsx';
import './style.css';
import './Data.jsx';
import {
  Link
} from "react-router-dom";

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.products = service.getProducts();
    this.showSubmenuModes = [
      {
        name: 'onHover',
        delay: { show: 0, hide: 500 },
      },
      {
        name: 'onClick',
        delay: { show: 0, hide: 300 },
      },
    ];
    this.state = {
      showFirstSubmenuModes: this.showSubmenuModes[1],
      hideSubmenuOnMouseLeave: false,
      currentProduct: null,
      mounted: false,
    };
    this.itemClick = this.itemClick.bind(this);
    this.showSubmenuModeChanged= this.showSubmenuModeChanged.bind(this);
    this.orientationChanged = this.orientationChanged.bind(this);
   
  }
  componentDidMount() {
    this.setState({ mounted: true });
  }

  componentWillUnmount() {
    this.setState({ mounted: false });
  }

  render() {
    const {
      showFirstSubmenuModes,
      hideSubmenuOnMouseLeave,
      currentProduct,
      mounted,
    } = this.state;
    const { updateRoute } = this.props;

    return (
      <div className="form">
        <div>
          <div className="label">Navegación:</div>
          {currentProduct ? (
            <Link to={currentProduct.path}>
              <Menu 
                dataSource={currentProduct.items}
                displayExpr="name"
                showFirstSubmenuMode={showFirstSubmenuModes}
                orientation="horizontal"
                hideSubmenuOnMouseLeave={hideSubmenuOnMouseLeave}
                submenuDirection="auto" // added
                onItemClick={(e) => {
                  this.setState({
                    currentProduct: e.itemData,
                  });
                }}
              />
            </Link>
          ) : (
            <Menu
              dataSource={this.products}
              displayExpr="name"
              showFirstSubmenuMode={showFirstSubmenuModes}
              orientation="horizontal"
              hideSubmenuOnMouseLeave={hideSubmenuOnMouseLeave}
              submenuDirection="auto" // added
              onItemClick={(e) => {
                this.setState({
                  currentProduct: e.itemData,
                });
              }}
            />
            )}
        </div>
      </div>
    );
  }

  itemClick(e, updateRoute) {
    if (e.itemData.price) {
      this.setState({
        currentProduct: e.itemData,
      });
    }
    if (!this.state.mounted) {
      return;
    }
    console.log(e.itemData);
    const path = e.itemData.path;
    if (path) {
      updateRoute(path);
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

 

}
export default NavMenu;
