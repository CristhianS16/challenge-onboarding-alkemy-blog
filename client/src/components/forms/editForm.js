import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import Wrapper from "../wrapper";
import EditFormView from "./editFormView";
import { useForm } from "react-hook-form";
import getDataForEdit from "../../services/getDataForEdit";
import handleOnSubmit from "../../services/handleOnSubmit";

const EditForm = ({ error, setError, typeError, setTypeError, postId }) => {
  let history = useHistory();
  const emptyData = useMemo(() => {
    return { title: "", content: "", image: "", category: "", id: "" };
  }, []);

  const [dataToEdit, setDataToEdit] = useState(emptyData);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    data.id = Number(dataToEdit.id);
    if (data.image === "") {
      data.image = "https://via.placeholder.com/450x300.jpg";
    }
    handleOnSubmit("edit", data, data.id, history);
  };

  useEffect(() => {
    if (postId !== "0") {
      getDataForEdit(postId, setError, setDataToEdit, setTypeError);
    } else {
      setDataToEdit(emptyData);
    }
  }, [postId, setError, setTypeError, emptyData]);

  return (
    <Wrapper>
      <EditFormView
        postId={postId}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        error={error}
        setError={setError}
        typeError={typeError}
        setTypeError={setTypeError}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
    </Wrapper>
  );
};

export default EditForm;
