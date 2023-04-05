import React, { useState, useEffect } from 'react';
import getPosts from '../services/getPost';
import updatePost from '../services/updatePost';
import './axiosExample.css'

const UpdatePost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(data => setPosts(data));
    }, []);

    const handleUpdate = async (id) => {
        const body = 'Body updated';
        const title = 'Title updated';
        const userId = Date.now();

        const postUpdated = await updatePost({ id, body, title, userId });

        setPosts(prev => ([
            postUpdated,
            ...prev.filter(post => post.id !== id),
        ]));
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
};


export default UpdatePost;