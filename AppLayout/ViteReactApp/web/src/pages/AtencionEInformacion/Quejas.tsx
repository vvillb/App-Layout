import React ,{useState} from 'react'
import Layout from '@client-layout';
import GetPost from '../../models/GetPost';
import DeletePost from '../../models/DeletePost';
import UpdatePost from '../../models/UpdatePost';
import CreatePost from '../../models/CreatePost';
import {Button as DevButton}from 'devextreme-react/Button';
import TypeScriptLayout from '../../plugins/client3/TypeScriptLayout';


function Quejas() {
    
  const [action, setAction] = useState('get');
  
  const showActionComponent = () => {
    switch (action) {
      case 'get':
        return <GetPost />;
      case 'delete':
        return <DeletePost />;
      case 'put':
        return <UpdatePost />;
      case 'post':
        return <CreatePost />;
    }
  };

    return (
      <TypeScriptLayout>
          <div>
         <h1>Quejas y sugerencias</h1>
        </div>
        <div className='grid-btn'>
              <DevButton onClick={() => setAction('get')}>Ver todas</DevButton>
              <DevButton onClick={() => setAction('post')}>Crear</DevButton>
              <DevButton onClick={() => setAction('delete')}>Eliminar</DevButton>
              <DevButton onClick={() => setAction('put')}>Modificar</DevButton>
            </div>

            {showActionComponent()}
      </TypeScriptLayout>

    )
  }
  
  export default Quejas;
  