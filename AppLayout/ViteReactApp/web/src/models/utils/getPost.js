import {client} from '../../api/client'

const getPost = async () => {
    try {
        const { data } = await client.get('?_limit=6');
        return data;
    } catch (error) {
        const err = error;
        console.log(err.message);
        console.log(err.name);
        return [];
    }
};


export default getPost;