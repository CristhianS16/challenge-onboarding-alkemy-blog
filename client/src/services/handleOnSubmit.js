import Axios from "axios";

export default async function handleOnSubmit(type, data, id, history) {
  const url = id
    ? `http://localhost:4000/posts/${id}`
    : `http://localhost:4000/posts/`;

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
