import Axios from "axios";
import { api } from "../config";

export default async function handleClick(e, type, history) {
  const id = e.target.dataset.id;
  if (type === "edit") {
    history.push(`/form-edit/${id}`);
  } else {
    const url = `${api}/posts/${id}`;
    try {
      await Axios.delete(url);
      history.go(0);
    } catch (error) {
      console.error(error);
    }
  }
}
