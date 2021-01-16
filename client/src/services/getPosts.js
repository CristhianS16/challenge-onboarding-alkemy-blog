import Axios from "axios";

export async function getPosts() {
  try {
    const url = `http://localhost:4000/posts/`;
    const data = await Axios.get(url);
    const posts = await data.data;

    return posts;
  } catch (error) {
    if (error.response.status === 404) {
      return error.response.status;
    }
  }
}
