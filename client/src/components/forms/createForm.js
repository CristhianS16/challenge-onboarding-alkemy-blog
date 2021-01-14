import React from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ContentForm from "./contentForm";
import "../../assets/css/create-form.css";

const CreateForm = () => {
  let history = useHistory();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    const url = "https://jsonplaceholder.typicode.com/posts/";
    try {
      await Axios.post(url, data);
      history.push("/");
    } catch (error) {
      console.error(error);
    }
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
