import React, {useState} from 'react'
import Layout from '@client-layout';
import CreatePost from '../../models/components/CreatePost';
import GetPost from '../../models/components/GetPost';
import UpdatePost from '../../models/components/UpdatePost';
import DeletePost from '../../models/components/DeletePost';


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
      <Layout>
          <div>
         <h1>Quejas y sugerencias</h1>
         <div>
      <div className='grid-btn'>
        <button onClick={() => setAction('get')}>Get</button>
        <button onClick={() => setAction('post')}>Post</button>
        <button onClick={() => setAction('delete')}>Delete</button>
        <button onClick={() => setAction('put')}>Update</button>
      </div>

      {showActionComponent()}
    </div>

        </div>
      </Layout>
    )
  }
  
  export default Quejas;
  