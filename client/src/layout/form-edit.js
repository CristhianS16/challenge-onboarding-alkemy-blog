import React from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../components/wrapper";
import Title from "../components/title";
import EditForm from "../components/forms/editForm";

const FormEdit = ({
  error,
  setError,
  typeError,
  setTypeError,
  dataToEdit,
  setDataToEdit,
}) => {
  let { id } = useParams();

  return (
    <Wrapper>
      <Title title="Edit a post" />
      <EditForm
        error={error}
        setError={setError}
        typeError={typeError}
        setTypeError={setTypeError}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        postId={id}
      />
    </Wrapper>
  );
};

export default FormEdit;
