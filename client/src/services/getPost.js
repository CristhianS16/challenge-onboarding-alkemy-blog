import Axios from "axios";
import { api } from "../config";

export default async function getPost(id) {
  try {
    const url = `${api}/posts/${id}`;
    const data = await Axios.get(url);
    const post = await data.data;

    return post;
  } catch (error) {
    if (error.response.status === 404) {
      return error.response.status;
    }
  }
}
