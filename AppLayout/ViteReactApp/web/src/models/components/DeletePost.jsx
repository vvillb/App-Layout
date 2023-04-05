import React from "react";
import deletePost from "../services/deletePost";
import getPosts from "../services/getPost";
import { useEffect, useState } from 'react';
import './axiosExample.css'

export const DeletePost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(data => setPosts(data))
    }, [])

    const handleDelete = async (id) => {
        const isSuccess = await deletePost(id);
        if (isSuccess) setPosts(prev => prev.filter(post => post.id !== id));
    }

    return (
        <div className='axiosExample'>
            <h1 className='axiosExample'>Eliminar queja</h1> <br />
            <h2 className='axiosExample'>Haz click en una trajeta</h2>
            <div className="gridAxios">
                {
                    posts.map(post => (
                        <div className="axiosExample" key={post.id} onClick={() => handleDelete(post.id)}>
                            <p className='axiosExample'>ID: <span className='axiosExample'>{post.id}</span></p>
                            <p className='axiosExample'>Title: <span className='axiosExample'>{post.title}</span></p>
                            <p className='axiosExample'>Body: <span className='axiosExample'>{post.body}</span></p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default DeletePost