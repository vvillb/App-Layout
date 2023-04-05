import { client } from "../../api/client";
import ResponseAPI from "../responseAPI";

const updatePost = async ({ id, body, title, userId }) => {
    const { data } = await client.put(`${id}`, { body, title, userId });
    return data;
};

export default updatePost