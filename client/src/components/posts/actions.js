import React from "react";
import { useHistory } from "react-router-dom";
import { ActionButton } from './actionButton';
import handleClick from '../../services/handleClick';
import "../../assets/css/cardPosts.css";

const Actions = ({ id }) => {
  let history = useHistory();

  return (
    <div className="d-flex">
      <ActionButton 
        id={id}
        handleClick={handleClick}
        typeButton='edit'
        history={history}
      />
      <ActionButton 
        id={id}
        handleClick={handleClick}
        typeButton='delete'
        history={history}
      />
    </div>
  );
};

export default Actions;
