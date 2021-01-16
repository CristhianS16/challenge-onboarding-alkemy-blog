import React from "react";
import CardPost from "./cardPosts";
import Error from "../error";

const Posts = ({ error, typeError, dataPosts }) => {
  return (
    <div className="row">
      {error ? (
        <Error
          typeError={typeError}
          message="The posts you are looking for does not exist. How you got here is a mistery. But you can click the button below to go back to the homepage. :)"
        />
      ) : (
        <CardPost dataPosts={dataPosts} />
      )}
    </div>
  );
};

export default Posts;
