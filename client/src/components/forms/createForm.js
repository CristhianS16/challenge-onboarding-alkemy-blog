import React from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ContentForm from "./contentForm";
import handleOnSubmit from "../../services/handleOnSubmit";
import "../../assets/css/create-form.css";

const CreateForm = () => {
  let history = useHistory();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    handleOnSubmit("post", data, data.id, history);
  };

  return (
    <div className="text-left">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row className="container d-flex justify-content-center">
          <ContentForm
            register={register}
            errors={errors}
            dataToEdit={{
              title: "",
              body: "",
              category: "",
              image: "",
            }}
          />
        </Form.Row>
      </Form>
    </div>
  );
};

export default CreateForm;
