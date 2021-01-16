import React, { useEffect, useState } from "react";
import getDataHome from "../../services/getDataHome";
import Posts from "./posts";

const PostsView = ({ error, setError, typeError, setTypeError }) => {
  const [dataPosts, setDataPosts] = useState([]);

  useEffect(() => {
    getDataHome(setError, setDataPosts, setTypeError);
  }, [setDataPosts, setError, setTypeError]);

  return <Posts error={error} typeError={typeError} dataPosts={dataPosts} />;
};

export default PostsView;
