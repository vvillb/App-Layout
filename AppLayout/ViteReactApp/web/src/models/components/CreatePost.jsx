import React , { useState } from 'react';
import createPost from '../services/createPost'
import './axiosExample.css'

const CreatePost = () => {

    const [posts, setPosts] = useState([]);


    const handleClick = async () => {
        const newPost = await createPost("new title", "something", Date.now());
        setPosts(prev => ([newPost, ...prev]));
    };

    return (
        <div className='axiosExample'>
            <h1 className='axiosExample'>Añadir sugerencia</h1>
            <button onClick={handleClick} className='axiosExample'>Aquí</button>

            <div className='gridAxios'>
                {
                    posts.map(post => (
                        <div key={post.userId} className='axiosExample'>
                            <p className='axiosExample'>Título: <span>{post.title}</span></p>
                            <p className='axiosExample'> <span>{post.body}</span></p>
                            <p className='axiosExample'>Autor: <span>{post.userId}</span></p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
export default CreatePost;
