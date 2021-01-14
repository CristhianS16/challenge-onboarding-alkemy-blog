import React from "react";
import { Form, Col, Button } from "react-bootstrap";

const ContentForm = ({
  register,
  errors,
  dataToEdit: { title, body, id },
  typeForm,
}) => {
  return (
    <>
      <Form.Group as={Col} md="6" key={id}>
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
          name="body"
          type="textarea"
          defaultValue={body}
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
          placeholder="Category"
          ref={register({
            required: false,
          })}
        />
        <Form.Label>Image Url</Form.Label>
        <Form.Control
          name="image"
          type="text"
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
        Add new post
      </Button>
    </>
  );
};

export default ContentForm;
