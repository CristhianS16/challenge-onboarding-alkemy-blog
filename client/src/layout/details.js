import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../helpers/getDataOfPosts";
import Wrapper from "../components/wrapper";
import PostDetails from "../components/postDetails";
import Error from "../components/error";

const Details = ({ error, setError, typeError, setTypeError }) => {
  let { id } = useParams();

  const [dataPost, setDataPost] = useState({
    title: "",
    id: "",
    body: "",
  });

  useEffect(() => {
    async function getDataPost() {
      try {
        const post = await getPost(id);
        if (post !== 404) {
          setError(false);
          setDataPost(post);
        } else {
          setTypeError(post);
          setError(true);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getDataPost();
  }, [id, setTypeError, setError]);

  return (
    <Wrapper>
      {error ? (
        <Error
          typeError={typeError}
          message="The post you are looking for does not exist. How you got here is a mistery. But you can click the button below to go back to the homepage. :)"
        />
      ) : (
        <PostDetails dataPost={dataPost} />
      )}
    </Wrapper>
  );
};

export default Details;
