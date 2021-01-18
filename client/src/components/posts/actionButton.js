import React from "react";

const ActionButton = ({ id, handleClick, typeButton, history, entity }) => {
  return (
    <button
      data-id={id}
      className='btn btn-dark rounded-circle mr-1'
      onClick={(e) => handleClick(e, typeButton, history)}
    >
      {entity}
    </button>
  );
};

export default ActionButton;
