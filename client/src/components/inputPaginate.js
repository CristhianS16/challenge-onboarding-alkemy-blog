import React from "react";

const InputPaginate = ({setSince, setUntil}) => {

  function handleChange(value, type) {
    if (type === "since") {
      setSince(value);
    } else {
      setUntil(value);
    };
  };

  return (
    <>
      <input
        className="col-md-6 border border-dark shadow rounded"
        type="number"
        name="since"
        autoFocus={true}
        defaultValue="0"
        onChange={(e) => {
          handleChange(e.target.value, "since");
        }}
      ></input>
      <input
        className="col-md-6 border border-dark shadow rounded"
        type="number"
        name="until"
        defaultValue="10"
        onChange={(e) => {
          handleChange(e.target.value, "until");
        }}
      ></input>
    </>
  );
};

export default InputPaginate;
