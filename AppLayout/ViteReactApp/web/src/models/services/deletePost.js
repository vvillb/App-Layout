import { client } from "../../api/client";
import ResponseAPI from "../responseAPI";

const deletePost=async(id)=>{
    const { status } = await client.delete(`${id}`);
    return status === 200
}

export default deletePost