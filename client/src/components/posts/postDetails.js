import React from "react";
import { useHistory } from "react-router-dom";
import DetailsHeader from "./detailsHeader";
import DetailsBody from "./detailsBody";

const PostDetails = ({
  dataPost: { id, title, content, category, image, date },
}) => {
  let history = useHistory();

  return (
    <div className='row d-flex card'>
      <DetailsHeader history={history} image={image} id={id} />
      <DetailsBody
        title={title}
        content={content}
        category={category}
        date={date}
      />
    </div>
  );
};

export default PostDetails;
