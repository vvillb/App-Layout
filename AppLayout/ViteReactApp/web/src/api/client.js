import axios from 'axios'

export const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
});

export const ResponseAPI = {
  userId: 0,
  id: 0,
  title: "",
  body: ""
};