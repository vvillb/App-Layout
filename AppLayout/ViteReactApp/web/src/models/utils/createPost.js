import { client } from "../../api/client";

const createPost = async (title, body, userId) => {
    const { data } = await client.post('', { title, body, userId, id: 52 });
    return data;
};
export default createPost;
