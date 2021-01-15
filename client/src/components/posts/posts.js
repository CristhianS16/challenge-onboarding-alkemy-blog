import React, { useEffect, useState } from "react";
import { getPosts } from "../../helpers/getDataOfPosts";
import CardPost from "./cardPosts";
import Error from "../error";

const Posts = ({ error, setError, typeError, setTypeError }) => {
  const [dataPosts, setDataPosts] = useState([]);

  useEffect(() => {
    async function getDataHome() {
      try {
        const posts = await getPosts();
        if (posts !== 404) {
          setError(false);
          setDataPosts(posts);
        } else {
          setError(true);
          setTypeError(posts);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getDataHome();
  }, [setDataPosts, setError, setTypeError]);

  return (
    <div className="row">
      {error ? (
        <Error
          typeError={typeError}
          message="The posts you are looking for does not exist. How you got here is a mistery. But you can click the button below to go back to the homepage. :)"
        />
      ) : (
        <div className="col-md-12">
          <CardPost dataPosts={dataPosts} />
        </div>
      )}
    </div>
  );
};

export default Posts;
