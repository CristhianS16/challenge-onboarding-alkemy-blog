import React, { useState, useEffect, useMemo } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Wrapper from "../wrapper";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ContentForm from "./contentForm";
import FindPostById from "./findPostById";
import Error from "../error";
import { getPost } from "../../helpers/getDataOfPosts";

const EditForm = ({ error, setError, typeError, setTypeError, postId }) => {
  let history = useHistory();
  const emptyData = useMemo( () => {
    return {title: "",
    content: "",
    image: "",
    category: "",
    id: ""
    };
  }, [])
  

  const [dataToEdit, setDataToEdit] = useState(emptyData);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    data.id = Number(dataToEdit.id);
    if(data.image === ''){
      data.image = 'https://via.placeholder.com/450x300.jpg';
    };
    const url = `http://localhost:4000/posts/${data.id}`;
    try {
      await Axios.patch(url, data);
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (postId !== "0") {
      async function getDataForEdit() {
        try {
          const post = await getPost(postId);
          if (post !== 404) {
            setError(false);
            setDataToEdit(post);
          } else {
            setError(true);
            setTypeError(post);
          }
        } catch (error) {}
      }
      getDataForEdit();
    } else {
      setDataToEdit(emptyData);
    }
  }, [postId, setError, setTypeError, emptyData]);

  return (
    <Wrapper>
      {error ? (
        <Error
          typeError={typeError}
          message="The post you are looking for does not exist. How you got here is a mistery. But you can click the button below to go back to the homepage. :)"
        />
      ) : postId !== "0" ? (
        <div className="text-left">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row className="container d-flex justify-content-center">
              <ContentForm
                register={register}
                errors={errors}
                dataToEdit={dataToEdit}
              />
            </Form.Row>
          </Form>
        </div>
      ) : (
        <>
          <FindPostById
            error={error}
            setError={setError}
            typeError={typeError}
            setTypeError={setTypeError}
            setDataToEdit={setDataToEdit}
          />
          <div className="text-left">
            <Form onSubmit={handleSubmit(onSubmit)} key={dataToEdit.id}>
              <Form.Row className="container d-flex justify-content-center">
                <ContentForm
                  register={register}
                  errors={errors}
                  dataToEdit={dataToEdit}
                  typeForm='Edit'
                />
              </Form.Row>
            </Form>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default EditForm;
