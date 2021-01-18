import Axios from "axios";
import { api } from "../config";

export default async function getPosts() {
  try {
    const url = `${api}/posts/`;
    const data = await Axios.get(url);
    const posts = await data.data;

    return posts;
  } catch (error) {
    if (error.response.status === 404) {
      return error.response.status;
    }
  }
}
