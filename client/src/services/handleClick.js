import Axios from 'axios';

export default async function handleClick(e, type, history) {
  const id = e.target.dataset.id;
  if (type === "edit") {
    history.push(`/form-edit/${id}`);
  } else {
    const url = `http://localhost:4000/posts/${id}`;
    try {
      await Axios.delete(url);
      history.go(0);
    } catch (error) {
      console.error(error);
    }
  }
}
