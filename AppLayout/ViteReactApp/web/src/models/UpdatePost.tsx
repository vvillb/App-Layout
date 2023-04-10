import React, { useEffect, useState } from 'react'
import { Post } from '../api/api';
import { PostType } from './post.interface';

const UpdatePost = () => {
    const [posts, setPosts] =  useState<PostType[]>([]);
    const [isError, setIsError] = useState<boolean>(false);
    
    useEffect(() => {
        Post.getPosts().then(data => setPosts(data));
    }, []);

    const handleUpdate = async (id?: number) => {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' });
    const timeStr = now.toLocaleTimeString('en-GB', { hour12: false });
    
        

        const postUpdated: PostType = {
            title: "Modificada",
            body: "Esta tarjeta ha sido modificada",
            date: `${dateStr} ${timeStr}`,
  
          };
          try{
            const response = await Post.updatePost(postUpdated, id);
            setPosts(prev => [response, ...prev.filter(post => post.id !== id)]);
            } catch (error) {
            setIsError(true);
            }
      };
 
    
    

    return (
        <div className='axiosExample'>
            <h1 className='axiosExample' >Actualizar publicación</h1><br />
            <h2 className='axiosExample' >Haz click en una trajeta</h2>
            <div className='gridAxios'>
                {
                    posts.map(post => (
                        <div className='axiosExample' key={post.id} onClick={() => handleUpdate(post.id)}>
                            <p className='axiosExample'>Título: <span className='axiosExample'>{post.title}</span></p>
                            <p className='axiosExample'> <span className='axiosExample'>{post.body}</span></p>
                            <p className='axiosExample'>Autor: <span className='axiosExample'>{post.userId}</span></p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default UpdatePost
