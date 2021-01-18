import React from "react";
import { Form } from "react-bootstrap";
import ContentForm from "./contentForm";

const FormContainer = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  dataToEdit,
}) => {
  return (
    <div className='text-left'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row className='container d-flex justify-content-center'>
          <ContentForm
            register={register}
            errors={errors}
            dataToEdit={dataToEdit}
          />
        </Form.Row>
      </Form>
    </div>
  );
};

export default FormContainer;
