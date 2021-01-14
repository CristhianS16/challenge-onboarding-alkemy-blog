import React, { useEffect, useState } from "react";
import { getPosts } from "../helpers/getDataOfPosts";

const FindPostById = ({
  error,
  setError,
  typeError,
  setTypeError,
  setDataToEdit,
}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getDataPosts() {
      try {
        const posts = await getPosts("", "", true);
        if (posts !== 404) {
          setError(false);
          setPosts(posts);
        } else {
          setError(true);
          setTypeError(posts);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getDataPosts();
  }, [setError, setTypeError]);

  function handleSelect(e) {
    if (e.target.value !== "") {
      const post = posts.filter(({ id }) => id === Number(e.target.value));
      if (post.length) {
        setDataToEdit(post[0]);
        setError(false);
      } else {
        setError(true);
        setTypeError("404");
      }
    }
  }

  return (
    <div className="row">
      <div className="col-md-12 d-flex justify-content-center">
        <select
          className="col rounded bg-dark text-white mb-2"
          onChange={handleSelect}
        >
          <option value="">Choose a post to edit</option>
          {posts.map(({ id, title }) => (
            <option key={id} value={id}>
              Post: {title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FindPostById;
