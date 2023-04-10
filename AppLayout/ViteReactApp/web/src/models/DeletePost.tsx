
import './axiosExample.css'
import React, { useEffect, useState } from 'react'
import { PostType } from './post.interface';
import {Post}  from '../api/api';
import {Button as DevButton} from 'devextreme-react/Button';

const DeletePost = () => {
    const [isError, setIsError] = useState<boolean>(false);
    const [posts, setPosts] = useState<PostType[]>([]);
    
    useEffect(() => {
        Post.getPosts().then(data => setPosts(data))
        }, [])

        const handleDelete = (id: number | undefined) => {
            if (id !== undefined) {
              Post.deletePost(id)
                .then(() => {
                  let updatedPost = posts.filter((post) => post.id !== id);
                  setPosts(updatedPost);
                })
                .catch(() => {
                  setIsError(true);
                });
            }
          };
    
  return (
    <div className='axiosExample'>
            <h1 className='axiosExample'>Eliminar queja</h1> <br />
            
            <div className="gridAxios">
                {
                    posts.map(post => (
                        <div className="axiosExample" key={post.id} >
                            <p className='axiosExample'>ID: <span className='axiosExample'>{post.id}</span></p>
                            <p className='axiosExample'>Título: <span>{post.title}</span></p>
                            <p className='axiosExample'> <span>{post.body}</span></p>
                            <p className='axiosExample'>Autor: <span>{post.userId}</span></p>
                            <DevButton onClick={() => handleDelete(post.id)}>Eliminar</DevButton>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default DeletePost

