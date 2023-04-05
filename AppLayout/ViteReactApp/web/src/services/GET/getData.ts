import { client, ResponseAPI } from "../../api"

export const getPosts = async (): Promise<ResponseAPI[]> => {
    const { data } = await client.get<ResponseAPI[]>('')
    return data
}