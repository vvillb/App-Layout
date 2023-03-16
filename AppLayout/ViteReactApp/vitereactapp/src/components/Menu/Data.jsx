const products = [{
    id: '1',
    name: 'Atención e información',
    path:'/index',
    items: [{
      id: '1_1',
      name: 'Catálogo de trámites',
      icon: 'columnchooser',
    }, {
      id: '1_2',
      name: 'Tablón de anuncios',
      icon: 'key',
    },{
      id: '1_3',
      name: 'Quejas y sugerencias',
      icon: 'group',
    },{
      id: '1_4',
      name: 'Verificación de documentos',
      icon: 'key',
    },],
  }, {
    id: '2',
    name: 'Carpeta ciudadana',
    path:'/services',
    items: [{
      id: '2_1',
      name: 'Mis documentos ',
      icon: 'columnchooser',
    }, {
      id: '2_2',
      name: 'Mis solicitudes',
      icon: 'key',
    },{
      id: '2_3',
      name: 'Mis expedientes',
      icon: 'group',
    },{
      id: '2_4',
      name: 'Mis notificaciones',
      icon: 'key',
    },],
   }];
  
  export default {
    getProducts() {
      return products;
    },
  };