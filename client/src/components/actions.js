import React from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "../assets/css/cardPosts.css";

const Actions = ({ id }) => {
  let history = useHistory();

  async function handleClick(e, type) {
    const id = e.target.dataset.id;
    if (type === "edit") {
      history.push(`/form-edit/${id}`);
    } else {
      const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
      try {
        await Axios.delete(url);
        history.go(0);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div className="d-flex">
      <button
        data-id={id}
        className="btn btn-info rounded-circle mr-1"
        onClick={(e) => handleClick(e, "edit")}
      >
        &#x2710;
      </button>
      <button
        data-id={id}
        className="btn btn-danger rounded-circle"
        onClick={(e) => handleClick(e, "delete")}
      >
        &#x2297;
      </button>
    </div>
  );
};

export default Actions;
