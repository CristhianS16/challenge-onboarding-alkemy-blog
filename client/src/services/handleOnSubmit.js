import Axios from "axios";
import { api } from "../config";

export default async function handleOnSubmit(type, data, id, history) {
  const url = id ? `${api}/posts/${id}` : `${api}/posts/`;
  if (data.image === "") {
    data.image = "https://via.placeholder.com/450x300.jpg";
  }
  if (type === "post") {
    try {
      await Axios.post(url, data);
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  } else if (type === "edit") {
    try {
      await Axios.patch(url, data);
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  }
}
