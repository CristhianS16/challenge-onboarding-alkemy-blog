import Axios from 'axios';

export async function getPosts(since, until) {
    try {
        const url = `https://jsonplaceholder.typicode.com/posts?_start=${since}&_end=${until}`;
        const data = await Axios.get(url);
        const posts = await data.data;

        return posts;
    } catch (error) {
        if(error.response.status === 404){
            return error.response.status;
        };
    };
};

export async function getPost(id) {
    try {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        const data = await Axios.get(url);
        const post = await data.data;

        return post;
    } catch (error) {
        if(error.response.status === 404){
            return error.response.status;
        };
    };
};