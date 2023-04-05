import { client } from "../../api/client";

const updatePost = async ({ id, body, title, userId }) => {
    const { data } = await client.put(`${id}`, { body, title, userId });
    return data;
};

export default updatePost