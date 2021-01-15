import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { useParams } from 'react-router-dom';

const ContentForm = ({
  register,
  errors,
  dataToEdit: { title, content, image, category },
  typeForm
  }) => {

  const { id } = useParams();

  return (
    <>
      <Form.Group as={Col} md="6">
        <Form.Label>Title</Form.Label>
        <Form.Control
          name="title"
          type="text"
          defaultValue={title}
          placeholder="Title"
          ref={register({
            required: true,
            maxLength: {
              value: 60,
              message: "The max length is 60 chars.",
            },
          })}
        />
        <div className="row col-12 text-white text-small text-center bg-danger mx-auto">
          <span className="mx-auto">{errors?.title?.message}</span>
        </div>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          className="text-area"
          name="content"
          type="textarea"
          defaultValue={content}
          placeholder="Content"
          ref={register({
            required: true,
          })}
        />
      </Form.Group>
      <Form.Group as={Col} md="6">
        <Form.Label>Category</Form.Label>
        <Form.Control
          name="category"
          type="text"
          defaultValue={category}
          placeholder="Category"
          ref={register({
            required: false,
          })}
        />
        <Form.Label>Image Url</Form.Label>
        <Form.Control
          name="image"
          type="text"
          defaultValue={image}
          placeholder="Image url"
          ref={register({
            required: false,
            pattern: {
              value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g,
              message: "Please, enter a valid url of image",
            },
          })}
        />
        <div className="row col-12 text-white text-small text-center bg-danger mx-auto">
          <span className="mx-auto">{errors?.image?.message}</span>
        </div>
      </Form.Group>
      <Button className="col-8" variant="dark" type="submit">
        {typeForm || id ? 'Edit' : 'Add' } post
      </Button>
    </>
  );
};

export default ContentForm;
