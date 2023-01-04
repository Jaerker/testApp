import axios, {AxiosResponse} from 'axios';
import Post from '../models/post';
import {LogBox} from 'react-native';


axios.defaults.baseURL = 'https://blog-api-production-68d6.up.railway.app/api';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;


const requests = {
    get: <T> (url:string) => axios.get<T>(url).then(responseBody),
    post: <T> (url:string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url:string, body: {}) => axios.put<T>(url, body).then(responseBody),
    delete: <T> (url:string) => axios.delete<T>(url).then(responseBody)
}

const Test = {
    test: () => requests.get<Post>('/auth/test')
}
const Posts = {
    list: () => requests.get<Post[]>('/blog/posts'),
    details: (id: string) => requests.get<Post>(`/posts/${id}`),
    create: (post: Post) => requests.post<void>('/posts', post),
    delete: (id: string) => requests.delete<void>(`/blog/posts/${id}`)
}

const agent = {
    Test,
    Posts
}

export default agent;


