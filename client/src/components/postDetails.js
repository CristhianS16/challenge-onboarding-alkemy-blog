import React from "react";
import { useHistory } from "react-router-dom";

const PostDetails = ({ dataPost: { id, title, body } }) => {
  let history = useHistory();

  return (
    <div className="row d-flex card">
      <div className="bg-dark d-flex justify-content-between align-items-center p-2 mb-2">
        <button
          className="btn btn-dark rounded"
          onClick={() => {
            history.goBack();
          }}
        >
          <strong>&lArr; Go back</strong>
        </button>
        <h2 className="text-white">ID: #{id}</h2>
      </div>
      <img
        src="https://via.placeholder.com/300"
        alt="placeholder"
        className="card-img-bottom col"
      ></img>
      <div className="col card-body">
        <h1 className="card-title">{title}</h1>
        <span className="card-text">{body}</span>
        <div className="d-flex justify-content-between pt-4">
          <p className="card-text">
            Categoría: <strong>Comida</strong>
          </p>
          <p className="card-text">
            <small className="text-muted">16/01/2020</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
