import React from "react";
import Wrapper from "../components/wrapper";
import Title from "../components/title";
import CreateForm from "../components/forms/createForm";

const FormCreate = () => {
  return (
    <Wrapper>
      <Title title="Create a new post" />
      <CreateForm />
    </Wrapper>
  );
};

export default FormCreate;
