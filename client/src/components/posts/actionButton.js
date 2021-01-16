import React from "react";

const ActionButton = ({id, handleClick, typeButton, history}) => {
  return (
    <button
      data-id={id}
      className="btn btn-info rounded-circle mr-1"
      onClick={(e) => handleClick(e, typeButton, history)}
    >
      &#x2710;
    </button>
  );
};

export default ActionButton;
