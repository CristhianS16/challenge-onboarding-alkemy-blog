import React from "react";

const DetailsHeader = ({ history, image, id }) => {
  return (
    <>
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
      <img src={image} alt="placeholder" className="card-img-bottom col"></img>
    </>
  );
};

export default DetailsHeader;
