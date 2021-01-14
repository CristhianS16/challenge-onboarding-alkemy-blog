import React from "react";

const InputPaginate = ({setSince, setUntil}) => {

  function handleChange(value, type) {
    if (type === "since") {
      setSince(value);
    } else {
      setUntil(value);
    };
  };
  function handleKeyPress(event) {
    event.preventDefault();
  };

  return (
    <>
      <input
        className="col-md-6 border border-dark shadow rounded"
        type="number"
        name="since"
        autoFocus={true}
        defaultValue="0"
        min='0'
        onChange={(e) => {
          handleChange(e.target.value, "since");
        }}
        onKeyPress={(e) => handleKeyPress(e)}
      ></input>
      <input
        className="col-md-6 border border-dark shadow rounded"
        type="number"
        name="until"
        defaultValue="10"
        min='0'
        onChange={(e) => {
          handleChange(e.target.value, "until");
        }}
        onKeyPress={(e) => handleKeyPress(e)}
      ></input>
    </>
  );
};

export default InputPaginate;
