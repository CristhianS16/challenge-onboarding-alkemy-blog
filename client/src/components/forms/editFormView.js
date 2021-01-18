import React from "react";
import FindPostById from "./findPostById";
import FormContainer from "./formContainer";
import Error from "../error";

const EditFormView = ({
  postId,
  handleSubmit,
  onSubmit,
  register,
  error,
  errors,
  setError,
  typeError,
  setTypeError,
  dataToEdit,
  setDataToEdit,
}) => {
  return (
    <>
      {error ? (
        <Error
          typeError={typeError}
          message='The post you are looking for does not exist. How you got here is a mistery. But you can click the button below to go back to the homepage. :)'
        />
      ) : postId !== "0" ? (
        <FormContainer
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          dataToEdit={dataToEdit}
        />
      ) : (
        <>
          <FindPostById
            setError={setError}
            setTypeError={setTypeError}
            setDataToEdit={setDataToEdit}
          />
          <FormContainer
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            errors={errors}
            dataToEdit={dataToEdit}
          />
        </>
      )}
    </>
  );
};

export default EditFormView;
