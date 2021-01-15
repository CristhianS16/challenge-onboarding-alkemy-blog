import Axios from "axios";

export async function getPosts(since, until, findAll) {
  try {
    let url;
    if (findAll) {
      url = `http://localhost:4000/posts/`;
    } else {
      url = `http://localhost:4000/posts/${since}/${until}`;
    };
    const data = await Axios.get(url);
    const posts = await data.data;

    return posts;
  } catch (error) {
    if (error.response.status === 404) {
      return error.response.status;
    };
  };
};

export async function getPost(id) {
  try {
    const url = `http://localhost:4000/posts/${id}`;
    const data = await Axios.get(url);
    const post = await data.data;

    return post;
  } catch (error) {
    if (error.response.status === 404) {
      return error.response.status;
    };
  };
};
