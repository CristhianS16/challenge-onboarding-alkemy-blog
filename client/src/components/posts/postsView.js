import React, { useEffect } from "react";
import getDataHome from "../../services/getDataHome";
import Posts from "./posts";

const PostsView = ({
  dataPosts,
  setDataPosts,
  error,
  setError,
  typeError,
  setTypeError,
}) => {
  useEffect(() => {
    getDataHome(setError, setDataPosts, setTypeError);
  }, [setDataPosts, setError, setTypeError]);

  return <Posts error={error} typeError={typeError} dataPosts={dataPosts} />;
};

export default PostsView;
