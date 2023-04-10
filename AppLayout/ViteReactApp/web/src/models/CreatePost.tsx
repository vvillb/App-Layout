import React, { useState } from 'react'
import { PostType } from './post.interface';
import { Post } from '../api/api';

const CreatePost = () => {

    const [isError, setIsError] = useState<boolean>(false);
    const [posts, setPosts] = useState<PostType[]>([]);


    const handleClick = async () => {
        const now = new Date();
        const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' });
        const timeStr = now.toLocaleTimeString('en-GB', { hour12: false });

        const newPost: PostType = {
          title: "Nuevo título",
          body: "Esta es una nueva tarjeta",
          date: `${dateStr} ${timeStr}`,

        };
        try {
          const response = await Post.createPost(newPost);
          setPosts(prev => [response, ...prev]);
        } catch (error) {
          setIsError(true);
        }
      };
    return (
        <div className='axiosExample'>
            <h1 className='axiosExample'>Añadir sugerencia</h1>
            <button onClick={handleClick} className='axiosExample'>Haz click aquí para generar una nueva tarjeta</button>

            <div className='gridAxios'>
                {
                    posts.map(post => (
                        <div key={post.userId} className='axiosExample'>
                            <p className='axiosExample'>Título: <span>{post.title}</span></p>
                            <p className='axiosExample'> <span>{post.body}</span></p>
                            <p className='axiosExample'>fecha:<span>{post.date}</span></p>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default CreatePost
