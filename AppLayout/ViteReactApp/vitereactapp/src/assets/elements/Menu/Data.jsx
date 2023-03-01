const products = [{
    id: '1',
    name: 'Servicios',
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
    name: 'Actualidad',
    items: [{
      id: '2_1',
      name: 'Actividades y eventos',
      icon: 'event',
    }, {
      id: '2_2',
      name: 'Noticias',
      icon: 'bell',
    }, {
      id: '2_3',
      name: 'Redes sociales',
      icon: 'tips',
    }],
  }, {
    id: '3',
    name: 'Alacaldía',
    items: [{
      id: '3_1',
      name: 'Cultura, Turismo y Deporte',
      items: [{
        id: '3_1_1',
        name: 'Cómo llegar',
        icon: 'map',
       
      },{
        id: '3_1_1',
        name: 'Más información',
        icon: 'help',
       
      }],
    }, {
      id: '3_2',
      name: 'Desarrollo Urbano',
      items: [{
        id: '3_2_1',
       name: 'Cómo llegar',
        icon: 'map',
      }, {
        id: '3_2_2',
        name: 'Más información',
        icon: 'help',
      }],
    }],
  }, {
    id: '4',
    name: 'Sede electrónica',
    
  }];
  
  export default {
    getProducts() {
      return products;
    },
  };