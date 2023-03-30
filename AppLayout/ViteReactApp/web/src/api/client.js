import axios from 'axios';

//The create property of axios receives a configuration object, 
//where in this case we pass the baseURL property, which is the 
//base url to which we will make the requests.
export const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
})

export interface ResponseAPI {
    userId: number;
    id: number;
    title: string;
    body: string;
}