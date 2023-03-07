const products = [{
    id: '1',
    name: 'index',
    path:'/index'
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