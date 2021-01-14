import React from "react";
import { useHistory } from "react-router-dom";
import Wrapper from "../components/wrapper";
import "../assets/css/error.css";

const Error = ({ typeError, message }) => {
  let history = useHistory();

  return (
    <Wrapper>
      <div className="row d-flex">
        <div className="col">
          <h2 className="display-3">¡OOPS!</h2>
          <h1>
            Error <span className="text-danger">{typeError}</span>
          </h1>
        </div>
        <div className="col text-left">
          <p>{message}</p>
          <button
            className="btn btn-dark rounded shadow"
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Error;
