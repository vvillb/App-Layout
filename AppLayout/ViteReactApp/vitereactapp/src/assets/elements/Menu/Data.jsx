const products = [{
    id: '1',
    name: 'index',
    path:'/index',
    items: [{
      id: '1_1',
      name: 'Bibliotecas',
      icon: 'columnchooser',
    }, {
      id: '1_2',
      name: 'Sede electrónica',
      icon: 'key',
    },{
      id: '1_3',
      name: 'Participación ciudadana',
      icon: 'group',
    }],
  }, {
    id: '2',
    name: 'Servicios',
    path:'/services'
  }, {
    id: '3',
    name: 'Login',
    path:'/',
    
  }, {
    id: '4',
    name: 'Check documents ',
    path:'/docu'
    
  }];
  
  export default {
    getProducts() {
      return products;
    },
  };