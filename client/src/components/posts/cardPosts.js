import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Actions from "./actions";
import "../../assets/css/cardPosts.css";

const CardPost = ({ dataPosts }) => {
  return (
    <div className="col-md-12">
      <div className="mt-3">
        {dataPosts.map(({ title, id }) => (
          <Card key={id} className="mt-3 shadow" variant="dark">
            <Card.Header
              className="bg-dark d-flex justify-content-between"
              as="span"
            >
              <h3 className="text-white title-post pr-2">{title}</h3>
              <Actions id={id} />
            </Card.Header>
            <Card.Body>
              <Link to={`/details/${id}`}>
                <Button variant="dark">More details</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardPost;
