import React, { useState, useEffect } from 'react';
import getPost from '../services/getPost';
import './axiosExample.css'




const GetPost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // start loading
        getPost().then(data => setPosts(data));
        // finish loading
    }, []);

    return (
        <>
            <h1 className='axiosExample'>Leer publicación</h1><br />
            <h2 className='axiosExample'>lista de publicaciones</h2>

            <div className='gridAxios'>
                {
                    posts.map(post => (
                        <div key={post.id} className='axiosExample'>
                            <p className='axiosExample'>Título: <span>{post.title}</span></p>
                            <p className='axiosExample'> <span>{post.body}</span></p>
                            <p className='axiosExample'>Autor: <span>{post.userId}</span></p>
                        </div>
                    ))
                }
            </div>
        </>
    );
};


export default GetPost;