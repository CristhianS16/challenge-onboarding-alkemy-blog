import Axios from "axios";

export default async function getPost(id) {
  try {
    const url = `http://localhost:4000/posts/${id}`;
    const data = await Axios.get(url);
    const post = await data.data;

    return post;
  } catch (error) {
    if (error.response.status === 404) {
      return error.response.status;
    }
  }
}
