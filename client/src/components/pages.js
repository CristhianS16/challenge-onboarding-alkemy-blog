import React from "react";
import InputPaginate from "./inputPaginate";

const Pages = ({ setSince, setUntil }) => {
  return (
    <div className="row mt-3">
      <div className="col-md-12 d-flex">
        <span className="col-md-12 rounded shadow bg-dark text-white text-center">
          Choose the number of posts you want to see
        </span>
      </div>
      <div className="col-md-12 d-flex">
        <InputPaginate setSince={setSince} setUntil={setUntil} />
      </div>
    </div>
  );
};

export default Pages;
