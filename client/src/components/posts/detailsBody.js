import React from "react";

const DetailsBody = ({ title, content, category, date }) => {
  return (
    <div className="col card-body">
      <h1 className="card-title">{title}</h1>
      <span className="card-text">{content}</span>
      <div className="d-flex justify-content-between pt-4">
        <p className="card-text">
          Categoría: <strong>{category ? category : "No category"}</strong>
        </p>
        <p className="card-text">
          <small className="text-muted">{date}</small>
        </p>
      </div>
    </div>
  );
};

export default DetailsBody;
